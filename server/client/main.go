package main

import (
	trippb "bptcharging/proto/gen/go"
	"context"
	"fmt"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	log.SetFlags(log.Lshortfile)
	conn, err := grpc.Dial("localhost:8081", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("cannot connect server: %v", err)
	}

	tsClient := trippb.NewTripServiceClient(conn)
	r, err := tsClient.GetTrip(context.Background(), &trippb.GetTripRequest{
		Id: "trip456",
	})
	if err != nil {
		log.Fatalf("cannot call GetTrip: %v", err)
	}

	fmt.Println(r)
}
