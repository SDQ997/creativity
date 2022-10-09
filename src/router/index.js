import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/loading"
  },
  {
    path: '/loading',
    name: 'loading',
    component: function () {
      return import('../views/loading/index.vue')
    }
  },
  {
    path: '/home',
    name: 'home',
    component: function () {
      return import('../views/home/index.vue')
    }
  },
  {
    path: '/string',
    name: 'string',
    component: function () {
      return import('../views/demo/string/index.vue')
    }
  },
  {
    path: '/follow',
    name: 'follow',
    component: function () {
      return import('../views/demo/follow/index.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
