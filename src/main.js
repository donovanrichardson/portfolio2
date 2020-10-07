import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faNewspaper, faThumbsUp, faBriefcase, faMapMarkerAlt, faGlobeAmericas, faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faFileAlt} from '@fortawesome/free-regular-svg-icons'
import {faDev,faGithubSquare, faLinkedin, faJs, faJava, faNodeJs, faPython, faVuejs} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

//home icons
library.add(faDev, faGithubSquare, faLinkedin, faNewspaper, faJs, faJava, faNodeJs, faThumbsUp, faPython, faVuejs, faBriefcase, faEnvelope, faFileAlt)

//resume icons
library.add(faMapMarkerAlt, faGlobeAmericas, faMobileAlt) //envelope already imported in home

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
