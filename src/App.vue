<template>
  <div id="app">
		<keep-alive>
			<router-view/>
		</keep-alive>
		<tab-bar></tab-bar>
  </div>
</template>
<script>
	import TabBar from './components/TabBar.vue'
	export default {
		name:'App',
		components:{
			TabBar
		}
	}
</script>
<style>
	@import url("assets/css/base.css");
</style>
