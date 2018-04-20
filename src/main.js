import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store'

/* stylus */
import './stylus/main.styl'
/* less */
import './less/main.less'
/* sass */
import './sass/main.scss'

const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode

// Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})