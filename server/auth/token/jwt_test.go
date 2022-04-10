package token

import (
	"testing"
	"time"

	"github.com/dgrijalva/jwt-go"
)

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAiP+vjPCBP0flO3SmhG1MW3muFOPsQWp0/agZDk1DLOZaATU+
dz8I4yfJZXxS/JNpSYkhQ6fH0qtGJpMK3jfZTe1ITL+FNTCe61AnUu/+Lu5hFoYN
ZVWNktEUrDadZvrN5yViEGKunL9jQk6mtn+H4GyTLumabbdXt2wdb8PDBZuVtGaY
ah/JiRjuuzhJBSm6ccY6MXSkCjiK09GhY1Cy0xaoxYldHpImpAgxS1gSRtl080TF
Nmk0IFJVrdOZEcQ3hl/zLXfdzAEsb36DyW4OSq0+aQiK4QistmYuY0fLc7oR238+
rWlYqnPd4L10gfIoZJr1zJI8H8xr0LjkC5R31wIDAQABAoIBAAkfXYU5DqI0G2OW
JPB0hr0goSLq+nRwrlGlu+Vj57E5tYyXCw3NuL3HjHWhjbUb68rlwr1KktfIZ+dx
qyuY9HNn9YSGzEv6bNqmf7faG0bswLJLQuEYjVDVc1b0XA7bbJKTvq/wokf1xppH
uno0i8u57yMUkx/zMXgZTux+UKIy3RCJjYSynbK998PY1SatHR3KOFq+SsE7VB9M
3p9eYxexy2OvKxl0kwbt4K5Dz532WTndSkB2rayhVuZTLc/CnR6dR2GMUWDzf6J3
/nSW+5hpip+W/X55PsyOa3AkPWZOsYemz3YeF92Pa/sPWPwwDbdcZCQYtG/ycOVY
fV6zHEECgYEAxLUQEEt9EHqwpoJltbZNpRiqrGEEaycaPpwD75LNRA9nVFKZ/SEt
yfB7Xkh26Lg6mjq8XQuVBGmKwGx0Y1RWZ2dgPFQg/yFzrq0OyZf2jHrHEHvYi+8x
HbdiujuuCdUuByOuEy/f1Q+0wNj7p+K5Km7fQ9m97fTdECrD7JVZPikCgYEAsks1
y5DmoUb6FeapOA8jMZHuYDx0l7ZpxlCeLt4QT6s6w5W/V/moJZaiq1j3V+nIbz1u
Hp6woRbO4nlUpI49bI8E/nwzvFVTB53acAKwC9Hxu9JX0oKxeJlW/QnRvx+Y9P4w
9TuCl83xALog1ChuJS4o1dIp65PjV2/oIutKxf8CgYBG0dVduH/nbfSpjirmOCNO
PEo+U5OOrH5TakI0f8rtJQqTnkWYj9h3auBPupEtCh73JgxpB2F4PDNbQfDJTjTp
d5t7POLAWB/ZFK9NPyvhudZvhdcZ0l0BkOO3nwLywVCX+22RtNvGTqhKAhTghc0a
jN5PBFbQFCd+yZbOV5rQuQKBgAnp3Kfg+rHk/GrTVH1lehN7hcGcGu+EmQUJ3oHE
nyuO3cmaPfVqUEsmwQy9+aLNwPNOex0Avdl3JzG4hVhRAGFU4nYz+bxzEhbOVCL+
Q0Ok/MfwvilaUvvdqtSPAzaZTyvwJlC8alp+fPQJZWHmjZlLo8Gf2ezbYDywYDvw
0UuJAoGADR+YIGU/RY7tiJMsjMb2Cfad0j0GFvTTkkJNKSmHuHAU3gEZZxZGfeUG
YFuFlec+Tgjz2pSoJkBjIuIBXvLDF9/XhXyVvpYUg0djb3sIREryhOB9E826ofLL
ympUr4n7x/aGxj+K8a6PB6fpYc5tV2OxeIrODJ6qhfHRp6fu6+Q=
-----END RSA PRIVATE KEY-----`

func TestGenerateToken(t *testing.T) {
	key, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(privateKey))
	if err != nil {
		t.Fatalf("cannot parse private key: %v", err)
	}
	g := NewJWTTokenGen("bptcharging/auth", key)
	g.nowFunc = func() time.Time {
		return time.Unix(1516239022, 0)
	}
	tkn, err := g.GenerateToken("624fd787762578eb29c59d94", 2*time.Hour)
	if err != nil {
		t.Errorf("cannot generate token: %v", err)
	}
	want := "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiYnB0Y2hhcmdpbmcvYXV0aCIsInN1YiI6IjYyNGZkNzg3NzYyNTc4ZWIyOWM1OWQ5NCJ9.QFDWAbYTVnneHyOV6uhYMofKLqbhF17bmQ-lYXPQ-RmXjxvcMXw8r_sZwHQ5QDEmQyaSxoQKcAuChp676JFaLjiJBg6suitg7Nj9mxPQddo4BTMp3OV-jaOoVxhldoG0D_7dfpYbrzDaBt5IdjuphnhahF8Q7M7iInGxQXUtvOIJd1bNdSkt9tFOf4dRvXsKoKQ77ow3T5dnoGWsVdcxzSbj9QZCDf-9UxV6pq1H95PeRbo5YEnW_HncvH8FsL7qlCO5sN8ttZtEqAp63vhjTBu45iVyZ6tknDhDZF6hgXxdK8UluA6bKHNnK7BauF8Vb1oVyNua0zOEMi583i8_mw"
	if tkn != want {
		t.Errorf("wrong token generated. want: %q; got: %q", want, tkn)
	}
}
