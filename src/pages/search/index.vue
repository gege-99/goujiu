<template>
	
	<div class="page">
		<div class="ser_head">
			<router-link tag="a" class="head_s" :to="this.path">
				<i class="iconfont iconmagnifier"></i>
				<span>请输入商品名称</span>
			</router-link>
		</div>
	<div class="list_home">
		<div class="box" v-for="(item,index) in searchList">
			<div class="shop_list_title">
				{{item.TypeName}}
				{{item.Url}}
				<a>
					<span @click="handleClick(item.Url)">查看全部   ></span>
				</a>
			</div>
			<div class="van_row">
				<div v-for="text in item.TypeData">{{text.Name}}</div>
				
			</div>
		</div>
		
	</div>
	</div>
</template>

<script>
import {searchApi} from "@api/search"
	export default {
		name:"Search",
		data(){
			return{
				allshop:"/allshop",
				path:"/search-in",
				
				searchList:[]
			}
		},
		created(){
			this.handleGetSearch()
		},
		methods:{
			async handleGetSearch(){
				let datar=await searchApi();
				this.searchList=datar.data.item_data
			},
			handleClick(index){
				
				this.$observer.$emit("sendAll",index)
				this.$router.push('/allshop')
			}
		}
		
	}
</script>
<style>
	html {
    font-size: 26.67vw;
}
.page{
	overflow:scroll
}
.ser_head{
	height:0.4rem;
	width:100%;
	padding:0.05rem 0;
}
.ser_head .head_s{
	height:0.35rem;
	width:80%;
	margin:0 auto;
	background:#ececec;
	border-radius: 0.05rem;
	padding:0.05rem 5%;
	display: flex;
	line-height:0.25rem;
}
.ser_head .head_s i{
	height:0.14rem;
	width:0.14rem;
}
.ser_head .head_s span{
	font-size:0.14rem;
	margin-left:0.1rem;
	color:rgb(204, 204, 204);
}

.list_home{
	width:100%;
	margin-top:0.05rem;
	border-top:1px #eee solid;
	padding-bottom:0.5rem;
}
.list_home .box{
	height:auto;
	width:100%;
	color:#525252;;
}
.list_home .box .shop_list_title{
	height:0.35rem;
	width:98%;
	margin:0 auto;
	font-size:0.18rem;
	line-height:0.35rem;
}
.list_home .box .shop_list_title a{
	font-size:0.12rem;
	color:#999;
	float:right;
}
.list_home .box .van_row{
	width:100%;
	height:auto;
	color:#525252;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.list_home .box .van_row div{
	float:left;
	height:0.35rem;
	line-height:0.35rem;
	background:#f3f3f3;
	padding:0 0.025rem;
	font-size:0.13rem;
	width:1.85rem;
	margin-bottom:0.05rem;
}

</style>