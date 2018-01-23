<template>
  <div id="root">
  <!-- <scroller  style="background-color: antiquewhite;" class="scrroot" >
    <div class="topic">
      <text>1213</text>
      <text>1213</text>
      <text>1213</text>
      <text>1213</text>
      <text>1213</text>
    </div>
  <router-view></router-view>
   </scroller> -->
  <!-- <div class="nav">
        <div  class="link">
        <text class="title" @click.native="changepage(0)" :style="{color:page === 0?'#00BBE4':'gray'}">首页</text>
        </div>
        <div  class="link">
        <text class="title"  @click.native="updateimg" :style="{color:page === 1?'#00BBE4':'gray'}">分类</text>
        </div>
        <div class="link">
        <text class="title"  @click.native="updatehome" :style="{color:page === 2?'#00BBE4':'gray'}">我的</text>
        </div>
  </div> -->
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               :tab-page-height="tabPageHeight"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle"><text>首页</text></div>

    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle">
      <scroller  style="background-color: antiquewhite;" class="scrroot" >
      <div class="topic">
        <text>1213</text>
        <text>1213</text>
        <text>1213</text>
        <text>1213</text>
        <text>1213</text>
      </div>
        <router-view></router-view>
    </scroller>
      </div>

    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle"><text>消息中心</text></div>

    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
  </wxc-tab-bar>
</div>
 
</template>

<style>
  .scrroot{
    /* height: 1100px; */
    width: 750px;
  }
  .topic{display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-between}
  .nav {
      display: flex;
      /* position: absolute; */
      margin-top: 10px;
      /* bottom: 1px; */
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      height: 100px;
      background-color:black
  }
  .link {
    width: 162.5px;
    flex-shrink: 1;
    text-align: center;
    margin:0 auto;
    padding: 3px;
    align-items: center;
  }
  .title {
    font-size: 60px;
    line-height: 65px;
    text-align: center;
    top: 5px;
  }
  .logo {
    position: relative;
    width: 45px;
    height: 45px;
  }

  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }

</style>

<script >

   import { WxcTabBar, Utils } from 'weex-ui';
   import Config from './config'
   
  export default {
    components: { WxcTabBar },
    data: {
      page:0,
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      pics:[
        "http://i2.bvimg.com/627877/ce370c8b3c8189be.jpg",
        "http://i1.bvimg.com/627877/b96a19f08786e974.png",
        "http://i2.bvimg.com/627877/a9aeca5dc7235606.jpg"
      ],
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    },
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      changepage(page){
        this.page=page
      },
      updateimg(e){
          console.log('触发跳转路由事件')
          this.$router.push({path:'/img1'})
      },
      updatehome(e){
          console.log('触发跳转路由事件')
          this.$router.push({path:'/'})
      },
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      }
    }
  }
</script>