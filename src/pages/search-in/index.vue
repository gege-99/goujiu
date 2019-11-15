<template>
	<div class="page">
		<div class="head">
		<a class="back" @click="handleBack()">
			<img src="img/15.png">
		</a>
		<div class="search">
			<i class="iconfont iconmagnifier"></i>
			<div>
				<input type="text" name="" placeholder="请输入商品名称" v-model="value">
			</div>

		</div>
		<div class="sou">搜索</div>
	</div>
	<div class="hot">
		<div class="hot_a">
			<i class="iconfont iconbiao"></i>
			热门搜索
		</div>
		<span>白酒</span>
		<span>红酒</span>

		<span>洋酒</span>
		<span>百威</span>
		<span>燕京</span>
		<span>雪花</span>

	</div>
	<div class="his">
		<i class="iconfont iconbiao"></i>
		搜索历史
	</div>
	</div>
</template>

<script>
	export default {
		name:"searchin",
		data(){
			return{
				value:"",
				list:[]
			}
		},
		
		methods:{
			handleBack(){
				this.$router.back();
			}
		}
	}
</script>
<style>
	html {
    font-size: 26.67vw;
}
.head{
	height:0.46rem;
	width:100%;
	display: flex;
}
.head .back{
	height:0.46rem;
	width:0.45rem;
	float:left;
	line-height:0.46rem;
	text-align: center;
	padding:0.16rem;
}
.head .back img{
	height:0.14rem;
	width:0.14rem;
}
.head .search{
	height:0.46rem;
	width:3rem;
	padding:0.06rem 0 0.06rem 0.15rem;
	display: flex;
	position:relative;
}
.head .search i{
	height:0.16rem;
	width:0.16rem;
	position: absolute;
	top:0.15rem;
	left:0.25rem;
	color:#999;
	font-size:0.16rem;
	z-index:999;
}
.head .search div{
	height:0.3rem;
	width:2.65rem;
	padding:0.03rem 0.1rem 0.03rem 0.35rem;
	background:#ececec;
	border-radius: 0.04rem;
	position:relative;
}
.head .search div input{
	position:absolute;
	left:0.35rem;
	top:0.03rem;
	background:#ececec;
	line-height:0.24rem;
	border:none;
	outline:none
}
.head .sou{
	height:0.34rem;
	width:0.3rem;
	text-align: center;
	line-height:0.34rem;
	color:#949494;
	margin:0.05rem 0.1rem;
	font-size:0.14rem;
}
.hot{
	height:0.8pxrem;
	width:100%;
	padding:0 0.15rem;
	display: flex;
	flex-wrap: wrap;	
}
.hot .hot_a{
	height:0.18rem;
	width:100%;
	font-size:0.18rem;
	line-height:0.18rem;
	margin:0.1638rem 0;

}
.hot span{
	padding: 0.05rem 0.1rem;
	margin:0.05rem;
	border-radius: 0.15rem;
	background:#c9c9c9;
	font-size:0.1rem;
	color:#333;
}
.his{
	padding:0 0.15rem;
	height:0.18rem;
	width:100%;
	font-size:0.18rem;
	line-height:0.18rem;
	margin:0.1638rem 0;
}
</style>