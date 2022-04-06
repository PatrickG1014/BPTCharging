// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    canIUseOpenData: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    if (!this.data.canIUseOpenData) {
      app.globalData.userInfo.then(userInfo => {
        this.setData({
          userInfo,
          hasUserInfo: true,
        })
      })
    }
  },
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善头像和昵称的用户资料',
    }).then(res => {
      app.resolveUserInfo(res.userInfo)
    }).catch(err => {
      console.log(err)
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
