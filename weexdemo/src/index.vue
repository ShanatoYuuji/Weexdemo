<template>
  <scroller id="root" style="background-color: antiquewhite" >
    <div class="topic">
      <text>1213</text>
      <text>1213</text>
      <text>1213</text>
      <text>1213</text>
      <text>1213</text>
    </div>
  <router-view></router-view>
  <!-- <div class="wrapper" >
    <div  v-for="pic in pics"  v-bind:key="pic" class="divpic">
        <image  :src="pic" class="pic"/>
    </div>
  </div> -->
  </scroller>
</template>

<style scoped>
  .topic{display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-between}
  .wrapper { align-items: center; margin-top: 120px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;}
  .divpic{padding: 10px 10px 10px 10px}
  .pic{width:620px;height:540px}
</style>

<script>
  export default {
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      pics:[
        "http://i2.bvimg.com/627877/ce370c8b3c8189be.jpg",
        "http://i1.bvimg.com/627877/b96a19f08786e974.png",
        "http://i2.bvimg.com/627877/a9aeca5dc7235606.jpg"
      ]
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>