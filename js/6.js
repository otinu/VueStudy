
const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue!',
        basePrice: 100
    }),
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        taxIncludedPrice: {
            get: function() {
                return this.basePrice * 1.1
            },
            // セッターはここでは使われていない
            set: function(value) {
                this.basePrice = value / 1.1
            }
        },
        computedNumber: function() {
            return Math.random()
        }
    },
    methods: {
        methodsNumber: function() {
            return Math.random()
        }
    }
})

app.mount('#app')