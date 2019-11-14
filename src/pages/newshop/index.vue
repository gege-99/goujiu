<template>
	<div>
		<div class="head">
		<img src="img/15.png" @click="handleBack()"/>
		<div class="title">【购酒网】新品发布</div>
	</div>
	<div class="body">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_02.jpg">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_03.jpg">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_04.jpg">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_05.jpg">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_06.jpg">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_07.jpg">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_08.jpg">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_09.jpg">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_10.jpg">
		<img src="http://img0.gjw.com/Minisite/2018/ly/0731x/lp_11.jpg">
	</div>
	</div>
</template>

<script>
	export default {
		name:"New",
		data(){
		return{
			path:"/shouye"
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
	position:fixed;
	top:0;
	left:0;
	border-bottom:1px solid #ccc;
	z-index:999;
	background:#fff;
}
.head img{
	position: absolute;
	height:0.16rem;
	width:0.1rem;
	top:0.15rem;
	left:0.15rem;
}
.head .title{
	height:0.46rem;
	line-height:0.46rem;
	width:60%;
	margin:0 auto;
	font-size:0.16rem;
	color:#333;
	text-align: center;
}
.body{
	padding-top:0.5rem;
	width:100%;
	position:absolute;
	top:0;
	lefT:0;
	bottom:0;
	right:0;
	overflow:scroll;
	height:100%;
}
.body img{
	width:100%;
}
</style>
