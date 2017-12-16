const contact = require('../../data/contact')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: contact.title,
    list: contact.list,
    about: contact.about
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '资助手册-联系我们'
    }
  }
})
