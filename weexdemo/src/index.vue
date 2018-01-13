<template>
  <div id="root" style="background-color: antiquewhite" >
    <div class="topic">
      <text>1213</text>
      <text>1213</text>
      <text>1213</text>
      <text>1213</text>
      <text>1213</text>
    </div>
  <div class="wrapper" >
    <div  v-for="pic in pics"  v-bind:key="pic" class="divpic">
        <image  :src="pic" class="pic"/>
    </div>
  </div>
  <router-view></router-view>
  </div>
</template>

<style scoped>
  .topic{display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-between}
  .wrapper { align-items: center; margin-top: 120px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;}
  .divpic{width:720px;height:540px;padding: 10px 10px 10px 10px}
  .pic{width:100%;height:100%}
</style>

<script>
  export default {
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      pics:[
        "https://i.pximg.net/img-original/img/2018/01/06/15/31/10/66670348_p0.jpg",
        "https://i.pximg.net/img-original/img/2017/12/24/03/49/50/66418392_p0.png",
        "https://i.pximg.net/img-original/img/2017/12/24/00/05/36/66414575_p0.jpg"
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