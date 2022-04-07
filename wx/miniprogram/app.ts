import camelcaseKeys from "camelcase-keys"
import { IAppOption } from "./appoption"
import { bptcharging } from "./service/proto_gen/trip_pb"

let resolveUserInfo: (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void

App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve) => {
      resolveUserInfo = resolve
    })
  },
  onLaunch() {
    wx.request({
      url: 'http://localhost:8080/trip/trip123',
      method: 'GET',
      success: res => {
        const getTripRes = bptcharging.GetTripResponse.fromObject(camelcaseKeys(res.data as object, {
          deep: true,
        }))
        console.log(getTripRes)
        console.log('status is', bptcharging.TripStatus[getTripRes.trip?.status!])
      },
      fail: console.error,
    })

    // // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo) {
    resolveUserInfo(userInfo)
  },
})