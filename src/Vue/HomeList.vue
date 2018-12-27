<template>
  <list>
    <header>
      <text class="banner">HEADER</text>
    </header>
    <cell v-for="index in rows" :key="index">
      <div class="panel">
        <text class="text">{{name}}</text>
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
  color: #666666;
}
.banner {
  width: 750px;
  padding: 25px;
  font-size: 60px;
  text-align: center;
  font-weight: bold;
  color: #41b883;
  background-color: rgb(162, 217, 192);
}
.panel {
  width: 600px;
  height: 300px;
  margin-left: 75px;
  margin-top: 35px;
  margin-bottom: 35px;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
</style>