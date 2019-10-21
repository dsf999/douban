<template>
  <div class="doulist">
    <div class="header">
      <h1>同时入选IMDB250和豆瓣电影250的电影</h1>
      <span>东方快车</span>
      <div class="header_info">
        <span v-show="tags">
          <i>同时入选IMDB250和豆瓣电影250的电影</i><br>
          <i>2018年11月29日更新</i><br>...
        </span>
        <span v-show="!tags">同时入选IMDB250和豆瓣电影250的电影
<br>2018年11月29日更新
<br>感谢影迷朋友对这个豆列的支持，已经有超过200000人关注了，根据IMDB250和豆瓣电影250最新排名进行更新，并增加了其他只进入IMDBtop100或豆瓣电影top100的影片，希望大家继续支持。
<br>
<br>超过3 部电影入选的导演统计：
<br>克里斯托弗·诺兰 （6部）：同时入选IMDB250和豆瓣电影250的电影 盗梦空间   蝙蝠侠：黑暗骑士  蝙蝠侠：黑暗骑士崛起  星际穿越  致命魔术  记忆碎片
<br>宫崎骏 （6部）：同时入选IMDB250和豆瓣电影250的电影   千与千寻  龙猫  幽灵公主  天空之城  哈尔的移动城堡    风之谷
<br>斯坦利·库布里克（6部）：同时入选IMDB250和豆瓣电影250的电影   发条橙   进入IMDBtop100或豆瓣电影top100的电影  2001太空漫游  奇爱博士  闪灵  光荣之路  全金属外壳
<br>昆汀·塔伦蒂诺 （4部）：同时入选IMDB250和豆瓣电影250的电影：低俗小说  无耻混蛋  被解救的姜戈   进入IMDBtop100或豆瓣电影top100的电影  落水狗
<br>史蒂文·斯皮尔伯格（4部）：同时入选IMDB250和豆瓣电影250的电影：辛德勒的名单  拯救大兵瑞恩  猫鼠游戏  进入IMDBtop100或豆瓣电影top100的电影  夺宝奇兵
<br>大卫·芬奇（4部）：同时入选IMDB250和豆瓣电影250的电影：搏击俱乐部  七宗罪   消失的爱人  进入IMDBtop100或豆瓣电影top100的电影  本杰明·巴顿奇事
<br>查理·卓别林（4部）：同时入选IMDB250和豆瓣电影250的电影：城市之光  摩登时代 进入IMDBtop100或豆瓣电影top100的电影 大独裁者  寻子遇仙记
<br>希区柯克（4部）：同时入选IMDB250和豆瓣电影250的电影：惊魂记  进入IMDBtop100或豆瓣电影top100的电影  后窗 迷魂记  西北偏北
<br>赛尔乔·莱翁内（4部）：同时入选IMDB250和豆瓣电影250的电影：美国往事  黄金三镖客 进入IMDBtop100或豆瓣电影top100的电影  西部往事  黄昏双镖客
<br>詹姆斯·卡梅隆（4部）：同时入选IMDB250和豆瓣电影250的电影：终结者2   进入IMDBtop100或豆瓣电影top100的电影 泰坦尼克号 阿凡达  异形2
<br>比利·怀尔德（4部）：同时入选IMDB250和豆瓣电影250的电影：控方证人   进入IMDBtop100或豆瓣电影top100的电影 日落大道  双重赔偿  桃色公寓
<br>马丁·斯科塞斯 （4部）：进入IMDBtop100或豆瓣电影top100的电影  出租车司机  好家伙   禁闭岛  无间道风云</span>
        <i style="color: #42BD56;" @click="change">展开</i>
      </div>
      <div class="header_love">
        <div>
          <span></span>
          <span>23432</span>
        </div>
        <div>
          <span>...</span>
        </div>
      </div>
    </div>
    <div class="movie_list">
      <ul>
        <li v-for="item in movie">
          <div>
            <div class="top">
              <div class="left">
                <img :src="item.images.small" alt="">
              </div>
              <div class="right">
                <h2>{{item.title}}</h2>
                <p>{{item.rating.average}}</p>
                <div>
                  <span v-for="items in item.casts">{{items.name}}/</span>
                  {{item.mainland_pubdate}}
                  <span v-for="i in item.genres">{{i}}/</span>
                  {{item.pubdates[0]}}
                </div>
              </div>
            </div>
            <div class="bottom">
              评语：同时进入IMDBtop10和豆瓣电影top10的电影：
              豆瓣电影250NO.1  IMDB250NO.1
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="movie_page">
      <p>·&nbsp;{{pages}}&nbsp;·</p>
      <div>
        <p @click="previous" id="previous">上页</p>
        <p @click="next">下页</p>
      </div>
    </div>

    <div class="footer">
      <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjIyMUZGOTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjIyMUZGQTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMjIxRkY3NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyMjIxRkY4NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vlyY+wAAAYBQTFRFBa8QAKoAFdkhLsg4E8YeAMYBALEAN9JBAMoJErAcB8wTBsYSg9qIB9ITB88TWthijt+TBbAQB84TAM0ABsASBsQS////BsISALsABsoTBscTBrkRBroRBbYRBr4SdNt7b+V3SuFTBbQRBbMR5frmALIJoeOl7fvuE7sdBrwSKbwzCcgWTNRUeOh/FNAf0fbUxvXJHbUnt+i6QsVKSstTk+uYoOylcN13tvK6yu/N8/z0Y9psverAo++oAKMAwuzF+v77AK8LbNVxUsdaAbcKdNN74vbjYMtnrOawxu3JvvPB2/XdGMAjVs5fCNMW2fnbac9wBboQAtEQC7MUOsJDB80WB7oTB7gT/P/8BrYSBLYRBawQB9cUB9YUB9QUB9UUBa0QBrcRQtpLBrwRB64SBbURV+JfC9gYDdYab8919/33BrYUqvGvBc4SBrMTCK8PBrsTBrQSELwbBbEQ+/77BbgRBbgSCK8T6PnqBMsOBbwQA84NC70V2PTazvDQ////esWf9QAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAEbUlEQVR42uzb/V/aRhzA8Ts0B2yM0rI6NrcpKoJYmIA4yxR8SBWcWmmpXS3Wyaabm9s6Hzasq/zrDTjygM038Y7c+Wr7+a25+H2TiIEqQY3OooeJcM3VxdzhwamRKwzq+PfhvqvqROFsFIDnss6orVyJETN4wkG2Rc++HU5UHW8/ehV+WKtyyDXdCR9WOZUwwtxcVb6E61WOrejgGk/4l6gKJ6pcq7XhiSrnsv/Drm3ePWzBWe7udrgF8z/g5iGjxrQAd3tQgfd3BORqoNyvIuCdFXQoxN0ZRIkXQqqhsBjYjdxiYBdyfYB5wclPzHvEGDA6CcDrQebW12ng8+TsClPT4SDNEful2T7GTvxBCvhRcIIV/iEJwX6TzoPTrHAuGTSbDsIrrPBvdLDEfKr7qGC/tM/qTnnOaWC/5K4x5fac+QH4jml/SIyd+01ng7CTKfBHQrrJ8JmHojNm+IlHooElzxNL+HMwz/jUNxRlx8/guZawNEh37bglscIJOvg7ZvhbQUccooVDNxbu/QJMD0eXRuByehie23sd2C2Ng4VuOQT3hOAXo5DbqSO2GBa6dy34YzAjbLGvAYb3fS/hu2BG2GJfAwzv+wF+L+DPwIywxb4GGN5XgT8FIwYY3tcIw/u+GzDRw6SLcC8mYLjHITi7MAC2UHQIvtZbH0t49Wswehieu3pz4QFRsI/yfxKWcGwMjGTo4B4Cz42ho5/AXpHJgHW+UVX83tfckCGv4LlHKPYl2FiZ2Ci/psKT+daWsTF4bswKViorvZTbhvyyfCWZvFZ/mfcfaW6xHGoHbnZ61HNZXJE7FzeJdq1ME9nWQLswVn+qRq9OLuOACi/gTbtwv53IpDq6gjc7FmUyoq7Gia15/XZhWa63Rxdx2bi2ibVHdUFk2/CprXRnc5U8NSzJOK2uDeB+e/MUeNdOT3VH5cP/6JdOSUx/3Ti1NW/XLrxLjubaw5dIxPiYFlS3LpPdLsMyntGuEfiZYaWkrpSIbB/+yl7aD5Ty9NrSL6xqZzpgWIG6BlzR5sfwM3X7Fta9flV0C5bwnr30T6FAfkvdHhmuay8QJGJz2h4ID0V0EVzQfv0TIep2HNcekC8fMQTDQyb9TozvZvO6U7qW1zZvaJsz+Y73u3t/m00H4PnHo/f1FZZ0f1AqqZtLc9rm1wX9F1yU1vAQAA+blH/A/GenvsfEbDoEB5jduRimgX3McI4OZj/iEzq4G99jAPYemzT/V2CGrfQiNht+7DWH/5zPY9aGaeDj49vzjJmPbsK3heRFKTFwCsWRkFIoIwaOow0xcAWNioGXUV0MXESNigj33xxqBETAiw3UyP38I/8Kzc/eHvB3460P/Ub5H/LM5eeri885t9z+KHuGr+s9acM5L1e4pN01UODpBvQ3aDzg52aMt6RwkxdPOm7CSXs5nmfDbUdLHJ7bqZm33mjlc9rdyJncWnZ/0Um2kgZuprs4SDl00VhOw3fxKc+yg0w8lfJ2r1S8slyMdjJvBBgAjaD61EhSiREAAAAASUVORK5CYII=" alt="">
        <div>
          <h1>豆瓣</h1>
          <p>我们的精神角落</p>
        </div>
      </div>
      <p><a href="#">去 App Store 免费下载 iOS 客户端</a></p>

    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              tags : true,
              movie:[],
              pages:"1",
              start:0,
          }
      },
    methods:{
          change(){
              this.tags = !this.tags
          },
          previous(){
              this.start <=0?this.start = 0:this.start -= 10;
              this.pages --;
          },
          next(){
              this.start >=250?this.start = 250:this.start += 10;
              this.pages ++;
              previous.style.color = '#494949';
          }
    },
    mounted(){
          var _this = this;
          function movie() {
              return _this.$http({url:`https://douban.uieee.com/v2/movie/top250?start=${_this.start}&count=10`})
          }
          this.$http.all([movie()]).then(this.$http.spread((m)=>{
              this.movie = m.data.subjects;
          }))
          if (this.start<=0){
              previous.style.color = '#ccc';
          }
    },
    updated(){
          var _this = this;
          function movie() {
            return _this.$http({url:`https://douban.uieee.com/v2/movie/top250?start=${_this.start}&count=10`})
          }
          this.$http.all([movie()]).then(this.$http.spread((m)=>{
            this.movie = m.data.subjects;
          }))
    }
  }
</script>

<style scoped>
  .doulist{
    margin: 0 1.8rem;
  }
  .doulist .header{
    margin: 3rem 2.2rem 0;
    text-align: center;
  }
  .doulist .header h1{
    text-align: center;
    margin-bottom: 15px;
    color: #494949;
    font-size: 2.4rem;
    font-weight: 100;
  }
  .doulist .header>span{
    color: #494949;
  }
  .doulist .header .header_info{
    font-size: 1.2rem;
    margin: 1.5rem 2.2rem 0;
    color: #494949;
  }
  .doulist .header .header_info i{
    font-style: normal;
  }

  .doulist .header .header_love{
    display: flex;
    padding: 0 4rem;
  }
  .doulist .header .header_love>div{
    border: .1rem solid #42bd56;
    background-color: #ffffff;
    color: #42bd56;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.2rem;
    border-radius: .4rem;
    margin: 3rem auto 4rem;
    text-align: center;
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: 0 2rem;
  }
  .doulist .header .header_love>div:first-child span:first-child{
    margin-right: .7rem;
    width: 1.6rem;
    height: 1.5rem;
    display: inline-block;
    background: url('https://img3.doubanio.com/f/talion/5ebc5b995463b28364f4a80a967f6fc7ffcd1cfd/pics/card/ic_like@2x.png') no-repeat;
    background-size: 100%;
  }

  .doulist .movie_list ul{
    border-bottom: .1rem solid #e5e5e5;
  }
  .doulist .movie_list ul li{
    padding: 2rem 1.8rem 2rem 0;
    border-top: .1rem solid #e5e5e5;
  }
  .doulist .movie_list ul li>div .top{
    display: flex;
  }
  .doulist .movie_list ul li>div .top .left img{
    float: left;
    width: 7.5rem;
    margin-right: 1.5rem;
  }
  .doulist .movie_list ul li>div .top .right h2{
    color: #494949;
    font-size: 1.7rem;
    line-height: 1.3;
    font-weight: normal;
  }
  .doulist .movie_list ul li>div .top .right p{
    font-size: 1.4rem;
    color: #aaaaaa;
    margin-top: .5rem;
  }
  .doulist .movie_list ul li>div .top .right div{
    font-size: 1.2rem;
    line-height: 1.5;
    color: #aaaaaa;
    margin-top: .5rem;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .doulist .movie_list ul li>div .bottom{
    margin: 1rem 0 .6rem;
    padding: 0 .8rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-left: .2rem solid #e5e5e5;
    color: #494949;
  }

  .doulist .movie_page{
    padding:3rem 0 0;
    text-align: center;
    color: #494949;
  }
  .doulist .movie_page>p{
    font-size: 1.6rem;
  }
  .doulist .movie_page>div{
    margin-top: 2rem;
    display: flex;
    justify-content:space-between;
  }
  .doulist .movie_page>div>p{
    font-size: 1.8rem;
    width: 47%;
    line-height: 1.8;
    background-color: #F2F2F2;
    border: .1rem solid #ccc;
    border-radius: .4rem;
  }

  .footer{
    padding: 0 0 2rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
    text-align: center;
    font-size: 1.5rem;
  }
  .footer>div{
    margin: 0 auto 1.5rem;
    overflow: hidden;
    text-align: left;
    font-size: 1.4rem;
    display: inline-block;
    color: #111;
  }
  .footer>div img{
    float: left;
    width: 4.8rem;
    height: 4.8rem;
    margin-right: 1.2rem;
  }
  .footer>div>div{
    overflow: hidden;
  }
  .footer>div>div h1{
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 2.8rem;
  }
  .footer p a{
    color: #42bd56;
    text-decoration: none;
  }
</style>
