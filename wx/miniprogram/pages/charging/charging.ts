const centPerSec = 0.25

function formatDuration(sec: number) {
  const padString = (n: number) =>
    n < 10 ? '0' + n.toFixed(0) : n.toFixed(0)
  
  const h = Math.floor(sec / 3600)
  sec -= 3600 * h
  const m = Math.floor(sec / 60)
  sec -= 60 * m
  const s = Math.floor(sec)
  return `${padString(h)}:${padString(m)}:${padString(s)}`
}

function formatFee(cents: number) {
  return (cents / 100).toFixed(2)
}

Page({
  timer: undefined as number | undefined,
  data: {
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
    scale: 18,
    markers: [],
    elapsed: '00:00:00',
    fee: '0.00',
  },

  onLoad() {
    this.setupTimer()
  },

  onUnload() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },

  setupTimer() {
    let elapsedSec = 0
    let cents = 0
    this.timer = setInterval(() => {
      elapsedSec++
      cents += centPerSec
      this.setData({
        elapsed: formatDuration(elapsedSec),
        fee: formatFee(cents)
      })
    }, 1000)
  },

  onStopClicked() {
    
  }
})