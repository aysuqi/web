/* eslint-disable vue/require-v-for-key */
<template>
    <div class="content">
        <div class="container-bg"></div>
        <div class="content-merchants">
            <ul v-for="item in list" :key="item">
                <li>
                    <img :src="item.pic">
                    <div class="merchants-box">
                        <h1>{{item.name}}</h1>
                        <span>评分：{{item.score}}</span>
                        <p>联系方式：{{item.phone}}</p>
                        <p>地址：{{item.address}}</p>
                    </div>
                    <div class="merchants-vip">
                        <span>{{item.vip}}</span>
                    </div>
                </li>
                <li>
                    <div class="content-x"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
      data(){
          return {
              list: [
                {pic:"http://imgs.carowine.net/upload/1904/24135948007263_b.jpeg",name:"凯洛酒庄(王庄店)",score:"5分",phone:"13960901058",address:"福建省福州市晋安区世欧王庄公主塔",vip:"vip8"},
                {pic:"http://imgs.carowine.net/upload/1904/25142239189361_b.jpeg",name:"秦淮酒庄",score:"5分",phone:"13960901058",address:"福建省福州市晋安区世欧王庄公主塔3906",vip:"vip8"},
                {pic:"http://imgs.carowine.net/upload/1907/05112046830738_b.jpeg",name:"全都有酒业",score:"5分",phone:"18859193383",address:"福建省福州市台江区洋中街道洋中路东侧融信洋中城地块十二3#楼18层13商务办公",vip:"vip8"},
                {pic:"http://imgs.carowine.net/upload/1906/05105053423218_b.jpeg",name:"林家铺子",score:"5分",phone:"15880012069",address:"福建省福州市晋安区新店镇秀山路287号",vip:"vip8"},
                {pic:"http://imgs.carowine.net/upload/1902/22100234021334_b.png",name:"登云一号酒庄",score:"5分",phone:"18650373199",address:"福建省福州市鼓楼区福建省福州市晋安区登云路88号登云一号文创园",vip:"vip8"},
            ],
          }
      },
  }
</script>

<style>
.content {
    width: 100%;
}
.container-bg {
    width: 100%;
    height: 600px;
    background:url(http://www.carochina.com/upFiles/case/201812171338497356.jpg) no-repeat center;
}
.content-merchants {
    width: 72%;
    margin: 0 auto;
}
.content-merchants li {
    text-align: left;
    padding-top: 40px;
}
.content-merchants img {
    float: left;
    width: 70px;
    height: 70px;
    background-color: #efefef;
    border-radius: 35px; 
    margin-right: 20px;
}
.content-merchants .merchants-box {
    float: left;
}
.content-merchants .merchants-box h1 {
    font-size: 16px;
    padding-bottom: 10px;
}
.content-merchants .merchants-box p {
    padding-top: 5px;
}
.content-x {
    border-bottom: 1px solid #efefef;
    margin-top: 60px;
}
.content-merchants .merchants-vip {
    float: right;
    width: 40px;
    height: 25px;
    border-radius: 25px;
    background-color:tan;
    text-align: center;
    line-height: 25px;
    color: #fff;
    font-size: 12px;
}
</style>