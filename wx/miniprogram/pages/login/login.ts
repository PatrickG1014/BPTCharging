import { IAppOption } from "../../appoption"

let resolveHasUserInfo: (value: boolean | PromiseLike<boolean>) => void

Page({
  hasUserInfo: undefined as undefined | Promise<boolean>,

  onLoad() {
    this.hasUserInfo = new Promise<boolean>((resolve) => {
      resolveHasUserInfo = resolve
    })
    this.hasUserInfo.then(_ => {
      wx.showLoading({
        title: '加载中',
        mask: true,
      })
      wx.navigateBack({
        complete: () => {
          wx.hideLoading()
        }
      })
    })
  },

  onLoginClicked() {
    this.getUserProfile()
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善头像和昵称的用户资料',
    }).then(res => {
      resolveHasUserInfo(true)
      getApp<IAppOption>().resolveUserInfo(res.userInfo)
    }).catch(err => {
      console.log(err)
    })
  },
})