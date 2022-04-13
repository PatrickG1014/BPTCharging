package main

import (
	chargingpb "bptcharging/charging/api/gen/v1"
	"bptcharging/charging/charging"
	"bptcharging/shared/auth"
	"flag"
	"log"
	"net"

	"go.uber.org/zap"
	"google.golang.org/grpc"
)

func main() {
	flag.Parse()
	logger, err := zap.NewDevelopment()
	if err != nil {
		log.Fatalf("cannot create logger: %v", err)
	}

	lis, err := net.Listen("tcp", ":8082")
	if err != nil {
		logger.Fatal("cannot listen", zap.Error(err))
	}

	in, err := auth.Interceptor("shared/auth/public.key")
	if err != nil {
		logger.Fatal("cannot create auth interceptor", zap.Error(err))
	}

	s := grpc.NewServer(grpc.UnaryInterceptor(in))
	chargingpb.RegisterChargingServiceServer(s, &charging.Service{
		Logger: logger,
	})

	err = s.Serve(lis)
	logger.Fatal("cannot serve", zap.Error(err))
}
