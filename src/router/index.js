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
        ShowFooterGuide: true
      }
    },
    {
      path: '/mSite',
      component: MSite,
      meta: {
        ShowFooterGuide: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        ShowFooterGuide: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        ShowFooterGuide: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        ShowFooterGuide: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
