<template>
	<div class="register">
		<div class="on_head">
			<img src="img/15.png" @click="handleBack()">
			<p class="tit">
				注册
			</p>
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
				<div class="on_pwd">
					<img src="img/17.png">
					<input type="password" placeholder="密码">
				</div>
				<div class="on_pass">
					<img src="img/17.png">
					<input type="password" placeholder="确认密码">
				</div>
			</div>
			<p class="body_mid">
				<input type="checkbox">
				<label for="" class="cire"></label>
				<span>同意
					<a>《同意协意并注册》</a>
				</span>
			</p>
			<button class="reg">
				注册
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Register",
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
.register{
	width:100%;
	height:auto;
}
.register .on_head{
	height:0.46rem;
	width:100%;
	position:relative;
	line-height:0.46rem;
	text-align: center;
}
.register .on_head img{
	position:absolute;
	height:0.14rem;
	width:0.14rem;
	top:0.16rem;
	left:0.15rem;
}
.register .on_head .tit{
	height:0.46rem;
	line-height:0.46rem;
	width:2.25rem;
	margin:0 0.75rem;
	font-size:0.16rem;
}
.register .on_body{
	height:2.82rem;
	width:100%;
	color:#666;
	font-size:0.14rem;
}
.register .on_body .van_cell{
	height:1.82rem;
	width:100%;
	border-top:1px solid #e5e5e5;
	border-bottom:1px solid #e5e5e5;
}
.register .on_body .van_cell .on_phone,.register .on_body .van_cell .on_pwd,.register .on_body .van_cell .on_pass,.register .on_body .van_cell .field{
	height:0.44rem;
	width:94%;
	padding:0.1rem 0.15rem 0.1rem 0;
	margin-left:0.15rem;
	border-bottom:1px solid #e5e5e5;
	line-height:0.24rem;
	display: flex;
}
.register .on_body .van_cell .on_phone img,.register .on_body .van_cell .on_pwd img,.register .on_body .van_cell .on_pass img,.register .on_body .van_cell .field img{
	height:0.20rem;
	width:0.16rem;
	float:left;
	margin-right:0.05rem;
	position: relative;
}
.register .on_body .van_cell .on_phone input,.register .on_body .van_cell .on_pwd input,.register .on_body .van_cell .on_pass input,.register .on_body .van_cell .field input{
	height:0.24rem;
	width:3.24rem;
	border:none;
	outline: none;
	color:#333;
	line-height:0.24rem;
	font-size:0.14rem;
}
.register .on_body .van_cell .field input{
	height:0.24rem;
	width:2.29rem;
}
.register .on_body .van_cell .field div{
	height:0.24rem;
	width:0.89rem;
	border-left: #d7d7d7 1px solid;
	padding-left:0.1rem;
	line-height:0.24rem;
}
.register .on_body .van_cell .field div span{
	display: inline-block;
	height:0.24rem;
	width:0.78rem;
	border:1px solid #fb223e;
	color:#f44;
	line-height:0.24rem;
	font-size:0.12rem;
	padding:0 0.08rem;
}
.register .on_body .van_cell .on_pass{
	border:none;
}
.register .on_body .van_cell .on_pwd img,.register .on_body .van_cell .on_pass img{
	height:0.22rem;
	width:0.22rem;
}
.register .on_body .body_mid{
	height:0.22rem;
	width:100%;
	padding:0 0.05rem;
	margin:0.14rem 0;
	font-size:0.14rem;
	color:#666;
	line-height:0.2rem;
	display: flex;
	position: relative;
}
input[type="checkbox"] {
    height:0.2rem;
    width:0.2rem;
    border-radius: 0.1rem;
    position:absolute;
    z-index:2;
    top:0;
    left:0.1rem;
    border:1px solid #aaa;
    outline: none;
    background:#fff;
    opacity: 0;
}

.cire {
    height:0.2rem;
    width:0.2rem;
    border-radius: 0.1rem;
    position:absolute;
    z-index:1;
    top:0;
    left:0.1rem;
    border:1px solid #ccc;
    outline: none;
    background:#fff;
}
input:checked+label {
    background-color: #f44;
    border: 1px solid #f44;
    }
    
input:checked+label::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 10px;
    top: 3px;
    left: 6px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg)
}
.register .on_body .body_mid span{
	padding-left:0.05rem;
	margin-left:0.25rem;
}
.register .on_body .body_mid a{
	color:#fb223e;
}
.register .on_body .reg{
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
.regget{
	background:#fb223e;
	color:#fff;
}

</style>
