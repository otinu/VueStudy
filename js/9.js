const app = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: true,
    largeClass: 'large',
    dangerClass: 'text-danger',
    classObject: {
      large: true,
      'text-danger': true
    },
    inlineColor: "blue",
    inlineFonsSize: 36,
    inlineStyleObject: {
      color: "green",
      fontSize: "45px"
    }
  })
})

app.mount('#app')