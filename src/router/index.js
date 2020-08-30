import Vue from 'vue'
import VueRouter from 'vue-router'


// import MassageBoard from '../views/MassageBoard'
// import Category from '../views/Category'
// import Comment from '../views/Comment'
// import Profile from '../views/Profile'

const Home = () => import('../views/Home')
const ArticleView = () => import('../views/ArticleView')
const Archive = () => import('../views/Archive')
const Board = () => import('../views/Board')
const Category =( ) => import('../views/Category')
const Profile = () => import('../views/Profile')
const CategoryView =() => import('../views/CategoryView')

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
    path:'/article/:id',
    component:ArticleView,
  },
  {
    path:'/archive',
    component: Archive
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/category/:path',
    component:CategoryView
  },
  {
    path:'/board',
    component: Board,
  },
  {
    path:'/profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
