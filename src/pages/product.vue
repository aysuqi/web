<template>
    <div class="container">
        <div class="container-bg"></div>
        <div class="container-product" v-for="product in productList" :key="product">
            <div class="product-all">
                <span>{{product.country}}</span>
                <span @click="productAll" style="margin-right:20px; font-size:14px;">{{product.all}}</span>
            </div>
            <div class="product-list">
                <img class="pic" :src="product.pic" style="width: 477px;height: 424px;border-radius:4px;">
                <div class="product-box">
                    <img v-for="item in product.img" :key="item" :src="item.imgurl" @click="productPages" style="width: 229px;height: 210px;border-radius:4px;margin-right:5px;border:1px solid #efefef;">
                </div>
            </div>
            <div class="product-x"></div>
        </div>
    </div>
</template>

<script>
  export default {
      data(){
          return {
              productList:[
                  {
                      pic:"http://www.carochina.com/upFiles/case/201805081443532849.jpg",
                      img: [
                          {imgurl:"http://www.carochina.com/upFiles/case/201712021449113736.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201803101728442646.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201803141415314108.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201712041123579093.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201712051343132451.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201812171351431184.jpg"},
                      ],
                      country:"🇫🇷  法国",
                      all: "更多 >>"
                  },
                  {
                      pic:"http://www.carochina.com/upFiles/case/201712021541041150.jpg",
                      img: [
                          {imgurl:"http://www.carochina.com/upFiles/case/201712021604373425.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201712021456445793.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201712060954563692.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201809191114092137.jpg"},
                      ],
                      country:"🇪🇸  西班牙",
                      all: "更多 >>"
                  },
                  {
                      pic:"http://www.carochina.com/upFiles/case/201712021545379867.jpg",
                      img: [
                          {imgurl:"http://www.carochina.com/upFiles/case/201712041050142613.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201712041052046270.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201712041051067345.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201712041049079043.jpg"},
                      ],
                      country:"🇨🇱  智利",
                      all: "更多 >>"
                  },
                  {
                      pic:"http://www.carochina.com/upFiles/case/201712021544486128.jpg",
                      img: [
                          {imgurl:"http://www.carochina.com/upFiles/case/201712041047433852.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201807191455037686.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201809191110111189.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201712041045111603.jpg"},
                          {imgurl:"http://www.carochina.com/upFiles/case/201809191114092137.jpg"},
                      ],
                      country:"🇦🇺  澳洲",
                      all: "更多 >>"
                  },
              ]
          }
      },
      methods: {
          productPages(e) {
              console.log(e.currentTarget.dataset)
              this.$router.push({path:'/'})
              
          },
          productAll(e) {
              console.log(e.currentTarget.dataset)
              this.$router.push({path:'/'})
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
    height: 780px;
    background:url(http://www.carochina.com/upFiles/case/201712041052192510.jpg) no-repeat center;
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
.product-list {
    width: 72%;
    height: 100%;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
}
/* .product-list .pic {
    width: 477px;
    height: 423px;
} */
.product-list .product-box img:hover {
    background-color: rgba(0,0,0,0.5);
    width: 244px;
    height: 21opx;
}
.product-list .product-box {
    text-align: left;
    margin-left:10px;
}
/* .product-list .product-box img {
    width: 244px;
    height: 210px;
} */
.product-all {
    width: 72%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    margin-top: 40px;
    font-size: 24px;
}
.product-x {
    width: 72%;
    margin: 0 auto;
    border-bottom: 1px solid #efefef; 
    padding-top: 40px; 
}
</style>