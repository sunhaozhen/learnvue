<template>
	<div id="home">
		<nav-bar title="首页">
			<div slot="left">左</div>
			<div slot="right"><img style="width: 100%;" src="../assets/logo.png" alt=""></div>
		</nav-bar>
		<h2>首页</h2>
		<p>{{$store.state.message}}</p>
		<p>{{$store.getters.mm}}</p>
		<button @click="change">改变</button>
	</div>
</template>

<script>
	import NavBar from '../components/NavBar.vue'
	export default{
		name:'Home',
		methods:{
			change(){
				this.$store.commit('change')
			}
		},
		components:{
			NavBar
		}
	}
</script>

<style>
</style>
