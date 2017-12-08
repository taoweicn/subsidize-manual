Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    toView: "id0",
    showDropMenu: false,
    list: [
      { title: "种类1", text: "国家奖学金"},
      { title: "种类2", text: "国家奖学金"},
      { title: "种类3", text: "国家奖学金"},
      { title: "种类4", text: "国家奖学金"},
      { title: "种类5", text: "国家奖学金"},
      { title: "种类6", text: "国家奖学金"},
      { title: "种类7", text: "国家奖学金"},
      { title: "种类4", text: "国家奖学金"},
      { title: "种类5", text: "国家奖学金"},
      { title: "种类6", text: "国家奖学金"},
      { title: "种类7", text: "国家奖学金"},
      { title: "种类4", text: "国家奖学金"},
      { title: "种类5", text: "国家奖学金"},
      { title: "种类6", text: "国家奖学金"},
      { title: "种类7", text: "国家奖学金"},
      { title: "种类8", text: "国家奖学金"},
      { title: "种类9", text: "国家奖学金"}
      ]
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
    this.setData({
      title: options.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
