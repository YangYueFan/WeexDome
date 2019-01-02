<template>
  <div class="list">
  <list>
    <header>
      <text class="banner">HEADER</text>
    </header>
    <cell v-for="(name,index) in rows" :key="index">
      <div class="panel">
        <text class="text" @click="pushTo(index)">{{name}}</text>
      </div>
    </cell>
    <header>
      <text class="banner">Nat.js</text>
    </header>
    <cell v-for="(name,index) in natjs" :key="index">
      <div class="panel">
        <text class="text" @click="doNatjs(index)">{{name}}</text>
      </div>
    </cell>
    <header>
      <text class="banner">End</text>
    </header>
    
  </list>
  </div>
</template>


<script>
import Nat from "natjs";
//导入navigator模块
var navigator = weex.requireModule("navigator");
const modal = weex.requireModule("modal");
export default {
  data() {
    const rows = [
      "Scan",
      "UploadImage",
      "Location",
      "WeexUI",
      "WeexVersion",
      "WeexDome",
      "WeexDome2",
      "WebSocket"
    ];
    const natjs = [
      "Communication-Call",
      "Communication-Sms",
      "pick-图片选取",
      "preview-图片预览",
      "Take a photo",
      "captureVideo"
    ];
    return {
      rows,
      natjs,
      myBaseURL: "http://10.11.46.112:8081/dist/Module/"
    };
  },
  methods: {
    pushTo(i) {
      console.log("pushTo");
      let url = this.myBaseURL + this.rows[i] + ".js";
      navigator.push({
        url: url,
        animated: "true"
      });
    },
    doNatjs(i) {
      switch (i) {
        case 0:
          Nat.call("10010", () => {
            console.log("called-10010");
          });
          break;
        case 1:
          Nat.sms(["10086", "10010"], "message goes here", () => {
            console.log("sms popup");
          });
          break;
        case 2:
          Nat.image.pick(
            {
              limit: 3,
              showCamera: false
            },
            (err, ret) => {
              console.log(ret.paths);
              Nat.image.preview(ret.paths, {
                current: 0,
                style: "none"
              });
            }
          );
          break;
        case 3:
          Nat.image.preview(
            [
              "http://g.hiphotos.baidu.com/image/pic/item/adaf2edda3cc7cd9ebe507433401213fb90e915b.jpg",
              "http://e.hiphotos.baidu.com/image/pic/item/a8773912b31bb05114a597be3b7adab44bede0a7.jpg"
            ],
            {
              current: 0,
              style: "dots"
            }
          );
          break;
        case 4:
          // Take a photo;
          Nat.camera.captureImage({}, (err, ret) => {
            console.log("Path: ", ret.path);
          });
          break;
        case 5:
          Nat.camera.captureVideo({}, (err, ret) => {
            console.log(ret.path);
          });
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.scroller {
  width: 700px;
  height: 700px;
  border-width: 3px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  margin-top: 250px;
  margin-left: 25px;
}
.row {
  height: 100px;
  justify-content: center;
  padding-left: 30px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #dddddd;
}
.text {
  font-size: 45px;
  color: rgb(255, 255, 255);
  text-align: center;
}
.list {
  margin-top: 64wx;
  height: 1000px;
}
.banner {
  /* margin-top: 64wx; */
  width: 750px;
  padding: 25px;
  font-size: 60px;
  text-align: center;
  font-weight: bold;
  color: #cc5588;
  background-color: rgb(162, 217, 192);
}
.panel {
  width: 750px;
  height: 100px;
  /* margin-left: 75px; */
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  background-color: rgba(70, 163, 210, 0.557);
}
</style>