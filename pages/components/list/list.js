const formatSearchResult = require('../../../utils/formatSearchResult')

Component({
  properties: {
    // 这里定义了属性，属性值可以在组件使用时指定
    name: String,
    data: Object
  },
  data: {
    // 这里是一些组件内部数据
    inputValue: '',
    isSearch: false,
    searchResultList: []
  },
  methods: {
    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value,
      })
    },

    search: function () {
      let searchKeywords = this.data.inputValue.trim(), searchResultList
      if (!searchKeywords) {
        this.setData({
          isSearch: false
        })
        return
      }
      searchResultList = formatSearchResult(this.properties.data, searchKeywords)
      this.setData({
        isSearch: true,
        searchResultList: searchResultList
      })
    }
  }
})
