import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('../views/Home.vue')
const Cate=()=>import('../views/Cate.vue')
const Cart=()=>import('../views/Cart.vue')
const Profile=()=>import('../views/Profile.vue')
Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/cate',
		component:Cate
	},
	{
		path:'/cart',
		component:Cart
	},		
	{
		path:'/profile',
		component:Profile
	}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
