import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import vueXlsxTable from 'vue-xlsx-table'
import axios from 'axios'
Vue.use(ElementUI)
Vue.use(vueXlsxTable, {rABS: false})

Vue.config.productionTip = false
Vue.mixin({
  created(){
    this.lang = window.localStorage.getItem('lang')
    this.langClass = []
    this.langClass.push(this.lang)
  },
  data(){
    return {
      lang: 'zh',
      langClass: [],
      axios: axios
    }
  },
  // methods: {
  //   getLess: function(compon){

  //   }
  // }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
