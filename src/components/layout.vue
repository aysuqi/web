<template>
    <div>
        <div class="app-head">
            <div class="app-head-inner">
                <router-link :to="{path:'/'}" class="head-logo" >
                    <img src="../assets/logo.png">
                </router-link>
                <div class="head-nav">
                    <ul class="nav-list">
                        <li>
                            <router-link :to="{path:'/download'}">手机端</router-link>
                        </li>
                        <li class="nav-pile"> | </li>
                        <li>
                            <a href="http://120.25.200.96:70">PC商户端</a>
                        </li>
                        <li class="nav-pile"> | </li>
                        <li>
                            <router-link :to="{path:'/merchant'}">联盟门店</router-link>
                        </li>
                        <li class="nav-pile"> | </li>
                        <li>
                            <router-link :to="{path:'/product'}">凯洛产品城</router-link>
                        </li>
                        <li class="nav-pile"> | </li>
                        <li>
                            <router-link :to="{path:'/service'}">技术支持与服务</router-link>
                        </li>
                        <li class="nav-pile"> | </li>
                        <li>
                            <router-link :to="{path:'/about'}">关于我们</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="app-content">
            <keep-alive>
                <router-view /> 
            </keep-alive>
        </div>
        <div class="app-footer"> 
            <div class="footer-content">
                <div class="footer-content-text">
                    <span>快速送达</span>
                    <p>1.5公里范围快速送达</p>
                </div>
                <div class="footer-content-text">
                    <span>优选商品，物美价廉</span>
                    <p>凯洛生活提供物美价廉的商品以及安全周到的产品源</p>
                </div >
                <div class="footer-content-text">
                    <span>精选、严选、专选，只为品质出众</span>
                    <p>专属团队商家，货源双检查，100%正品保证</p>
                </div>
            </div>
            Copyright ©2020 凯洛生活科技股份有限公司
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
html,body,div,span,applet,object,iframe,
h1,h2,h3,h4,h5,h6,p,blockquote,pre,
a,abbr,address,big,cite,code,
del,dfn,em,img,ins,kbd,q,s,samp,
small,strong,strike,sub,tt,var,
b,u,i,center,
dl,dt,dd,ol,ul,li,
fieldset,form,label,legend,
table,caption,tbody,tfoot,thead,tr,th,td,
article,aside,canvas,details,embed,
figure,figcaption,footer,header,hgroup,
menu,nav,output,ruby,section,summary,
time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
}
article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display: block;
}
body {
    line-height: 1;
}
ol,ul {
    list-style: none;
}
blockquote,q {
    quotes: none;
}
blockquote::before,blockquote::after,
q::before,q::after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
a {
    color: inherit;
    text-decoration: none;
}
body {
    /* background: #f0f2f5; */
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3",
    "Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
}

.app-head {
    /* background: #1d1d1f; */
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    color: #fff;
    width: 100%;
    height: 90px;
    line-height: 90px;
    min-width: 1200px;
}
.app-head .router-link:active {
    color: #bd8837;
}
.app-head-inner {
    width: 72%;
    margin: 0 auto;
}
.head-logo {
    float: left;
}
.app-head-inner img {
    width: 50px;
    height: 50px;
    margin-top: 20px;
}
.head-nav {
    float: right;
}
.head-nav ul {
    overflow: hidden;
}
.head-nav li {
    cursor: pointer;
    float: left;
}
.head-nav li a:hover {
    color: #bd8837;
}
.head-nav li .router-link-active {
    color: #bd8837;
}
.nav-pile {
    padding: 0 10px;
}
.app-footer {
    text-align: center;
    height: 210px;
    width: 100%;
    background: #fff;
    clear: both;
}
.footer-content {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    padding-top: 20px;
}
.footer-content .footer-content-text span {
    font-size: 16px;
    font-weight: 500;
}
.footer-content .footer-content-text p {
    margin-top: 10px;
    font-size: 10px;
}
.footer-content-text {
    width: 21%;
    background: #f2f2f2;
    padding: 40px 20px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 6px;
}
.app-content {
    margin: 0 auto;
    width: 100%;
}
</style>