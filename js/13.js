const helloComponent = {
    template: '<p>Hello!</p>'
}

const buttonCounter = {

    // テンプレート内でJSコードを記述
    template: '<div><span>count: </span><button v-on:click="countUp">{{ count }}</button></div>',
    data: () => ({
      count: 0
    }),
    methods: {
      countUp: function() {
        this.count++
      }
    }
  }

const app = Vue.createApp({
    data: () => ({
    }),
    components: {
        // ファイル内限定のメソッド呼び出しのようにすることで、保守性や再利用性が向上する
        'hello-component': helloComponent,
        'button-counter': buttonCounter
    }
})

app.mount('#app')