import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router
