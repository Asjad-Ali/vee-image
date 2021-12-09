import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import landingpage from '../components/landingpage.vue'
import signup from '../components/signup.vue'
import login from '../components/login.vue'
import forget from '../components/forgot.vue'
import about from '../views/About.vue'
import gallery from '../views/gallery.vue'
import profile from '../components/profile.vue'
import resetpassword from '../components/resetpassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: resetpassword
  },

  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: gallery
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/forget',
    name: 'forget',
    component: forget
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'landingpage',
    component: landingpage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
