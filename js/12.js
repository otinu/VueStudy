const app = Vue.createApp({
    data: () => ({
      message: 'Hello Vue.js',
      textarea_message: "", // テキストエリア
      checked: false, // チェックボックス(単体)
      colors: [],  // チェックボックス(複数)
      color: '', // ラジオボタン
      selected_one: '', // セレクトボックス(1つだけ選択)
      selected_any: [], // セレクトボックス(複数選択)
      lazy_message: '', // 修飾子 .lazy
      trim_message: '', // 修飾子 .trim
      age: 0 // 修飾子 .number
    }),
  })
  app.mount('#app')