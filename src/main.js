import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core'
// import {faStar as fasStar} from '@fortawesome/free-solid-svg-icons'
import {faDev,faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faDev, faGithubSquare, faLinkedin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
