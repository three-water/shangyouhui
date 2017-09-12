<template>
  <div class="container">
    <div class="content">
      <div class="top" @click="goback()">
        <img class="top-img" src="../../../static/images/areaIcons/iconA.png" alt="">
        <h1>选择商圈</h1>
      </div>
      <div class="input-area">
        <mt-search
          cancel-text="取消"
          placeholder="搜索城市名"
          >
        </mt-search>
      </div>
      <div class="shops">
        <div class="address-name">
          <ul>
            <li class="name-list" :class="index === activeIndex ? 'light' : ''" v-for="(item,index) in addnames" :key="index" @click="showDetails(index,item)">{{item.name}}</li>
          </ul>
        </div>
        <div class="address-shop">
          <!-- <ul>
            <li class="shop-list" v-for="(tip,index) in shoplists" :key="index">
              <div> -->
                <ul>
                  <li v-for="(area,number) in values" :key="number">
                    <div class="shop-name">
                      <img :src="area.imgurl" alt="">
                      <p>{{area.intro}}</p>
                    </div> 
                  </li>
                </ul>
              <!-- </div>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      addnames: [
        {
          name: '淮北'
        },
        {
          name: '安庆'
        },
        {
          name: '池州'
        },
        {
          name: '合肥'
        },
        {
          name: '芜湖'
        },
        {
          name: '六安'
        },
        {
          name: '淮南'
        }
      ],
      shoplists: [],
      values: [
        {
          imgurl: '../../../static/images/areaIcons/area1.png',
          intro: '大润发'
        },
        {
          imgurl: '../../../static/images/areaIcons/area2.png',
          intro: '远东国际'
        },
        {
          imgurl: '../../../static/images/areaIcons/area3.png',
          intro: '洪山广场'
        }
      ],
      activeIndex: ''
    }
  },
  methods: {
    goback () {
      this.$router.back()
    },
    showDetails (index, item) {
      this.activeIndex = index
      console.log(item.name)
      sessionStorage.setItem('key', item.name)
    },
    menu () {
      window.scrollTo(0, 0)
    }
  },
  created () {
    this.menu()
  }
}
</script>

<style>
.container {
  text-align: center;
  width: 100%;
}
.content {
  max-width: 750px;
  margin: 0 auto;
}
.top {
  height: 44px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #E5E5E5;
}
.top-img {
  position: absolute;
  left: 11px;
  top: 15px;
  width: 15px;
}
.top > h1 {
  font-weight: normal;
  display: inline;
  font-size: 18px;
  line-height: 18px;
  position: relative;
  top: 13px;
}
.input-area {
  height: 44px;
  background: #EFEFF4;
  box-shadow: inset 0 -1px 0 0 #DBDADF;
}
.mint-searchbar-inner {
  height: 20px;
}
.mint-searchbar a{
  display: none;
}
.shops {
  display: flex;
  justify-content: space-around;
  height: 100vh;
}
.address-name {
  width: 32%;
  box-shadow: inset -1px 0 0 0 #DFDFDF;
}
.name-list {
  height: 32px;
  text-align: left;
  padding-left: 12px;
  font-size: 14px;
  color: #333;
  letter-spacing: 1px;
  padding-top: 14px;
  box-shadow: inset -1px 0 0 0 #DFDFDF, inset 0 -1px 0 0 #DFDFDF;
}
.light {
  height: 32px;
  text-align: left;
  padding-left: 12px;
  font-size: 14px;
  letter-spacing: 1px;
  padding-top: 14px;
  box-shadow: inset -1px 0 0 0 #DFDFDF, inset 0 -1px 0 0 #DFDFDF;
  background: #F6F5F5;
  color: #F05C5C;
}
.address-shop {
  width: 68%;
  background: #EFEFF4;
}
.shop-name {
  height: 130px;
  margin: 10px;
  background: #fff;
  padding-top: 5px;
}
.shop-name > img {
  height: 90px;
}
.shop-name > p{
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 1px;
  position: relative;
  top: 10px;
}
</style>
