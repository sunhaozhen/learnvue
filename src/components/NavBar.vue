<template>
	<div id="navbar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center">{{title}}</slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'NavBar',
		props:{
			title:{
				type:String,
				default:'默认'
			}
		}
	}
</script>

<style>
	#navbar{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		display: flex;
		box-shadow: 0 0 2px 2px #C0C0C0;
		height: 44px;
		line-height: 44px;
		background-color: white;
		text-align: center;
	}
	.left ,.right{
		width: 60px;
	
	}
	.center{
		flex: 1;
	}
</style>
