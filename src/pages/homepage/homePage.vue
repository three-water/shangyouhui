<template>
  <div class="container">
    <div class="content">
      <!-- header部分 -->
      <div class="header">
        <div class="address" @click="getaddress()">
          <span id="area">{{markCircle}}</span>
          <img class="add-img" src="../../../static/images/triangle.png" alt="">
        </div>
        <p>商友汇</p>
      </div>
      <!-- 分类 -->
      <div class="sort">
        <ul class="sort-list">
          <li v-for="(item,index) in sorts" :key="index">
            <div class="sort-name" @click="goingto(index)">
              <img :src="item.sortIcon" alt="">
              <p>{{item.sortName}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 小列表 -->
      <div class="sm-sort hidden">
        <ul class="tip-list">
          <li v-for="(tip,value) in smsorts" :key="value">
            <div :id="'tip-list'+value" class="tip-content" @click="goingto(value)">
              <p>{{tip.name}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 列表内容 -->
      <div aclass="list-content">
        <ul>
          <li :id="'list-content'+index" class="content-value" :class="item.background" v-for="(item,index) in contents" :key="index">
            <div class="partition"></div>
            <div class="content-title">
              <p>{{item.sortName}}</p>
              <img :src="item.image" alt="">
            </div>
            <ul>
              <li class="shop-value" v-for="(term,sign) in item.shops" :key="sign" @click="goshopInfo()">
                <div class="shopIcon">
                  <img :src="term.icon" alt="">
                </div>
                <div class="description">
                  <h2>{{term.shopName}}</h2>
                  <p>{{term.intro}}</p>
                  <span>{{term.price}}</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 列表结束 -->

    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      sorts: [
        {
          sortIcon: '../../../static/images/sortIcons/food.png',
          sortName: '美食/火锅'
        },
        {
          sortIcon: '../../../static/images/sortIcons/drink.png',
          sortName: '快餐/饮料'
        },
        {
          sortIcon: '../../../static/images/sortIcons/clothing.png',
          sortName: '服饰/鞋子'
        },
        {
          sortIcon: '../../../static/images/sortIcons/cake.png',
          sortName: '蛋糕/甜品'
        },
        {
          sortIcon: '../../../static/images/sortIcons/supermarket.png',
          sortName: '超市/便利店'
        },
        {
          sortIcon: '../../../static/images/sortIcons/hairdressing.png',
          sortName: '丽人/美发'
        },
        {
          sortIcon: '../../../static/images/sortIcons/parenting.png',
          sortName: '母婴/亲子'
        },
        {
          sortIcon: '../../../static/images/sortIcons/movie.png',
          sortName: '电影/KTV'
        }
      ],
      smsorts: [
        {
          name: '美食/火锅'
        },
        {
          name: '快餐/饮料'
        },
        {
          name: '服饰/鞋子'
        },
        {
          name: '蛋糕/甜品'
        },
        {
          name: '超市/便利店'
        },
        {
          name: '丽人/美发'
        },
        {
          name: '母婴/亲子'
        },
        {
          name: '电影/KTV'
        }
      ],
      contents: [
        {
          background: 'food',
          sortName: '美食/火锅',
          image: '../../../static/images/contents/hotpot.png',
          shops: [
            {
              icon: '../../../static/images/contents/icons/haoxiyuan.png',
              shopName: '濠西园牛排',
              intro: '鲜嫩牛肉 味美口感棒',
              price: '人均188元'
            },
            {
              icon: '../../../static/images/contents/icons/zuoke.png',
              shopName: '佐客牛排',
              intro: '工作热情 菜品丰富 价格实惠',
              price: '人均106元'
            },
            {
              icon: '../../../static/images/contents/icons/xiheyuan.png',
              shopName: '溪和园火锅店',
              intro: '上菜快 味道赞 分量足',
              price: '人均132元'
            },
            {
              icon: '../../../static/images/contents/icons/jiumatou.png',
              shopName: '九码头老灶火锅',
              intro: '重庆火锅 风格独特 味道很棒',
              price: '人均67元'
            }
          ]
        },
        {
          background: 'drink',
          sortName: '快餐/饮料',
          image: '../../../static/images/contents/hamburger.png',
          shops: [
            {
              icon: '../../../static/images/contents/icons/awon.png',
              shopName: 'AWON阿旺茶',
              intro: '品味赞 品类多',
              price: '人均10元'
            },
            {
              icon: '../../../static/images/contents/icons/zhengongfu.png',
              shopName: '真功夫',
              intro: '蒸出来的美味 新增粉蒸凤爪',
              price: '人均24元'
            },
            {
              icon: '../../../static/images/contents/icons/xufuyu.png',
              shopName: '徐福宇黄焖鸡米饭',
              intro: '品质正宗 味美分量足',
              price: '人均16元'
            },
            {
              icon: '../../../static/images/contents/icons/shousi.png',
              shopName: 'N多寿司',
              intro: '口感新鲜 回味无穷',
              price: '人均15元'
            }
          ]
        },
        {
          background: 'clothing',
          sortName: '服饰/鞋子',
          image: '../../../static/images/contents/shoes.png',
          shops: [
            {
              icon: '../../../static/images/contents/icons/sennvbuluo.png',
              shopName: '森女部落',
              intro: '原创设计 轻度少女 森系',
              price: '人均120元'
            },
            {
              icon: '../../../static/images/contents/icons/linlang.png',
              shopName: ' 琳琅 都市原创慢生活',
              intro: '海量新品 潮流穿搭 玩趣互动',
              price: '人均90元'
            },
            {
              icon: '../../../static/images/contents/icons/dafuni.png',
              shopName: '达芙妮',
              intro: '告别传统 唤醒态度',
              price: '人均159元'
            },
            {
              icon: '../../../static/images/contents/icons/adidas.png',
              shopName: '阿迪达斯',
              intro: '街拍潮人 运动舒适',
              price: '人均699元'
            }
          ]
        },
        {
          background: 'cake',
          sortName: '蛋糕/甜品',
          image: '../../../static/images/contents/cake.png',
          shops: [
            {
              icon: '../../../static/images/contents/icons/ruikeyeye.png',
              shopName: '瑞可爷爷的店',
              intro: '味道浓郁 香甜可口 幸福满满',
              price: '人均20元'
            },
            {
              icon: '../../../static/images/contents/icons/tuanzi.png',
              shopName: '团子大家族',
              intro: '神奇美食 甜蜜幸福的味道',
              price: '人均17元'
            },
            {
              icon: '../../../static/images/contents/icons/andelu.png',
              shopName: '安特鲁烘焙',
              intro: '美味蛋糕 生日祝福 独家定制',
              price: '人均21元'
            },
            {
              icon: '../../../static/images/contents/icons/chaosuannai.png',
              shopName: '吴小姐炒酸奶',
              intro: '正宗酸奶 独特吃法',
              price: '人均15元'
            }
          ]
        },
        {
          background: 'supermarket',
          sortName: '超市/便利店',
          image: '../../../static/images/contents/supermarket.png',
          shops: [
            {
              icon: '../../../static/images/contents/icons/lingshi.png',
              shopName: '零食工坊',
              intro: '进口零食 种类丰富',
              price: '人均50元'
            },
            {
              icon: '../../../static/images/contents/icons/suguo.png',
              shopName: '华润苏果',
              intro: '生活便利 连锁超市',
              price: '人均100元'
            },
            {
              icon: '../../../static/images/contents/icons/meiyijia.png',
              shopName: '美宜佳便利店',
              intro: '24小时营业 随时购买',
              price: '人均30元'
            },
            {
              icon: '../../../static/images/contents/icons/yonghui.png',
              shopName: '永辉超市',
              intro: '生鲜水果 价格实惠',
              price: '人均25元'
            }
          ]
        },
        {
          background: 'hairdressing',
          sortName: '丽人/美发',
          image: '../../../static/images/contents/hairdressing.png',
          shops: [
            {
              icon: '../../../static/images/contents/icons/meitiantao.png',
              shopName: '美天淘日系沙龙',
              intro: '潮流造型 发动飞扬 滋润秀发',
              price: '人均171元'
            },
            {
              icon: '../../../static/images/contents/icons/yunxi.png',
              shopName: '芸熙美人',
              intro: '技术至上 不拼价格 时尚精致',
              price: '人均446元'
            },
            {
              icon: '../../../static/images/contents/icons/chulian.png',
              shopName: '初莲日式美甲美睫',
              intro: '美丽品质 体验度超棒',
              price: '人均200元'
            },
            {
              icon: '../../../static/images/contents/icons/douqingtang.png',
              shopName: '痘清堂皮肤护理',
              intro: '效果明显 远离痘痘 做回美人',
              price: '人均18元'
            }
          ]
        },
        {
          background: 'parenting',
          sortName: '母婴/亲子',
          image: '../../../static/images/contents/parenting.png',
          shops: [
            {
              icon: '../../../static/images/contents/icons/hibaby.png',
              shopName: '海贝亲子游泳俱乐部',
              intro: '环境卫生 亲子互动 健康游泳',
              price: '人均120元'
            },
            {
              icon: '../../../static/images/contents/icons/wandouduo.png',
              shopName: '豌豆朵',
              intro: '设施崭新 干净卫生',
              price: '人均116元'
            },
            {
              icon: '../../../static/images/contents/icons/meilimom.png',
              shopName: '美丽妈妈产后康复中心',
              intro: '产后健康 专业恢复',
              price: '人均6445元'
            },
            {
              icon: '../../../static/images/contents/icons/tongmengkj.png',
              shopName: '童梦空间',
              intro: '乐高活动中心',
              price: '人均128元'
            }
          ]
        },
        {
          background: 'movie',
          sortName: '电影/KTV',
          image: '../../../static/images/contents/movie.png',
          shops: [
            {
              icon: '../../../static/images/contents/icons/jinyi.png',
              shopName: '金逸影城',
              intro: 'IMAX 交通便利 服务一流',
              price: '人均30元'
            },
            {
              icon: '../../../static/images/contents/icons/wanda.png',
              shopName: '万达影城',
              intro: '生活因万达影城更美好',
              price: '人均35元'
            },
            {
              icon: '../../../static/images/contents/icons/inxianghui.png',
              shopName: 'in象汇量贩式ktv',
              intro: '价格实惠 环境优美 性价比高',
              price: '人均57元'
            },
            {
              icon: '../../../static/images/contents/icons/wenshaktv.png',
              shopName: '温莎KTV量贩',
              intro: '音响效果好 歌单齐全',
              price: '人均97元'
            }
          ]
        }
      ],
      markCircle: '淮北'
    }
  },
  methods: {
    goingto (index, value) {
      var site = $('#list-content' + index).offset().top - 123
      document.body.scrollTop = site
      console.log(site)
    },
    showTiplist () {
      $(window).scroll(function () {
        var scrollY = $(document).scrollTop() // 获取垂直滚动的距离，即滚动了多少
        if (scrollY > 190) {
          $('.sm-sort').removeClass('hidden')
          var len = $('.content-value').length // 获取循环列表的长度
          // 使用for循环判断每部分内容的位置和当前滚动位置
          for (var itemIndex = 0; itemIndex < len; itemIndex++) {
            var x = $('#list-content' + itemIndex).offset().top
            if (scrollY - x > -240) {
              $('.tip-content').removeClass('active')
              $('#tip-list' + itemIndex).addClass('active')
            }
          }
        } else if (scrollY <= 190) {
          $('.sm-sort').addClass('hidden')
        }
      })
    },
    getaddress () {
      this.$router.push({
        name: 'Addressarea'
      })
    },
    goshopInfo () {
      this.$router.push({
        name: 'Shopinfo'
      })
    },
    getSession () {
      let city = window.sessionStorage.getItem('key')
      if (city) {
        this.markCircle = city
      }
    }
  },
  mounted () {
    this.showTiplist()
    this.getSession()
  }
}
</script>
<style scoped>
.container {
  text-align: center;
  width: 100%;
}
.content {
  max-width: 750px;
  margin: 0 auto;
}

/* header */
.header {
  width: 100%;
  height: 64px;
  background: #F05C5C; 
  color: #fff;
  /* display: flex;
  display: -webkit-flex;
  align-items: center; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.header > .address {
  position: absolute;
  left: 16px;
  top: 20px;
}
.header > .address span {
  font-size: 14px;
}
.header .add-img {
  position: relative;
  top: -2px;
} 
.header p {
  display: inline-block;
  margin: 0 auto;
  font-size: 18px;
  line-height: 18px;
  margin-top: 22px;
}

/* 分类列表 */
.sort-list {
  margin-top: 84px;
  margin-bottom: 10px;
  height: 160px;
}
.sort-name {
  width: 25%;
  float: left;
  padding-bottom: 12px; 
}
.sort-name img {
  height: 44px;
}
.sort-name p {
  font-size: 11px;
  color: #777;
}
/* 小列表 */
.sm-sort {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background:#fff;
  z-index: 2;
  color: #777;
  border-bottom: 1px solid #ccc;
}
.hidden {
  display: none;
}
.tip-list {
  height: 60px;
}
.tip-content {
  float: left;
  width: 25%;
  height: 30px;
}
.tip-content p {
  font-size: 11px;
  line-height: 11px;
  margin-top: 9px;
}
.active {
  background: #FFDFDF;
  color: #F05C5C;
} 
/* 列表内容 */
.partition {
  background: #f4f4f4;
  height: 10px;
}
.content-value {
  padding-bottom: 20px;
}
/* 美食 */
.food {
  background: #F67C5B;
}
/* 饮料 */
.drink {
  background: #FDA53E;
}
/* 服饰 */
.clothing {
  background: #68a2ed;
}
/* 蛋糕 */
.cake {
  background: #fb7f5d;
}
/* 超市 */
.supermarket {
  background: #2db5ef;
}
/* 美发 */
.hairdressing {
  background: #fb6194;
}
/* 亲子 */
.parenting {
  background: #ff7676;
}
/* 电影 */
.movie {
  background: #4acbaa;
}
/* 内容 */
.content-title {
  position: relative;
  height: 70px;
}
.content-title p{
  display: inline;
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 30px;
  margin-top: 23px;
}
.content-title img{
  height: 70px;
  position: absolute;
  right: 34px;
  top: 5px;
}
.shop-value {
  height: 100px;
  background: #fff;
  margin: 5px;
  border-radius: 4px;
}
.shopIcon {
  float: left;
  height: 100px;
  width: 100px;
}
.shopIcon img {
  height: 80px;
  margin: 10px;
}
.description {
  width: 60%;
  text-align: left;
  float: left;
  margin-left: 16px;
  margin-top: 10px;
}
.description h2 {
  font-size: 18px;
  margin-bottom: 3px;
  font-weight: normal;
}
.description p{
  font-size: 14px;
  line-height: 16px;
  margin-top: 3px;
  color: #757575;
}
.description span {
  display: block;
  font-size: 14px;
  position: relative;
  bottom: -20px;
  line-height: 16px;
  color: #DB3C3C;
}
</style>
