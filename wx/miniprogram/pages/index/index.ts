import { IAppOption } from "../../appoption"

Page({
  isPageShowing: false,
  data: {
    hasUserInfo: false,
    userInfo: {},
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: true,
      showScale: false,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    location: {
      latitude: 23.099994,
      longitude: 113.324520,
    },
    scale: 10,
    markers: [
      {
        iconPath: "/resources/car.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 40,
        height: 20
      },
      {
        iconPath: "/resources/car.png",
        id: 1,
        latitude: 23.099994,
        longitude: 114.324520,
        width: 40,
        height: 20
      },
    ]
  },

  onLoad() {
    getApp<IAppOption>().globalData.userInfo.then(userInfo => {
      this.setData({
        userInfo,
        hasUserInfo: true,
      })
    })
  },

  onShow() {
    this.isPageShowing = true
  },

  onHide() {
    this.isPageShowing = false
  },

  onUserClicked() {
    wx.navigateTo({
      url: '/pages/user/user',
    })
  },

  onMyLocationTap() {
    wx.getLocation({
      type: 'gcj02',
    }).then(res => {
      this.setData({
        location: {
          latitude: res.latitude,
          longitude: res.longitude,
        },
        scale: 16,
      })
    }).catch(() => {
      wx.showToast({
        icon: 'none',
        title: '请勿频繁获取定位或前往设置页授权',
      })
    })
  },

  onScanClicked() {
    wx.scanCode({
      success: () => {
        wx.navigateTo({
          url: '/pages/startcharging/startcharging',
        })
      },
      fail: console.error,
    })
  },

  moveCars() {
    const map = wx.createMapContext("map")
    const dest = {
      latitude: 23.099994,
      longitude: 113.324520,
    }

    const moveCar = () => {
      dest.latitude += 0.1
      dest.longitude += 0.1
      map.translateMarker({
        destination: {
          latitude: dest.latitude,
          longitude: dest.longitude,
        },
        markerId: 0,
        autoRotate: false,
        rotate: 0,
        duration: 5000,
        animationEnd: () => {
          if (this.isPageShowing) {
            moveCar()
          }
        },
      })
    }

    moveCar()
  },
})