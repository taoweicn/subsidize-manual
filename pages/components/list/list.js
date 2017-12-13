Component({
  properties: {
    // 这里定义了属性，属性值可以在组件使用时指定
  },
  data: {
    // 这里是一些组件内部数据
    inputValue: ''
  },
  methods: {
    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    search: function () {
      this.triggerEvent('searchEvent', { inputValue: this.data.inputValue})
    }
  }
})
