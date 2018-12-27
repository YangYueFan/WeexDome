<template>
  <div>
     <scroller ref="scrollerHead" 
     class="tab-cell" scroll-direction="horizontal">
       <div class="head-tabs">
           <div class="tab" v-for="(tab, t) in tabs" :key="t" :ref="'item' + t">
                <image class="tab-icon" :src="tab.icon"></image>
                <text class="tab-title">{{tab.title}}</text>
           </div>
           <div class="divider-select" v-bind:style="dividerStyle">
              <div class="select-line"></div>
           </div>
       </div>
    </scroller>
    <slider class="slider" interval="3000" 
    auto-play="false"
    @scroll="onsliderscroll" 
    @change="onsliderchange"
    offsetXAccuracy="0.001">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
  </div>
</template>

<style scoped>
  .image {
    width: 720px;
    height: 720px;
  }
  .slider {
    margin-top: 25px;
    width: 750px;
    height: 700px;
  }
  .frame {
    padding-left:15px;
    padding-right:15px;
    width: 750px;
    height: 700px;
    position: relative;
  }
  
  .divider-select{
      width:150px;
      position:absolute;
      left:0px;
      bottom:0px;
      transition-property:transform;
  }
  .select-line{
      height:8px;
      background-color: yellow;
  }
  
  .tab-cell {
    flex-direction: row;
    justify-content: stretch;
    background-color: #f51438;
    height: 120px;
    max-height:120px;
  }
  
  .head-tabs{
    flex-direction: row;
    position:relative;
  }
  
  .tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  .tab-icon {
    width: 45px;
    height: 45px;
  }
  .tab-title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }
  
</style>

<script>
  const dom = weex.requireModule('dom')
  var index =0;
  var offset =0;
  export default {
    data () {
      return {
        dividerStyle:{
          transform : "",
        },
        tabs: [
          { title: '首页', icon: 'https://gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png' },
          { title: '耍帅', icon: 'https://gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png' },
          { title: '旅行', icon: 'https://gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png' },
          { title: '潮玩', icon: 'https://img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png' },
          { title: '穿搭', icon: 'https://gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png' },
          { title: '穿搭', icon: 'https://gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png' },
          { title: '穿搭', icon: 'https://gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png' },
          { title: '穿搭', icon: 'https://gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png' },
        ],
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://img.alicdn.com/tfscom/i1/0/TB28OZ9oZnI8KJjSsziXXb8QpXa_!!3470683347-0-dgshop.jpg'},
          { src: 'https://img.alicdn.com/tfscom/i1/0/TB2xKpjpf6H8KJjSspmXXb2WXXa_!!3138112227-0-dgshop.jpg'},
          { src: 'https://img.alicdn.com/bao/uploaded/i3/2382603663/TB13CXCc22H8KJjy1zkXXXr7pXa_!!0-item_pic.jpg'},
          { src: 'https://img.alicdn.com/bao/uploaded/i1/2934698300/TB14QZakJfJ8KJjy0FeXXXKEXXa_!!0-item_pic.jpg'},
          { src: 'http://gw.alicdn.com/tfscom/i3/0/TB2iBu_ePgy_uJjSZKbXXXXkXXa_!!0-dgshop.jpg_600x600q50s150.jpg'},
         
          
        ]
      }
    },
     methods: {
       onsliderchange : function(event){
           index = event.index;
           var el = this.$refs['item' + index][0];
           dom.scrollToElement(el, {});
           console.log("scrollToElement" + el);
       },
       onsliderscroll : function(event){
          offset = event.offsetXRatio;
          console.log("onsliderscroll " + offset);
          this.updateDivider();
       },
       updateDivider :function(){
         var translateX = 150*index - offset*150;
         this.dividerStyle.transform = "translateX(" + translateX +"px)";
       },
     }
  }
</script>