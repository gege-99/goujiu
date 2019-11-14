<template>
	<div>
		<div class="head">
		<img src="img/15.png" @click="handleBack()">
		<div class="title">【购酒网】特卖会</div>
	</div>
	<div class="body">
		<img src="http://img0.gjw.com/Minisite/2019/LY/6/29/APP/app_01.jpg">
		<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_02.jpg">
		<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_03.jpg">
		<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_04.jpg">
		<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_05.jpg">
		<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_06.jpg">
		<div class="this">
			<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_07.jpg">
			<img src="http://img0.gjw.com//Minisite/2019/gl/11/02/tmh_08.jpg">
			<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_09.jpg">
		</div>
		<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_10.jpg">
		<div class="two">
			<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_11.jpg">
			<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_12.jpg">
		</div>
		<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_13.jpg">
		<div class="this">
			<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_14.jpg">
			<img src="http://img0.gjw.com//Minisite/2019/gl/11/02/tmh_15.jpg">
			<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_16.jpg">
		</div>
		<div class="frou">
			<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_17.jpg">
			<img src="http://img0.gjw.com/Minisite/2019/gl/11/02/tmh_18.jpg">
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		name:"Set",
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
	height:100%;
	overflow:scroll;
	position:absolute;
	top:0;
	left:0;
	bottom:0;
	right:0;
}
.body img{
	width:100%;
}
.body .this{
	height:1.6063rem;
	width:100%;
	display:flex;
}
.body .this img{
	width:1.25rem;
	height:100%;
}
.body .two{
	height:1.355rem;
	width:100%;
	display: flex;
}
.body .two img,.body .frou img{
	height:100%;
	width:50%;
}
.body .frou{
	height:2.2488rem;
	width:100%;
	display: flex;
}

</style>
