Page({
  data:{},

  onUnlockTap() {
    wx.showLoading({
      title: '启动中',
      mask: true,
    })
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/',
        complete: () => {
          wx.hideLoading()
        }
      })
    }, 2000)
  },
})