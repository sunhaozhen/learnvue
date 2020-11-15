<template>
	<div>
		<h2>个人</h2>
		<h2>{{message}}</h2>
		<button @click="btnClick">请求</button>
	</div>
	
</template>

<script>
	import {request} from '../network/request.js'
	import axios from 'axios'
	export default{
		name:'Profile',
		data(){
			return {
				message:'早'
			}
		},
		methods:{
			btnClick(){
				// axios({
				// 	url:'http://192.168.0.229/help/'
				// }).then(res=>{
				// 	this.message=res
				// })
				request({
					url:'/api/tp5/public/index.php/index/amazonrecord/query',
					}
				).then(res=>{this.message=res.data}).catch(err=>{this.message=err.data})
				// axios.get("/tp5/public/index.php/index/amazonrecord/query")
				// .then(res=>{
				// 	console.log(res)
				// 	this.message=res.data
				// })
				// .catch(err=>{
				// 	console.log(err)
				// })
		}
		
	}}
</script>

<style>
</style>
