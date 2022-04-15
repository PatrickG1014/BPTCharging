package order

import (
	chargingpb "bptcharging/charging/api/gen/v1"
	"context"

	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	Logger *zap.Logger
	chargingpb.UnimplementedOrderServiceServer
}

func (s *Service) CreateOrder(c context.Context, req *chargingpb.CreateOrderRequest) (*chargingpb.OrderEntity, error) {
	return nil, status.Error(codes.Unimplemented, "")
}

func (s *Service) GetOrder(c context.Context, req *chargingpb.GetOrderRequest) (*chargingpb.Order, error) {
	return nil, status.Error(codes.Unimplemented, "")
}

func (s *Service) GetOrders(c context.Context, req *chargingpb.GetOrdersRequest) (*chargingpb.GetOrdersResponse, error) {
	return nil, status.Error(codes.Unimplemented, "")
}

func (s *Service) UpdateOrder(c context.Context, req *chargingpb.UpdateOrderRequest) (*chargingpb.Order, error) {
	return nil, status.Error(codes.Unimplemented, "")
}
