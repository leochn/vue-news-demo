<template>
	<div class = 'content'>
		<Slider></Slider>
		<div class='newsList'>
			<ul>
				<li v-for='(item,index) in arrList'>
					<router-link :to="'/article/' + item.id">
						<h2>{{index+1}}.{{item.title}}</h2>
						<p>{{item.detail}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Slider from './Slider.vue'

	export default{
		components:{
			Slider
		},
		data(){
			return{
				arrList:[]
			}
		},
		mounted(){
			//获取数据
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this = this;
				//console.log(this);
				this.$http.get('src/data/index.data').then(function(res){
					//alert('1212');
					//console.log(res.data);
					_this.arrList = res.data; 
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>
<style scoped>
	@import '../assets/css/index.css'
</style>