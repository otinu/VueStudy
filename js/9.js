const app = Vue.createApp({
    data: () => ({
      items: null,
      keyword: '',
      message: ''
    }),
    watch: {
      keyword: function(newKeyword) {
        console.log(newKeyword)
        this.message = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      }
    },
    mounted: function() {
      // this.keyword = 'JavaScript'
      // this.getAnswer()

      // https://lodash.com/docs#debounce
      // 「_.debounce()」という形式で呼び出す
      // 第二引数で指定する時間分、処理を遅らせてから第一引数を実行する(1文字打つ毎にAPIへリクエストを送る事態を防ぐ)
      // 第二引数では、ミリ秒単位で指定
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
      getAnswer: function() {
        if(this.keyword === '') {
          console.log('karamoji')
          this.items = null
          return
        }
  
        this.message = 'Lading...'
        const vm = this
        const params = { page: 1, per_page: 20, query: this.keyword }
        axios.get('https://qiita.com/api/v2/items', { params })
             .then(function(response){
               // console.log(response)
               vm.items = response.data
             })
             // 例外処理のような記述になっている
             .catch(function(error){
               vm.message = 'Error!' + error
             })
             .finally(function() {
               vm.message = ''
             })
      }
    }
  })
  app.mount('#app')