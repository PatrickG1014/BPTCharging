package mgo

import (
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Common field names.
const (
	IDFieldName        = "_id"
	UpdatedAtFieldName = "updatedat"
)

// IDField defines the object id field.
type IDField struct {
	ID primitive.ObjectID `bson:"_id"`
}

// UpdatedAtField defines the updateat field.
type UpdatedAtField struct {
	UpdatedAt int64 `bson:"updatedat"`
}

// NewObjID generates a new object id.
var NewObjID = primitive.NewObjectID

// UpdatedAt returns a value suitable for UpdatedAt field.
var UpdatedAt = func() int64 {
	return time.Now().UnixNano()
}

// Set returns a $set update document.
func Set(v interface{}) bson.M {
	return bson.M{
		"$set": v,
	}
}

// SetOnInsert returns a $setOnInsert update document.
func SetOnInsert(v interface{}) bson.M {
	return bson.M{
		"$setOnInsert": v,
	}
}
