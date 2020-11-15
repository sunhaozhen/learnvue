<template>
	<div>
		<h2>共 {{chou}}  抽</h2>
		<div>玉玉:<input type="number" v-model="yu"></div>
		<div>原石:<input type="number" v-model="yuanshi"></div>
		<div>单抽:<input type="number" v-model="danchou"></div>
		<div>十抽:<input type="number" v-model="shichou"></div>
		<div>黄券:<input type="number" v-model="huangquan"></div>
		<h2>缺 {{need}} 抽</h2>
		<h3>缺 {{needyu}} 玉</h3>
	</div>
	
</template>

<script>
	export default{
		name:'Cate',
		data(){
			return {
				yu:'',
				yuanshi:'',
				danchou:'',
				shichou:'',
				huangquan:''
			}
		},
		computed:{
			chou(){
				return Math.floor(this.yu/600)+Math.floor(this.yuanshi*180/600)+this.danchou*1+this.shichou*10+Math.floor(this.huangquan/280)*38
			},
			need(){
				return (300-this.chou)
			},
			needyu(){
				return this.need*600
			}
			
		}
	}
</script>

<style>
</style>
