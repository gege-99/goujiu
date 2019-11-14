<template>
	<div id="footer">
		<footer>
	        <router-link tag="div" class="active iconfont"
	        	v-for="item in navs"
	        	:key="item.id"
	        	:to="item.path"

	        >
	            <i v-html="item.icon"></i>
	            <p>{{item.text}}</p>
	        </router-link>
	        
	    </footer>
	</div>
</template>

<script>
	export default {
		name:"TabBar",
		data(){
			return{
				navs:[
					{
						id:0,
						text:"首页",
						icon:"&#xe626;",
						path:"/shouye",
					},
					{
						id:1,
						text:"分类",
						icon:"&#xe7f9;",
						path:"/search",
					},
					{
						id:2,
						text:"专享福利",
						icon:"&#xe600;",
						path:"/welfare-in",
					},
					{
						id:3,
						text:"购物车",
						icon:"&#xe6f2;",
						path:"/shopcar",
					},
					{
						id:4,
						text:"我的",
						icon:"&#xe66e;",
						path:"/mine",
					},
				]
			}
		}
	}
</script>
<style>

#footer{
    position:fixed;
    bottom:0;
    left:0;
    height:0.5rem;
    display:flex;
    width:100%;
    background:#fff;
}
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.5rem;
    display: flex;
    width: 100%;
    background: #fff;
}
footer div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
footer div:nth-child(3){
	color:red;
}
footer .router-link-active{
	color:#c33;
}
.iconfont{
    font-size: 0.22rem;
}
footer div p{
    font-size: 0.12rem;
}
#bag{
    width: 0.18rem;
    height: 0.18rem;
    margin-bottom: 0.05rem;
}
</style>