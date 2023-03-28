import {createApp} from 'vue'
import {createI18n} from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            message: 'singular | plural'
        }
    }
})

createApp(App)
    .use(i18n)
    .mount('#app')
