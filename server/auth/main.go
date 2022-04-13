package main

import (
	authpb "bptcharging/auth/api/gen/v1"
	"bptcharging/auth/auth"
	"bptcharging/auth/dao"
	"bptcharging/auth/token"
	"bptcharging/auth/wechat"
	"bptcharging/shared/server"
	"context"
	"flag"
	"io"
	"log"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.uber.org/zap"
	"google.golang.org/grpc"
)

var appSecret = flag.String("appsecret", "", "specify the appsecret of the miniprogram")

func main() {
	flag.Parse()
	logger, err := zap.NewDevelopment()
	if err != nil {
		log.Fatalf("cannot create logger: %v", err)
	}

	c := context.Background()
	mongoClient, err := mongo.Connect(c, options.Client().ApplyURI("mongodb://localhost:27017/bptcharging?readPreference=primary&ssl=false"))
	if err != nil {
		logger.Fatal("cannot connect mongodb", zap.Error(err))
	}

	pkFile, err := os.Open("auth/private.key")
	if err != nil {
		logger.Fatal("cannot open private key", zap.Error(err))
	}
	pkBytes, err := io.ReadAll(pkFile)
	if err != nil {
		logger.Fatal("cannot read private key", zap.Error(err))
	}
	privKey, err := jwt.ParseRSAPrivateKeyFromPEM(pkBytes)
	if err != nil {
		logger.Fatal("cannot parse private key", zap.Error(err))
	}

	err = server.RunGRPCServer(&server.GRPCConfig{
		Name: "auth",
		Addr: ":8081",
		RegisterFunc: func(s *grpc.Server) {
			authpb.RegisterAuthServiceServer(s, &auth.Service{
				OpenIDResolver: &wechat.Service{
					AppID:     "wxbdf1e0c7c77107d0",
					AppSecret: *appSecret,
				},
				Mongo:          dao.NewMongo(mongoClient.Database("bptcharging")),
				TokenGenerator: token.NewJWTTokenGen("bptcharging/auth", privKey),
				TokenExpire:    2 * time.Hour,
				Logger:         logger,
			})
		},
		Logger: logger,
	})

	logger.Fatal("cannot start server", zap.Error(err))
}
