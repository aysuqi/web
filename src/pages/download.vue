<template>
    <div class="content">
        <div class="content-box">
            <div class="content-left">
                <div class="content-list" >
                    <img src="../assets/客户.png" >
                    <h2>微信“扫一扫”下载体验凯洛生活APP</h2>
                </div>
                <div class="content-list">
                    <img src="../assets/公众号.png" >
                    <h2>关注凯洛生活公众号体验凯洛生活小程序</h2>
                </div>
            </div>
            <div class="content-right">
                <div class="phone">
                    <img src="../assets/首页.png">
                </div>
            </div>
        </div>
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
.content {
    width: 100%;
    height: 740px;
    background:url(../assets/down.jpg);
}

.content-box {
    width: 72%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.content-left {
    width: 30%;
    display: flex;
}
.content-left .content-list {
    margin-top: 120px;
    text-align: left;
    font-size: 18px; 
    color: #000;
    margin-right: 100px;
}
.content-left .content-list h2 {
    margin-top: 15px;
}
.content-list img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
    border-radius: 6px;
    background-color: #f2f2f2;
    box-shadow: rgba(48, 48, 48, 0.815) 0px 0px 22px -1px;
}
.content-right {
    margin-top: 80px;
}
.content-right .phone {
    height: 533px;
    width: 300px;
    border: 4px solid rgb(0, 0, 0);
    border-radius: 5px;
    margin: 40px 40px;
    box-shadow: rgba(48, 48, 48, 0.815) 0px 0px 22px -1px;
}
.content-right img {
    height: 533px;
    width: 300px;
    background-color: #f2f2f2;
}
</style>