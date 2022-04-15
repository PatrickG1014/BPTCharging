package dao

import (
	chargingpb "bptcharging/charging/api/gen/v1"
	mgo "bptcharging/shared/mongo"
	"context"

	"go.mongodb.org/mongo-driver/mongo"
)

// Mongo defines a mongo dao.
type Mongo struct {
	col *mongo.Collection
}

// NewMongo creates a new mongo dao.
func NewMongo(db *mongo.Database) *Mongo {
	return &Mongo{
		col: db.Collection("order"),
	}
}

// OrderRecord defines an order record in mongodb.
type OrderRecord struct {
	mgo.IDField        `bson:"inline"`
	mgo.UpdatedAtField `bson:"inline"`
	Order              *chargingpb.Order `bson:"order"`
}

// CreateOrder creates an order.
func (m *Mongo) CreateOrder(c context.Context, order *chargingpb.Order) (*OrderRecord, error) {
	r := &OrderRecord{
		Order: order,
	}
	r.ID = mgo.NewObjID()
	r.UpdatedAt = mgo.UpdatedAt()

	_, err := m.col.InsertOne(c, r)
	if err != nil {
		return nil, err
	}

	return r, nil
}
