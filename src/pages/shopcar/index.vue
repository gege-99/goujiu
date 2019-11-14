<template>
	<div class="page">
		<!-- 头部 -->
    <div class="head">
        <div class="title">
            购物车
        </div>
        <span>编辑</span>
    </div>
    <!-- 主体 -->
    <div class="body">
        <div class="box">
            <input type="checkbox" class="cir" >
            <label for="" class="cire"></label>
            <div class="small_box">
                <div class="bon_box">
                    <img src="http://img0.gjw.com/product/2019/1024/3a82e2f371b84761b32fd7dc8dafc4cf_2.jpg" alt="">
                    <div class="bon_small_box">
                        <div class="name">【两瓶装】53度茅台王子丁酉鸡年酒500ml 53度茅台王子酒戊戌狗年500ml</div>
                        <div class="tag">
                            <span>限时抢购</span>
                        </div>
                        <div class="van-card__footer">
                            <div class="pirce">￥<span id="pirce">599</span></div>
                            <div class="number">
                                <button>-</button>
                                <input type="text" value=1>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- 结算 -->
    <div class="money">
        <div class="mo_box">
            <div class="all_get">
                <input type="checkbox" class="get-all" >
                <label for="" class="get-all1"></label>
                <span>全选</span>
            </div>
            <div class="van-submit">
                <span class="nath">合计:</span>
                <span class="path">￥<i>0.00</i></span>
            </div>
            <div class="Settlement">结算(<span>0</span>)</div>
        </div>
    </div>
	</div>
</template>

<script>
	export default {
		name:"Shopcar",
	}
</script>
<style>
html{
    font-size:26.67vw
}
.head{
    width:100%;
    height:0.46rem;;
    /* background:red; */
    position: fixed;
    display:flex;
    text-align: center;
    line-height:0.46rem;
    font-size:0.16rem;
    /* position:absolute; */
    top:0;
    left:0;
}
.title{
    height:0.46rem;
    max-width:60%;
    margin:0 auto;
    
}
.head span{
    position: absolute;
    right:0.15rem;
    bottom:0px;
    font-size:0.14rem;
    color:#666;
}


.body{
    min-height:1rem;
    padding:0.5rem 0 1rem;
    /* background:red; */
}
.body .box{
    height:1rem;
    border-bottom:5px #f8f8f8 solid;
    /* background:red; */
    position: relative;
}
input[type="checkbox"] {
    height:0.2rem;
    width:0.2rem;
    border-radius: 0.1rem;
    position:absolute;
    z-index:2;
    top:0.4rem;
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
    top:0.4rem;
    left:0.1rem;
    border:1px solid #aaa;
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
/* .body .box .cir{
    height:0.2rem;
    width:0.2rem;
    border-radius: 0.1rem;
    position:absolute;
    z-index:1;
    top:0.4rem;
    left:0.1rem;
    border:1px solid #aaa;
    outline: none;
    background:#fff;
} */

.body .box .small_box{
    height:1rem;
    width:3.325rem;
    margin-left:0.1rem;
    padding:0 0.1rem 0 0.25rem;
}
.body .box .small_box .bon_box{
    height:1rem;
    width:3.325rem;
    padding:0.05rem 0.15rem 0.05rem 1.15rem;
    position: relative;
}
.body .box .small_box img{
    height:0.9rem;
    width:0.9rem;
    position:absolute;
    top:0.05rem;
    left:0.15rem;
}
.body .box .small_box .bon_small_box{
    height:0.9rem;
    width:2.025rem;
}
.body .box .small_box .bon_small_box .name{
    height:0.4rem;
    width:2.025rem;
    word-wrap:break-word;
    font-size:0.12rem;
    color:#333;
    line-height:0.2rem;
    overflow:hidden;
    text-overflow: ellipsis;
}
.body .box .small_box .bon_small_box .tag{
    width:2.025rem;
    height:0.22rem;
    font-size:0.12rem;
    line-height:0.2rem;
    text-align:left;
}
.body .box .small_box .bon_small_box .tag span{
    padding:0.02rem;
    background:rgb(255, 168, 85);
    color:#fff;
    border-radius: 0.05rem;
    margin:0 0.05rem;
}
.body .box .small_box .bon_small_box .van-card__footer{
    height:0.3rem;
    width:2rem;
    position:absolute;
    bottom:0.05rem;
    right:0.15rem;
    display:flex;
}
.body .box .small_box .bon_small_box .van-card__footer .pirce{
    color:#fb223e;
    font-size:0.12rem;
    line-height:0.2rem;
    font-weight: 700;
}
.body .box .small_box .bon_small_box .van-card__footer .number{
    height:0.3rem;
    width:1.15rem;
    background:red;
    margin-left:0.4rem;
    display: flex;
}
.body .box .small_box .bon_small_box .van-card__footer .number button{
    height:0.3rem;
    width:0.4rem;
    padding:0.05rem;
    background:#f8f8f8;
    border:1px solid #e5e5e5;
    outline: none;
    font-size:0.16rem;
}
.body .box .small_box .bon_small_box .van-card__footer .number input{
    height:0.3rem;
    width:0.35rem;
    line-height:0.3rem;
    text-align: center;
}
.money{
    height:0.5rem;
    width:100%;
    position: fixed;
    bottom:0.5rem;
    z-index:100;
    background:#fff;
}
.money .mo_box{
    height:0.5rem;
    width:100%;
    display:flex;
    font-size:0.16rem;
    line-height:0.5rem;
}
.money .mo_box .all_get{
    height:0.41rem;
    width:0.97rem;
    border-bottom:5px #f8f8f8 solid;
    position: relative;
    line-height:0.5rem;
}
.money .mo_box .all_get .get-all{
    display: inline-block;
    height:0.2rem;
    width:0.2rem;
    border-radius: 0.1rem;
    border:1px solid #aaa;
    position:absolute;
    top:0.15rem;
    left:0.1rem;
    opacity: 0;
}
.money .mo_box .all_get .get-all1{
    display: inline-block;
    height:0.2rem;
    width:0.2rem;
    border-radius: 0.1rem;
    border:1px solid #aaa;
    position:absolute;
    top:0.15rem;
    left:0.1rem;
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
.money .mo_box .all_get span{
    display:inline-block;
    line-height:0.2rem;
    height:0.2rem;
    width:0.95rem;
    padding:0 0.1rem 0 0.25rem;
    margin-left:0.1rem;
}
.money .mo_box .van-submit{
    height:0.12rem;
    width:1.68rem;
    padding-right:0.12rem;
    color:#666;
    text-align:right;
}
.money .mo_box .van-submit .nath{
    font-size:0.16rem;
    color:#666;
}
.money .mo_box .van-submit .path{
    color:#f44;
    font-size:0.16rem;
}

.money .mo_box .Settlement{
    height:0.5rem;
    width:1.1rem;
    line-height:0.5rem;
    padding:0 0.15rem;
    background:#e8e8e8;
    color:#999;
    text-align:center;
}
</style>