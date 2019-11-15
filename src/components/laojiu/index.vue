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
import { miaosha, bainae,laojiu } from "@api/shouye";
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
      let data = await laojiu(pagesize);
      this.naeList = data.data;
      this.handlePic();
    },
    handlePic() {
      for (var i = 0; i < this.naeList.length; i++) {
        var obj = {};
        obj.Pic = " http://img0.gjw.com/product/" + this.naeList[i].Pic;
        obj.ProductName = this.naeList[i].ProductName;
        obj.id=this.naeList[i].ProductId
        this.pic.push(obj);
      }
    }
  }
};
</script>