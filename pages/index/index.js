const manual = require('../../data/manual')
const formatSearchResult = require('../../utils/formatSearchResult')

Page({
  data: {
    list: [],
    searchResultList: [],
    search: false,
    toView: 'id0'
  },

  search: function (e) {
    let searchKeywords = e.detail.inputValue.trim(), searchResultList
    if (!searchKeywords) {
      this.setData({
        search: false
      })
      return
    }
    searchResultList = formatSearchResult(manual, searchKeywords)
    this.setData({
      search: true,
      searchResultList: searchResultList
    })
  },

  onLoad: function () {
    this.setData({
      list: manual.list
    })
  },

  onShareAppMessage: function () {
    return {
      title: '资助手册'
    }
  }
})


