<template :path="path" :acolor="acolor">
	<div class="tabbar-item" @click="itemClick">
		<slot name="slot-img"><img src="../assets/logo.png" alt=""></slot>
		<div :style="{color:actcolor}"><slot name="slot-text"><div>首页</div></slot></div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		props:['path','acolor'],
		methods:{
			itemClick(){
				// console.log('aaa')
				this.$router.push(this.path)
			}
		},
		computed:{
			actcolor(){
				return this.$route.path==this.path?this.acolor?this.acolor:'red':''
			}
		}
	}
</script>

<style>
	.tabbar-item img{
		height: 15px;
		width: 15;
	}
	.tabbar-item{
		font-size: 15px;
	}
</style>
