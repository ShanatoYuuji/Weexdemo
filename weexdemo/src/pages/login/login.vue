<template>
    <div class="wrapper" @click.native="update">
        <img :src="logoUrl" class="logo"/>
        <text class="title">Hello {{target}}</text>
        <text class="desc">Now,let's use weex</text>
        <div style="margin-top:50px">
            <wxc-btn text="update" @wxcButtonClicked="update"></wxc-btn>
        </div>
        <div  v-for="pic in pics"  v-bind:key="pic" class="divpic">
            <image  :src="pic" class="pic"/>
        </div>
    </div>
</template>
<script scoped>
    import WxcBtn from "weex-ui/packages/wxc-button"
    export default {
        components:{
            WxcBtn
        },
        data(){
            return {
               logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
               target:'World',
                pics:[
                    "http://i2.bvimg.com/627877/9d8dba297168e98fs.jpg",
                    "http://i2.bvimg.com/627877/c0e8b3b68107ec1ds.jpg",
                    "http://i2.bvimg.com/627877/210154329d38fa68s.jpg",
                    "http://i2.bvimg.com/627877/1b43f4ea16cb8cc6s.jpg",
                    "http://i2.bvimg.com/627877/f311a9d3033f3bc7s.jpg",
                    "http://i2.bvimg.com/627877/b979f66c7df9910bs.jpg",
                    "http://i2.bvimg.com/627877/000e19bc38f124ces.jpg",
                    "http://i2.bvimg.com/627877/bd3e1cdcf1bf564as.jpg",
                    "http://i2.bvimg.com/627877/8a00412b94b10d3bs.jpg"
                ]
            }
        },
        methods:{
            update(e){
                console.log('触发跳转路由事件')
                this.$router.push({path:'/img1'})
            }
        }
    }   
</script>

<style scoped>
  .wrapper { align-items: center; margin-top: 50px;text-align: center}
  .title { padding-bottom: 40px; font-size: 48px;display: inline-block; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;display: inline-block;}
  .divpic{padding: 10px 10px 10px 10px}
  .pic{width:490px;height:320px}
</style>


