<template>
	<div id="tabbar">
		<tab-bar-item acolor="blue" path="/home"><img src="../assets/logo.png" alt="" slot="slot-img"><div slot="slot-text">首页</div></tab-bar-item>
		<tab-bar-item path="/cate"><img src="../assets/logo.png" alt="" slot="slot-img"> <div slot="slot-text">分类</div></tab-bar-item>
		<tab-bar-item path="/cart"><img src="../assets/logo.png" alt="" slot="slot-img"> <div slot="slot-text">购物车</div></tab-bar-item>
		<tab-bar-item path="/profile"><img src="../assets/logo.png" alt="" slot="slot-img"> <div slot="slot-text">我的</div></tab-bar-item>
	</div>
</template>

<script>
	
	import TabBarItem from './TabBarItem.vue'
	
	export default {
		name:'TabBar',
		components:{
			TabBarItem
		}
	}
</script>

<style>
	body{
		margin: 0;
		padding: 0;
	}
	#tabbar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		height: 49px;
		text-align: center;
		background-color: #f6f6f6;
	}
	#tabbar div{
		flex:1;
	}
</style>
