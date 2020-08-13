import Vue from 'vue'
import App from './App.vue'
import './filters/toCurrency.js'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
