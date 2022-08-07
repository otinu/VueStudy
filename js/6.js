
const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue!'
    }),
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})

app.mount('#app')