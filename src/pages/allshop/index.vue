<template>
	<div>
		<div class="ser_head_all">
			<img src="img/15.png" @click="handleBack()">
			<span>全部品牌</span>
		</div>
		<div class="list_home-shopname">
			<div class="box">
				<div class="all_title">
					A
				</div>
				<div class="list_home_shop" v-for="item in allshopList">
					<div>{{item.TypeName}}</div>
				</div>
			</div>

		</div>
		<router-view></router-view>
		
	</div>
</template>

<script>	
import http from "@utils/request"
import {allshopApi} from "@api/all_shop"

	export default {
		name:"Allshop",
		data(){
			
			return{
				id:"",
				allshopList:[],
				arr:[],
			}

		},
		
		methods:{
			
			handleBack(){
				this.$router.back();
			}
		},
		created(){
			this.$observer.$on("sendAll",(params)=>{
				
				this.id=params
				
			}),
			console.log(this.id)		
			http({	
		        method:"get",
				url:"/BtCApi/List/GetSeriesListALL?",
				data:{
					ParentID:2		
				}
		      }).then((data)=>{
		      	this.allshopList=data.data.item_data
		        console.log(this.allshopList);
		      }).catch((err)=>{
		        console.log(err);
		      })
		       
		},
	}
</script>
<style>
html {
    font-size: 26.67vw;
}
.ser_head_all{
	height:0.4rem;
	width:100%;
	padding:0.05rem 0;
	position:fixed;
	top:0;
	line-height:0.4rem;
	left:0;
	background:#fff;
	z-index:999;
	text-align: center;
}
.ser_head_all img{
	height:0.12rem;
	width:0.12rem;
	position:absolute;
	left:0.15rem;
	top:0.15rem;
}
.ser_head_all span{
	display: inline-block;
	color:black;
	font-size:0.16rem;
	padding:0;
	position:absolute;
	top:0;
	left:40%;
}

.list_home-shopname{
	width:100%;
	margin-top:0.05rem;
	border-top:1px #eee solid;
	padding-top:0.4rem;
	position:absolute;
	top:0;
	left:0;
	bottom:0;
	right:0;
	overflow:scroll
}
.list_home-shopname .box{
	height:auto;
	width:100%;
	color:#525252;
}
.list_home-shopname .box .all_title{
	height:0.35rem;
	width:98%;
	margin:0 auto;
	font-size:0.18rem;
	line-height:0.35rem;
	background:#f3f3f3;
}
.list_home-shopname .box .list_home_shop{
	width:100%;
	height:auto;
	color:#525252;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.list_home-shopname .box .list_home_shop div{
	float:left;
	height:0.35rem;
	line-height:0.35rem;

	padding:0 0.025rem;
	font-size:0.14rem;
	width:100%;

}

</style>
