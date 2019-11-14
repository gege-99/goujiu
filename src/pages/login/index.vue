<template>
	<div>
		<div class="onload">
		<div class="on_head">
			<img src="img/15.png" @click="handleBack()">
			<p class="tit">
				帐号登录
			</p>
		</div>
		<div class="on_body">
			<div class="van_cell">
				<div class="on_name">
					<img src="img/16.png">
					<input type="text" placeholder="用户名/邮箱/手机">
				</div>
				<div class="on_pwd">
					<img src="img/17.png">
					<input type="password" placeholder="密码">
				</div>
			</div>
			<p class="body_mid">
				<a href="forgrt.html">忘记密码</a>
				<router-link tag="a" :to="this.register">注册</router-link>
			</p>
			<button class="load">
				登陆
			</button>
			<button class="mess_load">
				<router-link tag="a" :to="this.phone">短信验证码登陆</router-link>
			</button>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		name:"Login",
		data(){
			return{
				phone:"/phoneload",
				register:"/register"
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
.onload{
	width:100%;
	height:auto;
}
.onload .on_head{
	height:0.46rem;
	width:100%;
	position:relative;
	line-height:0.46rem;
	text-align: center;
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
.onload .on_body{
	height:2.35rem;
	width:100%;
	color:#666;
	font-size:0.14rem;
}
.onload .on_body .van_cell{
	height:0.88rem;
	width:100%;
	border-top:1px solid #e5e5e5;
	border-bottom:1px solid #e5e5e5;
}
.onload .on_body .van_cell .on_name,.onload .on_body .van_cell .on_pwd{
	height:0.44rem;
	width:94%;
	padding:0.1rem 0 0.1rem;
	margin-left:0.15rem;
	border-bottom:1px solid #e5e5e5;
	line-height:0.24rem;
}
.onload .on_body .van_cell .on_name img,.onload .on_body .van_cell .on_pwd img{
	height:0.20rem;
	width:0.16rem;
	float:left;
	margin-right:0.05rem;
	position: relative;
}
.onload .on_body .van_cell .on_name input,.onload .on_body .van_cell .on_pwd input{
	height:0.24rem;
	width:3.24rem;
	border:none;
	outline: none;
	color:#333;
	line-height:0.24rem;
	font-size:0.14rem;
	margin:0;
}
.onload .on_body .van_cell .on_pwd{
	border:none;
}
.onload .on_body .van_cell .on_pwd img{
	height:0.22rem;
	width:0.22rem;
}
.onload .on_body .body_mid{
	height:0.14rem;
	width:100%;
	padding:0 0.05rem;
	margin:0.14rem 0;
	font-size:0.16rem;
	color:#666;
	line-height:0.14rem;
	display: flex;
	justify-content:space-between;
}
.onload .on_body .body_mid a{
	color:#666;
}
.onload .on_body .load{
	height:0.5rem;
	width:3.6rem;
	border:1px solid #e5e5e5;
	border-radius: 0.25rem;
	background:#e8e8e8;
	color:#999;
	font-size:0.16rem;
	text-align: center;
	line-height:0.48rem;
	margin:0.05rem 0 0.05rem 0.1rem;
	outline: none;
}
.onload .on_body .mess_load{
	height:0.5rem;
	width:3.6rem;
	border:1px solid #fb223e;
	border-radius: 0.25rem;
	background:#fff;
	color:#f44;
	font-size:0.16rem;
	text-align: center;
	line-height:0.48rem;
	margin:0.05rem 0 0.05rem 0.1rem;
	outline: none;
}
.onload .on_body .mess_load a{
	display: inline-block;
	height:100%;
	width:100%;
}

.loadget{
	background:#fb223e;
	color:#fff;
}


</style>
