package dao

import (
	chargingpb "bptcharging/charging/api/gen/v1"
	mongotesting "bptcharging/shared/mongo/testing"
	"context"
	"os"
	"testing"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var mongoURI string

func TestCreateOrder(t *testing.T) {
	mongoURI = "mongodb://localhost:27017"
	c := context.Background()
	mc, err := mongo.Connect(c, options.Client().ApplyURI(mongoURI))
	if err != nil {
		t.Fatalf("cannot connect mongodb: %v", err)
	}
	m := NewMongo(mc.Database("bptcharging"))

	order, err := m.CreateOrder(c, &chargingpb.Order{
		AccountId:  "account1",
		PileId:     "pile1",
		FeeCentEnd: 10000,
		Status:     chargingpb.OrderStatus_FINISHED,
	})
	if err != nil {
		t.Errorf("cannot create order: %v", err)
	}
	t.Errorf("inserted row %s with updatedat %v", order.ID, order.UpdatedAt)
}

func TestMain(m *testing.M) {
	os.Exit(mongotesting.RunWithMongoInDocker(m, &mongoURI))
}
