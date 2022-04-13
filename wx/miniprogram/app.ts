import { IAppOption } from "./appoption"
import { BPTCharging } from "./service/request"

let resolveUserInfo: (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void

App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve) => {
      resolveUserInfo = resolve
    })
  },

  onLaunch() {
    // // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    BPTCharging.login()
  },

  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo) {
    resolveUserInfo(userInfo)
  },
})