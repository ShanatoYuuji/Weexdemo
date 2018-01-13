<template>
    <div class="wrapper" @click.native="update">
        <img :src="logoUrl" class="logo"/>
        <text class="title">Hello {{target}}</text>
        <text class="desc">Now,let's use weex</text>
        <div style="margin-top:50px">
            <wxc-btn text="update" @wxcButtonClicked="update"></wxc-btn>
        </div>
    </div>
</template>
<script>
    import WxcBtn from "weex-ui/packages/wxc-button"
    export default {
        components:{
            WxcBtn
        },
        data(){
            return {
               logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
               target:'World'
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

<style>
  .wrapper { align-items: center; margin-top: 50px;text-align: center}
  .title { padding-bottom: 40px; font-size: 48px;display: inline-block; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;display: inline-block;}
</style>


