import Vue from 'vue'
import VueRouter from 'vue-router'

// import MassageBoard from '../views/MassageBoard'
// import Category from '../views/Category'
// import Comment from '../views/Comment'
// import Profile from '../views/Profile'

const Home = () => import('../views/Home')
const Archive = () => import('../views/Archive')
const Board = () => import('../views/Board')
const Category =( ) => import('../views/Category')
const Profile = () => import('../views/Profile')
Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/archive',
    component: Archive
  },
  {
    path:'/Category',
    component: Category
  },
  {
    path:'/board',
    component: Board,
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
