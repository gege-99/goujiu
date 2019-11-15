<template>
	<div class="phonel">
		<div class="on_head">
			<img src="img/15.png" @click="handleBack()">
			<p class="tit">
				手机快捷登录
			</p>
			<router-link tag="a" :to="this.register">注册</router-link>
		</div>
		<div class="on_body">
			<div class="van_cell">
				<div class="on_phone">
					<img src="img/19.png">
					<input type="text" placeholder="请输入11位手机号">
				</div>
				<div class="field">
					<img src="img/20.png">
					<input type="text" placeholder="请输入短信验证码">
					<div class="yan">
						<span>获取验证码</span>
					</div>
				</div>
			</div>
			<button class="reg">
				验证登录
			</button>
		</div>
		<router-link tag="a" :to="this.load" class="onloader">账号登录</router-link>
	</div>
</template>

<script>
	export default {
		name:"Phoneload",
		data(){
			return{
				register:"/register",
				load:"/login"
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
html{
    font-size:26.67vw;
}
.phonel{
	width:100%;
	height:auto;
}
.phonel .on_head{
	height:0.46rem;
	width:100%;
	position:relative;
	line-height:0.46rem;
	text-align: center;
}
.phonel .on_head img{
	position:absolute;
	height:0.14rem;
	width:0.14rem;
	top:0.16rem;
	left:0.15rem;
}
.phonel .on_head .tit{
	height:0.46rem;
	line-height:0.46rem;
	width:2.25rem;
	margin:0 0.75rem;
	font-size:0.16rem;
}
.phonel .on_head a{
	position:absolute;
	padding:0 0.15rem;
	right:0.15rem;
	top:0;
	line-height:0.46rem;
	font-size:0.14rem;
	color:#999;
}
.phonel .on_body{
	height:1.49rem;
	width:100%;
	color:#666;
	font-size:0.14rem;
}
.phonel .on_body .van_cell{
	height:0.94rem;
	width:100%;
	border-top:1px solid #e5e5e5;
	border-bottom:1px solid #e5e5e5;
}
.phonel .on_body .van_cell .on_phone,.phonel .on_body .van_cell .field{
	height:0.44rem;
	width:94%;
	padding:0.1rem 0.15rem 0.1rem 0;
	margin-left:0.15rem;
	border-bottom:1px solid #e5e5e5;
	line-height:0.24rem;
	display: flex;
}
.phonel .on_body .van_cell .on_phone img,.phonel .on_body .van_cell .field img{
	height:0.20rem;
	width:0.16rem;
	float:left;
	margin-right:0.05rem;
	position: relative;
}
.phonel .on_body .van_cell .on_phone input,.phonel .on_body .van_cell .field input{
	height:0.24rem;
	width:3.24rem;
	border:none;
	outline: none;
	color:#333;
	line-height:0.24rem;
	font-size:0.14rem;
}
.phonel .on_body .van_cell .field{
	border:none;
}
.phonel .on_body .van_cell .field input{
	height:0.24rem;
	width:2.29rem;
}
.phonel .on_body .van_cell .field div{
	height:0.24rem;
	width:0.89rem;
	border-left: #d7d7d7 1px solid;
	padding-left:0.1rem;
	line-height:0.24rem;
}
.phonel .on_body .van_cell .field div span{
	display: inline-block;
	height:0.24rem;
	width:0.78rem;
	border:1px solid #fb223e;
	color:#f44;
	line-height:0.24rem;
	font-size:0.12rem;
	padding:0 0.08rem;
}

.phonel .on_body .reg{
	height:0.5rem;
	width:3.6rem;
	border:1px solid #e5e5e5;
	background:#e8e8e8;
	color:#999;
	font-size:0.16rem;
	text-align: center;
	line-height:0.48rem;
	margin:0.05rem 0.07rem;
	outline: none;
}

.phonel .onloader{
	float:right;
	color:#666;
	font-size:0.14rem;
	margin-right:0.05rem;
	padding-top:0.1rem;
}
.phoneget{
	background:#fb223e;
	color:#fff;
}

</style>
