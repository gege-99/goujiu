<template>
  <div id="footer">
    <ul>
      <router-link tag="li"
       v-for="item in navs" 
       :key="item.id" 
       :to="item.path">
          <i class="iconfont" v-html="item.icon"></i>
          <p>{{item.text}}</p>
      </router-link>
    </ul>
  </div>
</template>

<style >
        #footer{
            position: fixed;
            bottom: 0;
            left: 0;
            height: 0.5rem;
            display: flex;
            width: 100%;
            background: #fff;
        }
        #footer ul,#footer li{
            width: 100%;
            height: 100%;
        }
        #footer ul .router-link-active{
          color: #c33
        }
        #footer ul{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        #footer ul li{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column
        }
        .iconfont{
            font-size: 0.22rem;
        }
        #footer li p{
            font-size: 0.12rem;
        } 
        
</style>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      navs: [
        {
          id: 0,
          text: "首页",
          icon: "&#xe665;",
          path: "/shouye"
        },
        {
          id: 1,
          text: "分类",
          icon: "&#xe7f9;",
          path: "/kind"
        },
        {
          id: 2,
          text: "专享福利",
          icon: "&#xe627;",
          path: "/fuli"
        },
        {
          id: 3,
          text: "购物车",
          icon: "&#xe625;",
          path: "/cart"
        },
        {
          id: 4,
          text: "我的",
          icon: "&#xe636;",
          path: "/mine"
        }
      ]
    };
  }
};
</script>

        