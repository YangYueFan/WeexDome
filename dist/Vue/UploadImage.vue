<template>
    <div class="wrapper">
        <image :src="logo" class="logo" resize='contain' @click="uploadImage" />
        <text class="greeting" @click="uploadImage">上传图片</text>
  </div>
</template>

<script>
    var cameraAlertModule = weex.requireModule('CameraAlert_Module')
    export default {
        data () {
            return { 
                logo : 'https://cdn.onlinewebfonts.com/svg/img_141257.png' ,
            }
        },
        methods:{
            uploadImage(e){
                cameraAlertModule.cameraAlertSheet(res=>{
                    this.logo = res['path']
                    console.log(res['path']);
                })
            }
        }
        
    }
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 500px;
    height: 500px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
