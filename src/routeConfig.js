
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import Article from './components/Article.vue'


export default [{
	path:'/home',
	component:Home
},{
	path:'/follow',
	component:Follow
},{
	path:'/column',
	component:Column
},{
	path:'/article/:id',
	component:Article
}]