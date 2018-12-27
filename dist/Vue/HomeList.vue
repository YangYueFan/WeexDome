<template>
  <list>
    <header>
      <text class="banner">HEADER</text>
    </header>
    <cell v-for="(name,index) in rows" :key="index">
      <div class="panel">
        <text class="text" @click="pushTo(index)">{{name}}</text>
      </div>
    </cell>
  </list>
</template>


<script>
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
      "WeexDome2"
    ];
    return {
      rows,
      myBaseURL: "http://10.11.46.112:8081/dist/Module/"
    };
  },
  methods: {
    pushTo(i) {
      let url = this.myBaseURL + this.rows[i] + ".js";
      navigator.push({
        url: url,
        animated: "true"
      });
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
.banner {
  margin-top: 64wx;
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