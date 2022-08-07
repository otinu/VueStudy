const app = Vue.createApp({
    data: () => ({
        message: 'Hello World',
        km: 0,
        m: 0
    }),
    watch: {
        message: function(newValue, oldValue) {
            console.log('new: %s, old; %s', newValue, oldValue)
        },
        km: function(value) {
            this.km = value
            this.m = value * 1000
        },
        m: function(value) {
            this.km = value / 1000
            this.m = value
        }
    }
})
app.mount('#app')