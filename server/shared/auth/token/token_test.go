package token

import (
	"testing"
	"time"

	"github.com/dgrijalva/jwt-go"
)

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiP+vjPCBP0flO3SmhG1M
W3muFOPsQWp0/agZDk1DLOZaATU+dz8I4yfJZXxS/JNpSYkhQ6fH0qtGJpMK3jfZ
Te1ITL+FNTCe61AnUu/+Lu5hFoYNZVWNktEUrDadZvrN5yViEGKunL9jQk6mtn+H
4GyTLumabbdXt2wdb8PDBZuVtGaYah/JiRjuuzhJBSm6ccY6MXSkCjiK09GhY1Cy
0xaoxYldHpImpAgxS1gSRtl080TFNmk0IFJVrdOZEcQ3hl/zLXfdzAEsb36DyW4O
Sq0+aQiK4QistmYuY0fLc7oR238+rWlYqnPd4L10gfIoZJr1zJI8H8xr0LjkC5R3
1wIDAQAB
-----END PUBLIC KEY-----`

func TestVerify(t *testing.T) {
	pubKey, err := jwt.ParseRSAPublicKeyFromPEM([]byte(publicKey))
	if err != nil {
		t.Fatalf("cannot parse public key: %v", err)
	}

	v := &JWTTokenVerifier{
		PublicKey: pubKey,
	}

	cases := []struct {
		name    string
		tkn     string
		now     time.Time
		want    string
		wantErr bool
	}{
		{
			name: "valid_token",
			tkn:  "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiYnB0Y2hhcmdpbmcvYXV0aCIsInN1YiI6IjYyNGZkNzg3NzYyNTc4ZWIyOWM1OWQ5NCJ9.QFDWAbYTVnneHyOV6uhYMofKLqbhF17bmQ-lYXPQ-RmXjxvcMXw8r_sZwHQ5QDEmQyaSxoQKcAuChp676JFaLjiJBg6suitg7Nj9mxPQddo4BTMp3OV-jaOoVxhldoG0D_7dfpYbrzDaBt5IdjuphnhahF8Q7M7iInGxQXUtvOIJd1bNdSkt9tFOf4dRvXsKoKQ77ow3T5dnoGWsVdcxzSbj9QZCDf-9UxV6pq1H95PeRbo5YEnW_HncvH8FsL7qlCO5sN8ttZtEqAp63vhjTBu45iVyZ6tknDhDZF6hgXxdK8UluA6bKHNnK7BauF8Vb1oVyNua0zOEMi583i8_mw",
			now:  time.Unix(1516239122, 0),
			want: "624fd787762578eb29c59d94",
		},
		{
			name:    "token_expired",
			tkn:     "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiYnB0Y2hhcmdpbmcvYXV0aCIsInN1YiI6IjYyNGZkNzg3NzYyNTc4ZWIyOWM1OWQ5NCJ9.QFDWAbYTVnneHyOV6uhYMofKLqbhF17bmQ-lYXPQ-RmXjxvcMXw8r_sZwHQ5QDEmQyaSxoQKcAuChp676JFaLjiJBg6suitg7Nj9mxPQddo4BTMp3OV-jaOoVxhldoG0D_7dfpYbrzDaBt5IdjuphnhahF8Q7M7iInGxQXUtvOIJd1bNdSkt9tFOf4dRvXsKoKQ77ow3T5dnoGWsVdcxzSbj9QZCDf-9UxV6pq1H95PeRbo5YEnW_HncvH8FsL7qlCO5sN8ttZtEqAp63vhjTBu45iVyZ6tknDhDZF6hgXxdK8UluA6bKHNnK7BauF8Vb1oVyNua0zOEMi583i8_mw",
			now:     time.Unix(1517239122, 0),
			wantErr: true,
		},
		{
			name:    "bad_token",
			tkn:     "bad_token",
			now:     time.Unix(1517239122, 0),
			wantErr: true,
		},
		{
			name:    "wrong_signature",
			tkn:     "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiYnB0Y2hhcmdpbmcvYXV0aCIsInN1YiI6IjYyNGZkNzg3NzYyNTc4ZWIyOWM1OWQ5NSJ9.QFDWAbYTVnneHyOV6uhYMofKLqbhF17bmQ-lYXPQ-RmXjxvcMXw8r_sZwHQ5QDEmQyaSxoQKcAuChp676JFaLjiJBg6suitg7Nj9mxPQddo4BTMp3OV-jaOoVxhldoG0D_7dfpYbrzDaBt5IdjuphnhahF8Q7M7iInGxQXUtvOIJd1bNdSkt9tFOf4dRvXsKoKQ77ow3T5dnoGWsVdcxzSbj9QZCDf-9UxV6pq1H95PeRbo5YEnW_HncvH8FsL7qlCO5sN8ttZtEqAp63vhjTBu45iVyZ6tknDhDZF6hgXxdK8UluA6bKHNnK7BauF8Vb1oVyNua0zOEMi583i8_mw",
			now:     time.Unix(1516239122, 0),
			wantErr: true,
		},
	}

	for _, c := range cases {
		t.Run(c.name, func(t *testing.T) {
			jwt.TimeFunc = func() time.Time {
				return c.now
			}
			accountID, err := v.Verify(c.tkn)

			if !c.wantErr && err != nil {
				t.Errorf("verification failed: %v", err)
			}

			if c.wantErr && err == nil {
				t.Errorf("want error; got no error")
			}

			if accountID != c.want {
				t.Errorf("wrong account id, want: %q, got: %q", c.want, accountID)
			}
		})
	}
}
