const util = require('../../utils/util.js')
const manual = require('../../data/manual')
const apartment = require('../../data/apartment')
const faq = require('../../data/faq')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    title: "详情页",
    toView: "id0",
    showDropMenu: false,
    list: [],
    introduction: ''
  },

  scrollToView: function (e) {
    let _id = e.target.dataset.index;
    this.setData({
      toView: 'id' + _id
    })
    this.hideDropMenu()
  },

  dropMenu: function () {
    this.setData({
      showDropMenu: !this.data.showDropMenu
    })
  },

  hideDropMenu: function () {
    this.setData({
      showDropMenu: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data, result;
    switch(options.name) {
      case 'manual':
        data = manual
        break
      case 'apartment':
        data = apartment
        break
      case 'faq':
        data = faq
        break
      default:
        data = ''
    }
    result = util.searchKey('type', options.title, data.list)
    this.setData({
      name: options.name,
      title: options.title,
      toView: options.toView,
      introduction: options.introduction,
      list: result.content
    })
    console.log(this.data.list)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: `资助手册-${this.data.title}`,
      path: `pages/detail/detail?title=${this.data.title}&introduction=${this.data.introduction}&name=${this.data.name}&toView=${this.data.toView}`,
    }
  }
})
