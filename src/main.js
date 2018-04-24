import Vue from 'vue'
import App from './App.vue'
import v3UI from './lib/index.js'
Vue.use (v3UI);


new Vue({
  el: '#app',
  render: h => h(App)
})
