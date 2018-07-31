<template>
  <div id="app">
	  <MHeader></MHeader>
	  <Tab></Tab>
	  <router-view>
		 
	  </router-view>
  </div>
</template>

<script type="text/ecmascript-6">
	import MHeader from './components/m-header/m-header'
	import Tab from './components/tab/tab'
	
	export default {
		components: {
			MHeader,
			Tab
		}
	}
</script>

<style lang="stylus">
	@import "common/stylus/variable.styl"
	
	#app
		color:$color-theme
</style>
