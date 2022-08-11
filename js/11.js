
const app = Vue.createApp({
    data: () => ({
      counter: 0,
      clickMessage: "",
      onceMessage: ""
    }),
    methods: {
      clickHandler: function(event, clickMessage) { // 引数にイベントオブジェクト という独自のオブジェクトを指定(命名はeやeventが多い)
        this.counter++
        // console.log(event)
        console.log(event.target)
        console.log(event.target.tagName)
        console.log(event.target.innerHTML)
        console.log(event.target.type)
        console.log(event.target.id)

        this.clickMessage = clickMessage
      },
      onceClickHandler: function() {
        this.onceMessage = "1回だけ表示されます！ 更新はされません \n" + new Date().toLocaleTimeString()
      }
    }
  })
  app.mount('#app')