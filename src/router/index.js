import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const Main = () => import('../view/Main')
const User = () => import('../view/user')
const Home = () => import('../view/home')
const Mall = () => import('../view/mall')
const pageOne = () => import('../view/other/pageOne')
const pageTwo = () => import('../view/other/pageTwo')
const Login = () => import('../view/login/login.vue')

const routes = [
  {
    path: '/',
    // name: "Main",
    component: Main,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'user',
        name: 'user',
        component: User
      },
      {
        path: 'mall',
        name: 'mall',
        component: Mall
      },
      {
        path: 'page1',
        name: 'page1',
        component: pageOne
      },
      {
        path: 'page2',
        name: 'page2',
        component: pageTwo
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router