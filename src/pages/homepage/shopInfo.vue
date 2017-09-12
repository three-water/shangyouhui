<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <img class="title-img" src="../../../static/images/infoIcons/iconA.png" alt="" @click="goback()">
        <h1>商家详情</h1>
      </div>
      <!-- 轮播图 -->
      <div class="photos">
        <mt-swipe @change="changePhotos">
          <mt-swipe-item v-for="(item,index) in items" :key="index">
            <img class="shopimg" :src="item.imgurl" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 具体介绍 -->
      <div class="intro">
        <div class="intro-value">
          <h2>濠西园牛排</h2>
          <span>人均188元</span>
          <p>鲜嫩牛肉 味美口感棒</p>
        </div>
        <div class="addresscall">
          <div class="address-value">
            <img src="../../../static/images/infoIcons/iconB.png" alt="">
            <p>临江区金星路黄金海岸广场美食广场一街区106室</p>
          </div>
          <div class="call">
            <a href="tel:17384466421">
              <img src="../../../static/images/infoIcons/call.png" alt="">
              <p>电话</p>
            </a>
          </div>
        </div>
        <!-- 分隔 -->
        <div class="partition"></div>
        <!-- 卡片 -->
        <div class="card-content">
          <div class="card-value">
            <h2>卡片使用说明</h2>
            <p>使用卡片背面的优惠券，到店消费即可获得满减优惠！支持折上折哦！</p>
          </div>
          <ul>
            <li class="card-image" v-for="(tip,value) in cards" :key="value">
              <img :src="tip.cardurl" alt="">
            </li>
          </ul>
          <div class="partition" style="clear:both"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          active: 'img-active',
          spanactive: 'span-active',
          imgurl: '../../../static/images/infoIcons/niupai1.png'
        },
        {
          imgurl: '../../../static/images/infoIcons/niupai2.png'
        },
        {
          imgurl: '../../../static/images/infoIcons/niupai3.png'
        },
        {
          imgurl: '../../../static/images/infoIcons/niupai4.png'
        },
        {
          imgurl: '../../../static/images/infoIcons/niupai5.png'
        }
      ],
      cards: [
        {
          cardurl: '../../../static/images/cardIcons/card1.png'
        },
        {
          cardurl: '../../../static/images/cardIcons/card2.png'
        },
        {
          cardurl: '../../../static/images/cardIcons/card3.png'
        },
        {
          cardurl: '../../../static/images/cardIcons/card4.png'
        }
      ],
      activeIndex: 0,
      timer: undefined
    }
  },
  methods: {
    changePhotos (index) {
    },
    goback () {
      this.$router.back()
    }
  },
  mounted () {
    this.changePhotos()
  }
}
</script>
<style>
.card-value > h2 {
  font-weight: normal;
}
.container {
  text-align: center;
  width: 100%;
}
.content {
  max-width: 750px;
  margin: 0 auto;
}
.title {
  height: 44px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #E5E5E5;
}
.title-img {
  position: absolute;
  left: 11px;
  top: 14px;
  width: 9px;
}
.title > h1 {
  font-weight: normal;
  display: inline;
  font-size: 18px;
  line-height: 18px;
  position: relative;
  top: 13px;
}
.photos {
  height: 188px;
}
.shopimg {
  width: 100%;
  height: 188px;
}
.mint-swipe-indicator {
  opacity: 0.7;
  background: #FFF;
}
.mint-swipe-indicator.is-active {
  background: #F33D66;
}
/* 具体介绍 */
.intro-value {
  height: 70px;
  margin: 0 15px 0 15px;
  border-bottom: #E5E5E5 1px solid;
  position: relative;
}
.intro-value > h2 {
  display: inline-block;
  font-size: 18px;
  line-height: 20px;
  position: absolute;
  left: 0;
  top: 15px;
}
.intro-value > span {
  font-size: 14px;
  color: #DB3C3C;
  line-height: 16px;
  position: absolute;
  right: 0;
  top: 15px;
}
.intro-value > p {
  font-size: 14px;
  line-height: 16px;
  color: #757575;
  position: absolute;
  top: 40px;
}
.addresscall {
  height: 60px;
  display: flex;
  justify-content:space-between;
}
.address-value{
  position: relative;
}
.address-value img {
  position: absolute;
  left: 15px;
  top: 22px;
  display: inline-block;
  width: 12px;
}
.address-value p {
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  margin-left: 37px;
  margin-top: 10px;
  margin-right: 23px;
  padding-right: 16px;
  border-right: solid 1px #E5E5E5;
}
.call img {
  height: 24px;
  position: relative;
  right: 21px;
  top: 9px;
}
.call p {
  font-size: 12px;
  display: inline-block;
  position: relative;
  top: 5px;
  right: 20px;
  color: #333;
}
/* 分隔 */
.partition {
  background: #f4f4f4;
  height: 10px;
}
/* 卡片说明部分 */
.card-value {
  text-align: left;
}
.card-value h2 {
  font-size: 16px;
  line-height: 18px;
  margin: 15px 0 4px 15px;
}
.card-value p {
  font-size: 12px;
  line-height: 18px;
  color: #999;
  margin: 0 15px 20px 15px;
}

.card-image {
  width: 50%;
  float: left;
}
.card-image img {
  width: 140px;
  margin-bottom: 15px; 
}
</style>

