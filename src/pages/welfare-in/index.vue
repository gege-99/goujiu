<template>
	
		<div class="onload">
		<div class="on_head">
			<img src="img/15.png" @click="handleBack()">
			<p class="tit">
				【购酒网】购酒福利页面
			</p>
		</div>
		<div class="body">
			<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_01.jpg" class="img1">
			<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_02.jpg" class="img2">
			<img src="http://img0.gjw.com/Minisite/2019/xy/1102/03.jpg" class="img3">
			<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_04.jpg" class="img4">
			<div class="wrap">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_05.jpg" class="img5">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_06.jpg">
			</div>
			<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_07.jpg" class="img6">
			<div class="big_box">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_08.jpg">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_09.jpg">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_10.jpg">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_11.jpg">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_08.jpg">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_09.jpg">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_10.jpg">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_11.jpg">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_10.jpg">
				<img src="http://img0.gjw.com/Minisite/2019/xy/1102/lp_11.jpg">
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name:"Welfare-in",
		methods:{
			handleBack(){
				this.$router.back();
			}
		}
	}
</script>
<style>
html{
    font-size:26.67vw;
}

.onload{
	width:100%;
	height:100%;
	position:relative;
	overflow:scroll
}
.onload .on_head{
	height:0.46rem;
	width:100%;
	position:fixed;
	line-height:0.46rem;
	text-align: center;
	top:0;
	left:0;
	background:#fff;
	z-index:999;
}
.onload .on_head img{
	position:absolute;
	height:0.14rem;
	width:0.14rem;
	top:0.16rem;
	left:0.15rem;
}
.onload .on_head .tit{
	height:0.46rem;
	line-height:0.46rem;
	width:2.25rem;
	margin:0 0.75rem;
	font-size:0.16rem;
}
.body{
	height:auto;
	width:100%;
	padding-top:0.5rem;
	position:absolute;

}
.body .img1{
	height:3.68rem;
	width:100%;
	margin:0;
}
.body .img2{
	height:0.4614rem;
	width:100%;
}
.body .img3{
	height:1.9217rem;
	width:100%;
}
.body .img4{
	height:1.9859rem;
	width:100%;
}
.body .wrap{
	height:0.9695rem;
	width:100%;
	display: flex;
}
.body .wrap img{
	height:0.9695rem;
	width:50%;
}
.body .img6{
	height:0.8878rem;
	width:100%;
}
.body .big_box{
	height:auto;
	width:100%;
	display: flex;
	flex-wrap: wrap;
}
.body .big_box img{
	width:50%;
}
</style>