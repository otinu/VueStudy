const app = Vue.createApp({
    data: () => ({ // ※1
        message: 'Hello Vue',
        emotion: '!!!!',
        count: 0,
        user: {
            lastName: 'o',
            firstName: 'tinu',
            age: 3
        },
        colors: ['Red', 'Green', 'Blue'],
        inputMessage: 'Hello v-bind',
        now: '-',
        VModelMessage: 'It\'s v-model'
    }),
    methods: {
        onClick: function() {
            this.now = new Date().toLocaleDateString()
        }
    }
})  // セミコロンは付けなくてもOK

// 「self-component」を「selfComponent」とキャメルケースで記述するのはNG
app.component('self-component', {
    template: '<p>自作コンポーネントです</p>'
})

app.mount('#app')

/*
※1. アロー関数は従来では「function() { 」と記述すべきところを省略可能にしている記述
*/