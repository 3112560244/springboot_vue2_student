import Vue from 'vue'
import VueRouter from 'vue-router'
import Manage from '../views/Manage.vue'
import User from "@/views/User";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manage',
    component: Manage,
    children:[
      {
        path: 'user',
        name: 'User',
        component:User
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
