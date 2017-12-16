Page({
  data: {
    name: 'faq',
    data: require('../../data/faq')
  },

  onShareAppMessage: function () {
    return {
      title: '资助手册-常见问题'
    }
  }
})


