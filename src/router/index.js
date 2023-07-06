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
  {
    path: '/switch',
    name: 'switch',
    component: function () {
      return import('../views/demo/switch/index.vue')
    }
  },
  {
    path: '/apps',
    name: 'apps',
    component: function () {
      return import('../views/demo/apps/index.vue')
    }
  },
  {
    path: '/keyBoard',
    name: 'keyBoard',
    component: function () {
      return import('../views/demo/keyBoard/index.vue')
    }
  },
  {
    path: '/heart',
    name: 'heart',
    component: function () {
      return import('../views/demo/heart/index.vue')
    }
  },
  {
    path: '/mirror',
    name: 'mirror',
    component: function () {
      return import('../views/demo/mirror/index.vue')
    }
  },
  {
    path: '/map',
    name: 'map',
    component: function () {
      return import('../views/demo/map/index.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
