<template>
  <div class="wrapper">
    <text class="button" @click="scanCode">Scan QR Code</text>
    <text class="button" @click="push">{{scan_code_text}}</text>
  </div>
</template>


<script>
    var navigator =  weex.requireModule('navigator');
    var scanModule = weex.requireModule('Scan_Module')
    var webModule = weex.requireModule('WebPage_Module')
    export default {
      data () {
        return { scan_code_text: 'no data' }
      },
      methods:{
        scanCode(event){
          scanModule.scanCode(res=>{
            let str =  res['info']
            console.log('res:' + str);
            this.scan_code_text = str
            if (str.indexOf('http') >= 0) {
              if (str.indexOf('.js')>=0 || str.indexOf('.wx')>=0) {
                navigator.push({
                  url:str,
                  animated:"true"
                })
              }else{
                console.log('indexOf:' + str);
                webModule.goWebPage(str)
              } 
            }
          })
        }
      }
    }
</script>

<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .button {
    font-size: 60px;
    width: 500px;
    text-align: center;
    margin-bottom: 80px;
    margin-left: 125px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-width: 2px;
    border-style: solid;
    color: rgb(65, 184, 131);
    border-color: rgb(65, 184, 131);
    background-color: rgba(65, 184, 131, 0.2);
  }
</style>