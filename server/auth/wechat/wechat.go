package wechat

import (
	"fmt"

	"github.com/silenceper/wechat/v2/cache"
	"github.com/silenceper/wechat/v2/miniprogram"
	"github.com/silenceper/wechat/v2/miniprogram/config"
)

type Service struct {
	AppID     string
	AppSecret string
}

func (s *Service) Resolve(code string) (string, error) {
	memory := cache.NewMemory()
	cfg := &config.Config{
		AppID:     s.AppID,
		AppSecret: s.AppSecret,
		Cache:     memory,
	}
	miniprogram := miniprogram.NewMiniProgram(cfg)
	auth := miniprogram.GetAuth()
	resp, err := auth.Code2Session(code)
	if err != nil {
		return "", fmt.Errorf("wechat.Code2Session: %v", err)
	}

	return resp.OpenID, nil
}
