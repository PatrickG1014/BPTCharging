package main

import (
	authpb "bptcharging/auth/api/gen/v1"
	"bptcharging/auth/auth"
	"bptcharging/auth/wechat"
	"flag"
	"log"
	"net"

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

	lis, err := net.Listen("tcp", ":8081")
	if err != nil {
		logger.Fatal("cannot listen", zap.Error(err))
	}

	s := grpc.NewServer()
	authpb.RegisterAuthServiceServer(s, &auth.Service{
		OpenIDResolver: &wechat.Service{
			AppID:     "wxbdf1e0c7c77107d0",
			AppSecret: *appSecret,
		},
		Logger: logger,
	})

	err = s.Serve(lis)
	logger.Fatal("cannot serve", zap.Error(err))
}
