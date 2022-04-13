package charging

import (
	chargingpb "bptcharging/charging/api/gen/v1"
	"bptcharging/shared/auth"
	"context"

	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	Logger *zap.Logger
	chargingpb.UnimplementedChargingServiceServer
}

func (s *Service) StartCharging(c context.Context, req *chargingpb.StartChargingRequest) (*chargingpb.StartChargingResponse, error) {
	aid, err := auth.AccountIDFromContext(c)
	if err != nil {
		return nil, err
	}
	s.Logger.Info("start charging", zap.String("start", req.Start), zap.String("account_id", aid.String()))
	return nil, status.Error(codes.Unimplemented, "")
}
