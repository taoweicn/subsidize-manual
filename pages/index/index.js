Page({
  data: {
    name: 'manual',
    data: require('../../data/manual')
  },

  onShareAppMessage: function () {
    return {
      title: '资助手册'
    }
  }
})


