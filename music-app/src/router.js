import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Recommend from './components/recommend/recommend'
import Search from './components/search/search'
import Singer from './components/singer/singer'
import Rank from './components/rank/rank'

export default new Router({
	routes: [
		{
			path: '/recommend',
			name: 'recommend',
			component: Recommend
		},
		{
			path: '/search',
			name: 'search',
			component: Search
		},
		{
			path: '/singer',
			name: 'singer',
			component: Singer
		},
		{
			path: '/rank',
			name: 'rank',
			component: Rank
		},
	]
})
