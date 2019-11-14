<template>
  <div id="box">
    <div class="box_con" v-for="(item,index) in pic" :key="index">
        <img :src="item.Pic" />
        <p>{{item.ProductName}}</p>
        <div class="timebuy">限时抢购</div>
        <span>{{item.ActivityMoney}}</span>
      </div>
  </div>
</template>

<script>
import { miaosha, nae } from "@api/shouye";
console.log(miaosha);
export default {
  name: "shouye",
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
      this.naeList = data.data;
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
        this.pic.push(obj);
        //   http://img0.gjw.com/product/2019/1109/0b990cd1c97046a082ad2efc82e5cc0e_2.jpg
      }
    }
  }
};
</script>