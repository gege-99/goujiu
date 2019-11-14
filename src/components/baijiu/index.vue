<template>
  <!-- <df-scroll> -->
    <div id="box">
      <div class="box_con" v-for="(item,index) in pic" :key="index">
        <img :src="item.Pic" />
        <p>{{item.ProductName}}</p>
        <div class="timebuy">限时抢购</div>
        <span>{{item.ActivityMoney}}</span>
      </div>
    </div>
  <!-- </df-scroll> -->
</template>

<script>
import { miaosha, bainae } from "@api/shouye";
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
    this.handleGetNaeList(20);
  },
  methods: {
    async handleGetNaeList(pagesize) {
      let data = await bainae(pagesize);
      this.naeList = data.data;
      this.handlePic();
    },
    handlePic() {
      for (var i = 0; i < this.naeList.length; i++) {
        var obj = {};
        obj.Pic = " http://img0.gjw.com/product/" + this.naeList[i].Pic;
        obj.ProductName = this.naeList[i].ProductName;
        this.pic.push(obj);
      }
    }
  }
};
</script>