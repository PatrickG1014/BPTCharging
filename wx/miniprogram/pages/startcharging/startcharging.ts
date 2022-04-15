import { OrderService } from "../../service/charging"

Page({
  data:{},

  onUnlockTap() {
    OrderService.CreateOrder({
      start: 'abc',
    })
    wx.showLoading({
      title: '启动中',
      mask: true,
    })
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/charging/charging',
        complete: () => {
          wx.hideLoading()
        }
      })
    }, 2000)
  },
})