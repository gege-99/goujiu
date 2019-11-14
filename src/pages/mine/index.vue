<template>
	<div class="page">
		<div class="user">
        <div class="user_head">
            <div class="user_head_box">
                <img src="img/63.png" alt="" class="user_img">
                <router-link tag="a" :to="this.path">登录/注册</router-link>
                <div class="user_info">
                    <p class="one"><img src="img/18.png"></p>
                    <p>13152998669</p>
                    <p>普通会员</p>
                </div>
            </div>
        </div>
        <div class="my_order">
            <div class="my_order_head">
                <div class="tit_top">
                    <span class="tit_left">
                        我的订单
                    </span>
                    <span class="tit-right">
                        查看全部订单
                        <i></i>
                    </span>
                </div>
                <div class="van_panel">
                    <div class="user_link">
                        <span class="num">0</span>
                        <img src="img/8.png" alt="">
                        <span>待付款</span>
                    </div>
                    <div class="user_link">
                        <span class="num">0</span>
                        <img src="img/9.png" alt="">
                        <span>待发货</span>
                    </div>
                    <div class="user_link">
                        <span class="num">0</span>
                        <img src="img/10.png" alt="">
                        <span>待收货</span>
                    </div>
                    <div class="user_link">
                        <img src="img/11.png" alt="">
                        <span>待评价</span>
                    </div>
                </div>
            </div>
            <div class="my_order_bottom">
                <div class="tit_top">
                    <span class="tit_left">
                        我的钱包
                    </span>
                    <span class="tit-right">
                        查看明细
                        <i></i>
                    </span>
                </div>
                <div class="tit_bottom">
                    <div class="bottom_box">
                        <p>0</p>
                        <p>账户余额</p>
                    </div>
                    <div class="bottom_box">
                        <p>0</p>
                        <p>优惠券</p>
                    </div>
                    <div class="bottom_box">
                        <p>0</p>
                        <p>积分</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="user_group">
            <div class="user_group_box">
                <img src="img/12.png" alt="">
                <p>商品收藏</p>
            </div>
            <div class="user_group_box">
                <img src="img/13.png" alt="">
                <p>浏览足迹</p>
            </div>
            <div class="user_group_box">
                <img src="img/14.png" alt="">
                <p class="red">400-722-1919</p>
            </div>
            <div class="user_group_box">
                <img src="img/bag.png" alt="">
                <p>领券福利</p>
            </div>
        </div>
        <div class="hot">
            <div class="bg_tit">
                <b>推荐商品</b>
                <div class="line"></div>
            </div>
            <div class="tp_box">
                <div class="swiper">
                    <div class="box">
                        <img src="http://img0.gjw.com/product/2018/0823/aeca43e9e2954a1fbf92534d0b67a805_1.jpg">
                        <div>￥298</div>
                    </div>
                    <div class="box">
                        <img src="http://img0.gjw.com/product/2018/0823/aeca43e9e2954a1fbf92534d0b67a805_1.jpg">
                        <div>￥298</div>
                    </div>
                    <div class="box">
                        <img src="http://img0.gjw.com/product/2018/0823/aeca43e9e2954a1fbf92534d0b67a805_1.jpg">
                        <div>￥298</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
</template>

<script>
	export default {
		name:"Mine",
        data(){
            return {
                path:"/login"
            }
        }
	}
</script>
<style>
html{
    font-size:26.67vw;
}
.user{
    width:100%;
    height:8.01rem;
    padding-bottom:0.5rem;
}
.user .user_head{
    height:1.6rem;
    width:100%;
    background:#2e313a;
    color:#666;
}
.user .user_head .user_head_box{
    height:1.2rem;
    padding-top:0.4rem;
    width:100%;

}
.user .user_head .user_head_box img{
    height:0.8rem;
    width:1.1rem;
    float:left;
    padding:0 0.15rem;
}
.user .user_head .user_head_box a{
    line-height:0.8rem;
    color:#fff;
    font-size:0.14rem;
    float:left;
    
}
.user .user_head .user_head_box .user_info{
    height:0.76rem;
    width:1.08rem;
    float:left;
    display:none;
}
.user .user_head .user_head_box .user_info p{
    width:100%;
    height:0.12rem;
    margin:0.08rem 0;
    font-sizE:0.12rem;
    padding:0 0.05rem;
    line-height:0.12rem;
    color:#fff;
}
.user .user_head .user_head_box .user_info .one{
    height:0.2rem;
    width:100%;
    padding:0rem;
}
.user .user_head .user_head_box .user_info p img{
    height:0.18rem;
    width:100%;
    padding:0;
}
.user .my_order{
    height:2.72rem;
    width:3.75rem;
    color:#333;
}
.user .my_order .my_order_head{
    height:1.37rem;
    width:100%;
    font-size:0.14rem;
}
.user .my_order .my_order_head .tit_top{
    height:0.44rem;
    width:100%;
    padding:0.1rem 0.15rem;
    line-height:0.24rem;
}
.user .my_order .my_order_head .tit_top .tit_left{
    float:left;
    height:0.24rem;
    width:50%;
    font-size:0.14rem;
}
.user .my_order .my_order_head .tit_top .tit-right{
    float:left;
    height:0.24rem;
    width:50%;
    text-align: right;
    position: relative;
    padding-right:0.18rem;
}
.user .my_order .my_order_head .tit_top .tit-right i{
    background:url("../../../public/img/7.png") no-repeat;
    position:absolute;
    display:inline-block;
    height:0.24rem;
    width:0.12rem;
    top:0.06rem;
    right:0;

}
.user .my_order .my_order_head .van_panel{
    width:100%;
    height:0.93rem;
    color:#333;
    padding:0.15rem 0;
    text-align: center;
    font-size:0.12rem;
    display: flex;
    border-bottom:1px solid #ccc;
}
.user .my_order .my_order_head .van_panel .user_link{
    height:0.63rem;
    width:25%;
    position: relative;
}
.user .my_order .my_order_head .van_panel .user_link img{
    height:0.3rem;
    width:0.3rem;
    margin:0 auto 0.05rem;;
}
.user .my_order .my_order_head .van_panel .user_link .num{
    height:0.14rem;
    line-height:0.14rem;
    background:#f44;
    color:#fff;
    padding:0 0.036rem;
    border-radius: 50%;
    position: absolute;
    top:-0.06rem;;
    right:0.25rem;
}
.user .my_order .my_order_bottom{
    height:1.25rem;
    width:100%;
    margin-top:0.1rem;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
}
.user .my_order .my_order_bottom .tit_top{
    height:0.44rem;
    width:100%;
    padding:0.1rem 0.15rem;
    line-height:0.24rem;
}
.user .my_order .my_order_bottom .tit_top .tit_left{
    float:left;
    height:0.24rem;
    width:50%;
    font-size:0.14rem;
}
.user .my_order .my_order_bottom .tit_top .tit-right{
    float:left;
    height:0.24rem;
    width:50%;
    text-align: right;
    position: relative;
    padding-right:0.18rem;
    font-size:0.14rem;
}
.user .my_order .my_order_bottom .tit_top .tit-right i{
    background:url("../../../public/img/7.png") no-repeat;
    position:absolute;
    display:inline-block;
    height:0.24rem;
    width:0.12rem;
    top:0.06rem;
    right:0;

}
.user .my_order .my_order_bottom .tit_bottom{
    height:0.81rem;
    width:100%;
    padding:0.15rem 0;
    display: flex;
}
.user .my_order .my_order_bottom .tit_bottom .bottom_box{
    height:0.51rem;
    width:33.3%;
    text-align: center;
    font-size:0.12rem;

}
.user .my_order .my_order_bottom .tit_bottom .bottom_box p{
    height:0.18rem;
    line-height:0.18rem;
    width:100%;
    margin:0.05rem auto;
}
.user .user_group{
    height:1.04rem;
    width:100%;
    margin-top:0.1rem;
    border-top:1px solid #ccc;
    padding:0.1rem 0;
    display: flex;
    border-bottom:1px solid #ccc;
}
.user .user_group .user_group_box{
    height:0.84rem;
    width:25%;
    
}
.user .user_group .user_group_box img{
    height:0.3rem;
    width:0.35172rem;
    margin:0.1rem auto 0;
}
.user .user_group .user_group_box p{
    height:0.14rem;
    width:100%;
    font-size:0.14rem;
    color:#333;
    margin:0.14rem 0;
    text-align: center;
}
.user .user_group .user_group_box .red{
    color:red;
    font-size:0.12rem;
}
.user .hot{
    height:2rem;
    width:100%;
}
.user .hot .bg_tit{
    width:3rem;
    height:0.35rem;
    margin:0.05rem 0.375rem;
    position:relative;
    text-align: center;
    line-height:0.35rem;
}
.user .hot .bg_tit b{
    color:#EEAA22;
    background-color:#f4f5f7;
    height:0.35rem;
    line-height:0.35rem;
    padding:0 0.1rem;
    position: absolute;
    top:0;
    left:40%;
    z-index:3;
    text-align:center;
    font-size:0.14rem;
}
.user .hot .bg_tit .line{
    height:1px;
    width:100%;
    background:#EEAA22;
    position:relative;
    top:50%;
    left:0;
}
.user .hot .tp_box{
    height:1.6rem;
    width:100%;
    overflow: hidden;
    position:relative;
}
.user .hot .tp_box .swiper{
    height:1.32rem;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow: scroll;
    display: flex;
}
.user .hot .tp_box .swiper .box{
    height:1.32rem;
    width:1.4rem;
    margin-right:0.1rem;
    position:relative;
}
.user .hot .tp_box .swiper .box img{
    height:1.3rem;
    width:1.3rem;
}
.user .hot .tp_box .swiper .box div{
    position:absolute;
    width:1.3rem;
    bottom:0;
    left:0;
    height:0.25rem;
    line-height:0.25rem;
    text-align: center;
    background:rgba(0, 0, 0, 0.6);
    color:#fff;
    font-size:0.14rem;
}
</style>