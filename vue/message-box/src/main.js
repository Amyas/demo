import Vue from 'vue'
import App from './App.vue'
import messageBox from './components/messageBox'

Vue.use(messageBox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
