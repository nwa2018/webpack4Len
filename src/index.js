import { join } from 'lodash-es'
import 'jquery'
import { printMe } from './print.js';
import '~@/style.css';
import util from '~@/util'
import App from './app.vue'
import Vue from 'vue'

const div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

new Vue({
  el: '#app',
  render: h => h(App)
})

module.hot && module.hot.accept()
