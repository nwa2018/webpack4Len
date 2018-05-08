import { join } from 'lodash-es'
import { printMe } from './print.js'
// import '~@/style.css';
import util from '~@/util'
import App from './app.vue'
import Vue from 'vue'

new Vue({  // eslint-disable-line
  el: '#app',
  render: h => h(App)
})

console.log(join(['1', '2'], ' '))
printMe()
// module.hot && module.hot.accept()
