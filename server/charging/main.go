package main

import (
	chargingpb "bptcharging/charging/api/gen/v1"
	"bptcharging/charging/order"
	"bptcharging/shared/server"
	"log"

	"go.uber.org/zap"
	"google.golang.org/grpc"
)

func main() {
	logger, err := zap.NewDevelopment()
	if err != nil {
		log.Fatalf("cannot create logger: %v", err)
	}

	err = server.RunGRPCServer(&server.GRPCConfig{
		Name:              "order",
		Addr:              ":8082",
		AuthPublicKeyFile: "shared/auth/public.key",
		RegisterFunc: func(s *grpc.Server) {
			chargingpb.RegisterOrderServiceServer(s, &order.Service{
				Logger: logger,
			})
		},
		Logger: logger,
	})

	logger.Fatal("cannot start server", zap.Error(err))
}
