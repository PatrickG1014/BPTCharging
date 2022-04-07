import { IAppOption } from "../../appoption"

Page({
  data: {
    hasUserInfo: false,
    userInfo: {},
  },

  onLoad() {
    getApp<IAppOption>().globalData.userInfo.then(userInfo => {
      this.setData({
        userInfo,
        hasUserInfo: true,
      })
    })
  },

  onLoginClicked() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})