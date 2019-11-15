<template>
  <div class="big">
    <div id="box" ref="box">
      <!-- <div class="scrollbox"> -->
        <router-link
          href="#"
          class="box_con"
          v-for="item in pic"
          :key="item.id"
          :to="'/detailed/'+item.id"
        >
          <img :src="item.Pic" />
          <p>{{item.ProductName}}</p>
          <div class="timebuy">限时抢购</div>
          <span>{{item.ActivityMoney}}</span>
        </router-link>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { miaosha, nae } from "@api/shouye";
import BScroll from "better-scroll";
console.log(miaosha);
export default {
  name: "jingxuan",
  data() {
    return {
      naeList: [],
      pic: []
    };
  },
  async created() {
    //   let data = await miaosha(0);
    //   console.log(data.data[0].AppSeckill.AppSeckillProList)
    this.handleGetNaeList(20);
  },
  methods: {
    async handleGetNaeList(pagesize) {
      let data = await nae(pagesize);
      console.log(this.$refs.box.clientTop);
      this.naeList = data.data;
      // this.naeList = [...this.naeList,...data.data];
      
      this.handlePic();
      //   console.log(this.naeList)
      //   console.log(this.pic);
    },
    handlePic() {
      for (var i = 0; i < this.naeList.length; i++) {
        var obj = {};
        //   var arr=["http://img0.gjw.com/product/2019/1108/67654091ed514b27a8b4d50595cc7121_2.jpg",
        //       "http://img0.gjw.com/product/2019/1024/c150e1df77d74a6986f09c5e7918d799_2.jpg",
        //       "http://img0.gjw.com/product/2019/1109/f7cdd2e842a14bb3ad426bd13614b203_2.jpg"
        //   ]
        obj.Pic = " http://img0.gjw.com/product/" + this.naeList[i].Pic;
        // obj.Pic=arr[parseInt(Math.random()*3)]
        obj.ProductName = this.naeList[i].ProductName;
        obj.id=this.naeList[i].ProductId
        this.pic.push(obj);
        //   http://img0.gjw.com/product/2019/1109/0b990cd1c97046a082ad2efc82e5cc0e_2.jpg
      }
    }
  }
};
</script>