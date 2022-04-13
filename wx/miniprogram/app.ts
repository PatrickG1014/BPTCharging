import camelcaseKeys from "camelcase-keys"
import { IAppOption } from "./appoption"
import { auth } from "./service/proto_gen/auth/auth_pb"
import { charging } from "./service/proto_gen/charging/charging_pb"

let resolveUserInfo: (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void

App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve) => {
      resolveUserInfo = resolve
    })
  },
  onLaunch() {
    // wx.request({
    //   url: 'http://localhost:8080/trip/trip123',
    //   method: 'GET',
    //   success: res => {
    //     const getTripRes = bptcharging.GetTripResponse.fromObject(camelcaseKeys(res.data as object, {
    //       deep: true,
    //     }))
    //     console.log(getTripRes)
    //     console.log('status is', bptcharging.TripStatus[getTripRes.trip?.status!])
    //   },
    //   fail: console.error,
    // })

    // // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'http://localhost:8080/v1/auth/login',
          method: 'POST',
          data: {
            code: res.code,
          } as auth.v1.ILoginRequest,
          success: res => {
            const loginResp: auth.v1.ILoginResponse = auth.v1.LoginResponse.fromObject(
              camelcaseKeys(res.data as object)
            )
            console.log(loginResp)
            wx.request({
              url: 'http://localhost:8080/v1/charging',
              method: 'POST',
              data: {
                start: 'abc',
              } as charging.v1.IStartChargingRequest,
              header: {
                authorization: 'Bearer ' + loginResp.accessToken,
              },
            })
          },
          fail: console.error,
        })
      },
    })
  },
  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo) {
    resolveUserInfo(userInfo)
  },
})