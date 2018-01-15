<template>
    <div class="wrapper" @click.native="update">
        <img :src="logoUrl" class="logo"/>
        <text class="title">pictures</text>
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
                    "http://i2.bvimg.com/627877/ce370c8b3c8189be.jpg",
                    "http://i1.bvimg.com/627877/b96a19f08786e974.png",
                    "http://i2.bvimg.com/627877/a9aeca5dc7235606.jpg"
                ]
            }
        },
        methods:{
            update(e){
                console.log('触发跳转路由事件')
                this.$router.push({path:'/'})
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
  .pic{width:490px;height:540px}
</style>


