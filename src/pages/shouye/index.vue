<template>
  <div class="page">
    <!-- 第一部分 -->
    <div class="img">
      <img
        class="banner"
        src="http://img0.gjw.com/famous/2018/1210/8f63d19948434358961f84ec1aba5726.jpg"
        alt
      />
      <router-link
        tag="div"
        to="/search-in"
       href="#" class="select iconfont"
       >
        <div class="header">
          &#xe633;
          <span>请输入商品名称</span>
        </div>
      </router-link>
    </div>
    <!-- 第二部分 -->
    <div class="mes">
      <img src="http://m.gjw.com/images/hot.png" alt />
      <span>太白酒 醇柔 清仓处理 仅需29 元</span>
    </div>
    <!-- 第三部分 -->
    <div id="list">
      <img src="http://img0.gjw.com/famous/2018/0713/34c90a46f767478897208adca7681ae4.jpg" alt />
      <img src="http://img0.gjw.com/famous/2018/0713/3f257a2d80cb49e5a1e65340201329f0.jpg" alt />
      <img src="http://img0.gjw.com/famous/2018/0713/a8da83fed83c44f2a7a9f64862cd6489.jpg" alt />
      <img src="http://img0.gjw.com/famous/2018/0713/229cbdd4a909417ba6218c7e21b48131.jpg" alt />
      <img src="http://img0.gjw.com/famous/2018/0713/b0041913b9844e519782312fa1c66118.jpg" alt />
      <img src="http://img0.gjw.com/famous/2018/0713/b0041913b9844e519782312fa1c66118.jpg" alt />
      <img src="http://img0.gjw.com/famous/2018/0713/07223d7582de4438875efedac3d9cd90.jpg" :to="this.setshop" />
      <img src="http://img0.gjw.com/famous/2018/0713/c7ee25ce88144ebe9f1c743c64df2000.jpg" alt />
      <img src="http://img0.gjw.com/famous/2018/0801/8fccd4a2c00947869641bd32c0a4c42f.jpg" alt />
      <img src="http://img0.gjw.com/famous/2018/0801/a4b34eda8bc24782994a4d86cd2528ce.jpg" :to="this.newshop" />
    </div>
    <!-- 第四部分 -->
    <div class="time">
      <span>掌上秒杀</span>
      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </div>
    <div class="box">
      <div class="good">
        <div class="show" v-for="(item,Id) in miaosha" :key="Id">
          <img :src="item.Pic" alt />
          <P>{{item.ProductName}}</P>
          <div class="q">{{item.Price}}</div>
          <div class="k">马上抢</div>
        </div>
      </div>
    </div>
    <div class="show_s">
      <img src="http://img0.gjw.com/famous/2019/1031/91f9ea253e3e47cca6814f80cee65ec0.jpg" alt />
      <img src="http://img0.gjw.com/famous/2019/1101/06f16b05d91449cf94278b5a10929317.jpg" alt />
    </div>

    <!-- 第五部分 -->
    <div id="con">
      <div class="con_row">
        <img
          class="c_r_1"
          src="http://img0.gjw.com/famous/2019/1101/e6098ec7ae5d47bc910e964cac3f410d.jpg"
          alt
        />
        <img
          class="c_r_2"
          src="http://img0.gjw.com/famous/2019/1031/e577e09691f049d7b16b05b47890baa2.jpg"
          alt
        />
        <img
          class="c_r_2"
          src="http://img0.gjw.com/famous/2019/1031/2a0871934ae94821a9142621715a5c2f.jpg"
          alt
        />
      </div>
      <div class="bz">
        <div class="s_h iconfont">
          <span>正品保证</span>
        </div>
        <div class="s_h iconfont">
          &#xe604;
          <span>开箱验货</span>
        </div>
        <div class="s_h iconfont">
          &#xe739;
          <span>赔付保障</span>
        </div>
      </div>
      <img
        class="c_a"
        src="http://img0.gjw.com/famous/2019/1031/b650d0c6e4944078aecf5b9c1640d4dd.jpg"
        alt
      />
      <img
        class="c_b"
        src="http://img0.gjw.com/famous/2019/1101/cf5762b9e34741e9b81e2e1d4b20fc83.jpg"
        alt
      />
    </div>

    <!-- 第六部分 -->

    <div class="list">
      <router-link tag="div" class="a" to="/shouye/jingxuan">精选</router-link>
      <router-link tag="div" class="a" to="/shouye/baijiu">白酒</router-link>
      <router-link tag="div" class="a" to="/shouye/putao">葡萄酒</router-link>
      <router-link tag="div" class="a" to="/shouye/qingyang">清酒洋酒</router-link>
      <router-link tag="div" class="a" to="/shouye/huangpi">黄酒啤酒</router-link>
      <router-link tag="div" class="a" to="/shouye/laojiu">年份老酒</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { miaosha, nae } from "@api/shouye";

// console.log(miaosha);
export default {
  name: "shouye",
  data() {
    return {
      newpath:"/newshop",
      setpath:"/set",
      naeList: [],
      pic: [],
      miaosha: [],
      
    };
  },
  async created() {
    this.handleGetNaeList(20);
    this.handlemiaosha(0);
  },
  methods: {
    async handlemiaosha(userid) {
      let data = await miaosha(userid);
      this.miaosha = data.data[0].AppSeckill.AppSeckillProList;
      //   console.log(this.miaosha);
      for (var i = 0; i < this.miaosha.length; i++) {
        this.miaosha[i].Pic =
          " http://img0.gjw.com/product/" + this.miaosha[i].imgUrl;
      }
    },
    async handleGetNaeList(pagesize) {
      let data = await nae(pagesize);
      this.naeList = data.data;
      this.handlePic();
    },
    handlePic() {
      for (var i = 0; i < this.naeList.length; i++) {
        var obj = {};
        obj.Pic = " http://img0.gjw.com/product/" + this.naeList[i].Pic;
        // obj.Pic=arr[parseInt(Math.random()*3)]
        obj.ProductName = this.naeList[i].ProductName;
        this.pic.push(obj);
        }
    }
  }
};
</script>
<style >
/* 第一部分 */
.item {
  display: inline-block;
  width: 22px;
  height: 0.44rem;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
body,
.page {
  overflow: auto;
}
.list .router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.select {
  position: absolute;
  top: 0.1rem;
  left: 0.18rem;
  width: 3.38rem;
  margin: 0 auto;
  display: block;
  height: 0.35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.05rem;
  background: #fff;
}
.header {
  width: 3.1rem;
}
.header span {
  color: #ccc;
  margin-left: 0.2rem;
  font-size: 15px;
}
.img {
  height: 1.76rem;
  width: 3.75rem;
  margin-bottom: 0.1rem;
  position: relative;
}
.banner {
  height: 1.76rem;
}

/* 第二部分 */
.mes {
  width: 3.45rem;
  height: 0.3rem;
  margin-left: 0.15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}

.mes img {
  width: 0.8rem;
  height: 0.15rem;
}

.mes span {
  width: 2.6rem;
  border-left: 1px solid #ccc;
  padding-left: 0.1rem;
  margin-left: 0.05rem;
}
/* 第三部分 */
#list {
  height: 1.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

#list img {
  width: 0.69rem;
  height: 0.69rem;
}

/* 第四部分 */
.time {
  height: 0.44rem;
  padding: 0.1rem 0.15rem;
  text-align: center;
  display: flex;
  flex-direction: row;
}

.time span {
  font-weight: 600;
  font-size: 14px;
}

.good {
  height: 1.4rem;
  display: flex;
  width: 3.75rem;
  /* overflow: scroll; */
  overflow-x: scroll;
  overflow-x: overlay;
  background: #f8f8f8;
  align-items: center;
  position: relative;
}

.good .show {
  white-space: nowrap;
  width: 3.5rem;
  height: 1rem;
  margin-left: 0.1rem;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 0.2rem;
}

.good .show img {
  width: 1rem;
  height: 1rem;
}

.good .show p {
  margin-left: 0.05rem;
  font-weight: 800;
  height: 0.6rem;
  line-height: 0.2rem;
  width: 1.4rem;
  overflow: hidden;
  white-space: pre-wrap;
  /* width: 150px; */
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  color: #000;
  /* -webkit-line-clamp:2;
  word-break:break-all;
   display:-webkit-box;
    -webkit-box-orient:vertical; */
}

.good .show .q {
  position: absolute;
  left: 1.2rem;
  top: 0.8rem;
}

.good .show .k {
  position: absolute;
  right: 0.2rem;
  top: 0.8rem;
  width: 0.6rem;
  height: 0.2rem;
  line-height: 0.2rem;
  background: cyan;
  border-radius: 0.1rem;
  text-align: center;
}

.show_s {
  height: 1.72rem;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
}

.show_s img {
  width: 1.82rem;
  height: 1.5rem;
}

/* 第五部分 */
#con {
  display: block;
  width: 3.45rem;
  height: 3.55rem;
  margin-left: 0.15rem;
}

#con .con_row {
  width: 3.45rem;
  height: 1.14rem;
}

#con .con_row img {
  float: left;
  height: 1.12rem;
  margin: 0;
  padding: 0;
}

.c_r_1 {
  width: 1.72rem;
}

.c_r_2 {
  width: 0.862rem;
}

.bz {
  height: 0.24rem;
  display: flex;
  flex-direction: row;
  width: 3.1rem;
  margin-left: 0.2rem;
}

.bz .s_h {
  flex: 1;
  text-align: center;
  position: relative;
}

.bz .s_h span {
  color: red;
  font-size: 0.12rem;
  margin-left: 0.05rem;
  margin-bottom: 0.05rem;
}

.c_a {
  margin-top: 0.1rem;
  width: 3.45rem;
  height: 1.27rem;
}

.c_b {
  width: 3.45rem;
  height: 0.65rem;
}

/* 第六部分 */
.list {
  height: 0.6rem;
  padding-bottom: 0.16rem;
  overflow-x: auto;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
}

.list .a {
  display: block;
  /* padding: 0.15rem; */
  padding: 0.15rem 0.08rem;
  width: 0.65rem;
  height: 0.44rem;
  font-size: 0.14rem;
  white-space: nowrap;
  display: block;
  float: left;
  text-align: center;
}
.list .a:active {
  color: #c33;
  border-bottom: 0.02rem solid #c33;
}
#box {
  width: 3.65rem;
  margin-left: 0.05rem;
  height: 20.19rem;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.scrollbox {
  width: 3.65rem;
  margin-left: 0.05rem;
  /* min-height: 2rem; */
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
#box .box_con {
  width: 1.775rem;
  height: 2.67rem;
  margin-top: 0.05rem;
  padding-left: 0.04rem;
  border: 1px solid #ccc;
}

#box .box_con img {
  width: 1.685rem;
  height: 1.685rem;
}

#box .box_con p {
  height: 0.36rem;
  width: 1.68rem;
  color: #666;
  margin: 0.05rem 0;
  line-height: 0.18rem;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
#box .box_con .timebuy {
  height: 0.18rem;
  width: 0.52rem;
  font-size: 0.12rem;
  border-radius: 0.03rem;
  background: #ffa855;
  text-align: center;
  line-height: 0.18rem;
  color: #fff;
  margin-left: 0.1rem;
  margin-bottom: 0.05rem;
}
#box .box_con span {
  color: red;
  font-size: 0.14rem;
  margin-top: 0.05rem;
}
.dui {
  position: absolute;
  top: 0.04rem;
}
</style>

