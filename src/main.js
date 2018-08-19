import Vue from 'vue'
import App from './App.vue'

// Require the main Sass manifest file
require('./assets/sass/main.scss');

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
