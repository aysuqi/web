<template>
    <div class="container">
        <div class="container-bg">
            <p>welcome to caro <br/>
                <span>精致生活，一触即到!</span>
            </p>
        </div>
        <div class="container-title">
            <div class="container-title-left">
                <h1>CONTACT US</h1>
                <span>联系我们</span>
            </div>
            <div class="container-title-right">
                <span style="font-size:18px;">全国贵宾热线：400-097-0898</span>
            </div>
        </div>
        <!-- <div class="container-x"></div> -->
        <div class="container-text">
            <span>总部地址：福建省福州市晋安区晋连路20号世欧广场公主塔3906</span><br/>
            <span>邮编：350001</span><br/>
            <span>总机：0591-88011307</span><br/>
            <span>传真：0591-88011339</span><br/>
            <span>邮箱：carobeau@siyuwine.com</span><br/>
        </div>
        <div class="container-x2"></div>
    </div>
</template>

<script>
  export default {
      data(){
          return {
              
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
    background:url(http://www.carochina.com/upFiles/case/nycontbg.jpg) no-repeat center;
    
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
/* .container-x {
    width: 72%;
    margin: 0 auto;
    padding-top: 80px;
    border-bottom: 1px solid #efefef;
} */
.container-x2 {
    width: 72%;
    margin: 0 auto;
    padding-top: 20px;
    border-bottom: 1px solid #efefef;
}
.container-text {
    width: 72%;
    margin: 0 auto;
    padding: 40px 0px;
    font-size: 16px;
    text-align: left;
    line-height: 22px;
}
</style>