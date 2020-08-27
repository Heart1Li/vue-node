import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Massage from '../views/Massage'
import Category from '../views/Category'
import Comment from '../views/Comment'
import Profile from '../views/Profile'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/massage',
    component: Massage
  },
  {
    path:'/Category',
    component: Category
  },
  {
    path:'/Comment',
    component: Comment
  },
  {
    path:'/Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
