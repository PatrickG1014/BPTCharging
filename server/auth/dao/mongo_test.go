package dao

import (
	"context"
	"testing"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func TestResolveAccountID(t *testing.T) {
	c := context.Background()
	mc, err := mongo.Connect(c, options.Client().ApplyURI("mongodb://localhost:27017/bptcharging?readPreference=primary&ssl=false"))
	if err != nil {
		t.Fatalf("cannot connect mongodb: %v", err)
	}
	m := NewMongo(mc.Database("bptcharging"))
	id, err := m.ResolveAccountID(c, "123")
	if err != nil {
		t.Errorf("failed to resolve account id for 123: %v", err)
	} else {
		want := "624fd787762578eb29c59d94"
		if id != want {
			t.Errorf("resolve account id: want: %q, got: %q", want, id)
		}
	}
}
