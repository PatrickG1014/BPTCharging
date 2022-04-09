package dao

import (
	mgo "bptcharging/shared/mongo"
	mongotesting "bptcharging/shared/mongo/testing"
	"context"
	"os"
	"testing"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var mongoURI string

func TestResolveAccountID(t *testing.T) {
	c := context.Background()
	mc, err := mongo.Connect(c, options.Client().ApplyURI(mongoURI))
	if err != nil {
		t.Fatalf("cannot connect mongodb: %v", err)
	}
	m := NewMongo(mc.Database("bptcharging"))
	_, err = m.col.InsertMany(c, []interface{}{
		bson.M{
			mgo.IDField: mustObjID("624fd787762578eb29c59d94"),
			openIDField: "openid_1",
		},
		bson.M{
			mgo.IDField: mustObjID("624fd787762578eb29c59d95"),
			openIDField: "openid_2",
		},
	})
	if err != nil {
		t.Fatalf("cannot insert initial values: %v", err)
	}
	m.newObjID = func() primitive.ObjectID {
		return mustObjID("624fd787762578eb29c59d96")
	}

	cases := []struct {
		name   string
		openID string
		want   string
	}{
		{
			name:   "existing_user",
			openID: "openid_1",
			want:   "624fd787762578eb29c59d94",
		},
		{
			name:   "another_existing_user",
			openID: "openid_2",
			want:   "624fd787762578eb29c59d95",
		},
		{
			name:   "new_user",
			openID: "openid_3",
			want:   "624fd787762578eb29c59d96",
		},
	}

	for _, cc := range cases {
		t.Run(cc.name, func(t *testing.T) {
			id, err := m.ResolveAccountID(context.Background(), cc.openID)
			if err != nil {
				t.Errorf("failed to resolve account id for %q: %v", cc.openID, err)
			}
			if id != cc.want {
				t.Errorf("resolve account id: want: %q, got: %q", cc.want, id)
			}
		})
	}
}

func mustObjID(hex string) primitive.ObjectID {
	objID, err := primitive.ObjectIDFromHex(hex)
	if err != nil {
		panic(err)
	}
	return objID
}

func TestMain(m *testing.M) {
	os.Exit(mongotesting.RunWithMongoInDocker(m, &mongoURI))
}
