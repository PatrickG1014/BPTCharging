import { ChargingService } from "../../service/charging"

Page({
  data:{},

  onUnlockTap() {
    ChargingService.StartCharging({
      start: 'abc',
    })
    return
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