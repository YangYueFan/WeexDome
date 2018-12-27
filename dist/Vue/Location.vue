<template >
    <div style="justify-content:center">
        <text class="button" @click="locationAction()">定位</text>
        <text class="label">{{locationText}}</text>
    </div>
</template>

<script>
    var locationModule = weex.requireModule('Location_Module')
    export default {
        data (){
            return { locationText:'未获取定位信息' }
        },
        methods:{
            locationAction(){
                locationModule.startLocation(res=>{
                    this.locationText = res
                })
            }
        }
    } 
</script>
<style>
    .button {
    color: #666;
    text-align: center;
    font-size: 60px;
  }
  .label {
    color: #41B883;
    /* text-align: center; */
    font-size: 40px;
    margin-top: 80px;
    margin-bottom: 100px;
  }
</style>