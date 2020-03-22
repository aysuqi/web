<template>
    <div class="container">
        <div class="container-bg">
            <p>welcome to caro <br/>
                <span>凯洛生活技术服务与支持</span>
            </p>
        </div>
        <div class="container-title">
            <div class="container-title-left">
                <h1>TECHNICAL SERVICES</h1>
                <span>技术支持与服务</span>
            </div>
            <div class="container-title-right">
                <span style="font-size:18px;">全国贵宾热线：400-097-0898</span>
            </div>
        </div>
        <div class="service-box" >
            <div class="service-text" v-for="item in serviceList" :key="item">
                <span class="service-title">{{item.title}}</span><br/>
                <span class="sevice-centent">{{item.centent}}</span><br/>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      data(){
          return {
              serviceList: [
                  {
                      title: "移动端APP开发",
                      centent:"Android版本和IOS版本"
                  },
                  {
                      title: "微信小程序开发",
                      centent:"微信服务号，公众号，小程序"
                  },
                  {
                      title: "WEBPC开发",
                      centent: "网站、后台管理系统"
                  },
              ]
          }
      }
  }
</script>

<style scoped>
.container {
    width: 100%;
}
.container-bg {
    width: 100%;
    height: 390px;
    background:url(http://www.carochina.com/upFiles/case/nyprbg.jpg) no-repeat center;
}
.container-bg p {
    width: 72%;
    font-size: 72px;
    line-height: 50px;
    margin: 0 auto;
    text-align: left;
    padding-top: 150px;
    color: rgba(255, 255, 255, 0.7);
}
.container-bg p span {
    width: 72%;
    font-size: 30px;
    text-align: left;
    color: rgba(255, 255, 255, 0.7);
}
.container-title {
    display: flex;
    justify-content: space-between;
    width: 72%;
    height: 80px;
    margin: 0 auto;
    padding: 20px 0px;
    font-size: 28px;
    line-height: 42px;
    text-align: left;
    border-bottom: 1px solid #efefef;
}
.service-box {
    width: 73.5%;
    margin: 0 auto;
    display: flex;
}
.service-box .service-text {
    width: 32%;
    padding-top: 40px;
    padding-bottom: 40px; 
    border: 1px solid #efefef;
    border-radius: 4px;
    text-align: center;
    font-size: 20px;
    color: black;
    margin: 40px 10px 20px 10px;
}
.service-box .service-text .service-title {
    line-height: 40px;
    font-weight: 500;
}
.service-box .service-text .sevice-centent {
    font-size: 14px;
}

</style>