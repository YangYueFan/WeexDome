<template>
  <div class="wrapper">
    <image class="gif" src="https://gw.alicdn.com/tfs/TB1MRzvdwMPMeJjy1XdXXasrXXa-400-300.gif"></image>
    <text class="tips">是否支持 GIF 取决于 App 内置的图片库</text>
    <text class="tips">并不是由 Weex SDK 实现的</text>
  </div>
</template>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
  background-color: #e5dacd;
}
.tips {
  color: #f38383;
  font-size: 36px;
  margin-top: 20px;
}
.gif {
  width: 400px;
  height: 300px;
}
</style>