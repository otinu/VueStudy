const app = Vue.createApp({
    data: () => ({ // ※1
        message: 'Hello Vue',
        emotion: '!!!!'
    })
})  // セミコロンは付けなくてもOK

app.mount('#app')

/*
※1. アロー関数は従来では「function() { 」と記述すべきところを省略可能にしている記述
*/