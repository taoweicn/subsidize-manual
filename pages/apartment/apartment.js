const apartment = require('../../data/apartment')

Page({
  data: {
    list: [],
    searchResultList: [],
    search: false,
    toView: 'id0'
  },

  search: function (e) {
    let searchKeywords = e.detail.inputValue.trim(), searchResultList = [], isSearched
    if (!searchKeywords) {
      this.setData({
        search: false
      })
      return
    }
    apartment.list.forEach(manualItem => {
      manualItem.content.forEach((item, index) => {
        isSearched = false
        let result = {
          title: [{
            content: item.title,
            keywords: ''
          }],
          text: [{
            content: item.content,
            keywords: ''
          }],
          type: manualItem.type,
          introduction: manualItem.introduction,
          toView: 'id' + index
        }
        if (item.title.indexOf(searchKeywords) > -1) {
          result.title = []
          item.title.split(searchKeywords).forEach(str => {
            result.title.push({
              content: str,
              keywords: searchKeywords
            })
          })
          isSearched = true
        }
        if (item.text.indexOf(searchKeywords) > -1) {
          result.text = []
          item.text.split(searchKeywords).forEach(str => {
            result.text.push({
              content: str,
              keywords: searchKeywords
            })
          })
          isSearched = true
        }
        if (isSearched) {
          searchResultList.push(result)
        }
      })
    })
    this.setData({
      search: true,
      searchResultList: searchResultList
    })
  },

  onLoad: function () {
    this.setData({
      list: apartment.list
    })
  }
})


