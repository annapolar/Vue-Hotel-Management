import Vue from 'vue'
import App from './App.vue'
import roomList from './components/roomList.vue'

Vue.config.productionTip = false
Vue.component('roomList',roomList)

new Vue({
  render: h => h(App),
}).$mount('#app')
