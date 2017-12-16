Page({
  data: {
    name: 'apartment',
    data: require('../../data/apartment')
  },

  onShareAppMessage: function () {
    return {
      title: '资助手册-部门介绍'
    }
  }
})


