import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/Msite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/mSite',
      meta: {
        showFoot: true
      }
    },
    {
      path: '/mSite',
      component: MSite,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
