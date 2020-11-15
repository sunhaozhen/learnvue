<template>
	<div>
		<nav-bar title="购物车">
		</nav-bar>
		
		<h2>购物车</h2>
		<p>{{$store.state.message}}</p>
		<div class="line">
			<div class="line-item" v-for="item in list"><slot></slot>
			<a :href="item.link">
			<img :src="item.url" alt="">
			<div>{{item.name}}</div>
			</a>
			</div>
		</div>
		
	</div>

</template>

<script>
	import NavBar from '../components/NavBar.vue'
	import {request} from '../network/request.js'
	export default{
		name:'Cart',
		props:{
			title:{
				type:String,
				default:'你好'
			}
		},
		data(){
			return {
				list:null
			}
		},
		created(){
			request({
				url:'/api/tp5/public/index.php/index/vue/index'
			}).then(res=>{this.list=res.data})
		},
		components:{
			NavBar
		}
	}
</script>

<style>
	.line{
		display: flex;
		text-align: center;
	}
	.line-item{
		flex:1
	}
	.line-item img{
		height: 50px;
		width: 50px;
	}
</style>
