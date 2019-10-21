<template>
  <div class="subject">
    <!--top_detail"-->
    <div class="top_detail">
      <h1>{{detail.title}}</h1>
      <div>
        <div class="left">
          <div>
            <span>{{detail.rating.average}}分</span>
            <span>{{detail.ratings_count}}人评价</span>
          </div>
          <p>{{detail.year}}/{{detail.genres[0]}} /
            <span v-for="item in detail.casts">
              {{item.name}} /
            </span>
            <span v-for="item in detail.directors">
              {{item.name}} /
            </span>
            {{detail.countries[0]}}
          </p>
          <a href="#">用App查看影人资料</a>
        </div>
        <div class="right">
          <img :src="detail.images.small" alt="">
        </div>
      </div>
    </div>
    <!--want_to_see-->
    <div class="want_to_see">
      <a href="#">想看</a>
      <a href="#">看过</a>
    </div>
    <!--subject_intro-->
    <div class="subject_intro">
      <h2>{{detail.title}}的简介</h2>
      <p>
        {{detail.summary}}......
        <a>(展开)</a>
      </p>
    </div>
    <!--genres-->
    <div class="genres">
      <h2>查看更多相关分类</h2>
      <div>
        <ul>
          <li v-for="item in detail.genres"><a href="#">{{item}}</a></li>
        </ul>
      </div>
    </div>
    <!--pic-->
    <div class="subject_pic">
      <h2>{{detail.title}}的图片</h2>
      <div>
        <ul>
          <li v-for="item in detail.photos">
            <img :src="item.cover" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--subject-comments-->
    <div class="subject-comments">
      <h2>{{detail.title}}的短评</h2>
      <ul>
        <li v-for="item in detail.popular_comments">
          <div class="left">
            <img :src="item.author.avatar" alt="">
          </div>
          <div class="right">
            <h3>{{item.author.name}}</h3>
            <span>{{item.created_at}}</span>
            <p>{{item.content}}</p>
            <div>
              <i></i>
              {{item.useful_count}}
              <em></em>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--question-->
    <div class="question">
      <h2>{{detail.title}}的问答</h2>
      <div>
        <ul>
          <li>
            <a href="#">
              <h3>大家为什么对国产片这么苛刻？</h3>
              <p>35回答</p>
            </a>
          </li>
        </ul>
        <a href="#">显示更多问答</a>
      </div>
    </div>
    <!--footer-->
    <div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Bus from '../Bus'
  export default{
      data(){
          return{
            detail:{},
            str:'1',
          }
      },
      mounted(){
        var _this = this;
//        Bus.$on('receive',(x)=>{
//          this.str = x;
//        });//兄弟传值不成功

        function data() {
          return _this.$http({url:'https://douban.uieee.com/v2/movie/subject/'+_this.$route.query.x})
        }

        this.$http.all([data()]).then(this.$http.spread((d)=>{
          this.detail = d.data
        }));
      }
  }
</script>

<style scoped>
  .subject{
    padding: 4.8rem 1.8rem 0;
  }
  .subject .top_detail h1{
    font-size: 2em;
    margin: 2rem 0 0;
  }
  .subject .top_detail>div{
    display: flex;
  }
  .subject .top_detail .left{
    float: left;
  }
  .subject .top_detail .left>div{
    margin-top: .4rem;
    font-size: 1.4rem;
    color: #aaa;
  }
  .subject .top_detail .left p{
    margin-top: 1.5rem;
    padding-right: 2.4rem;
    line-height: 1.6;
    font-size: 1.4rem;
    color: #494949;
  }
  .subject .top_detail .left a{
    display: block;
    margin-top: 1rem;
    line-height: 1;
    font-size: 1.4rem;
    color: #42bd56;
  }
  .subject .top_detail .right{
    float: right;
  }
  .subject .top_detail .right img{
    max-width: 10rem;
  }

  .subject .want_to_see{
    display: flex;
    margin: 3rem 0;
  }
  .subject .want_to_see a{
    display: block;
    height: 3rem;
    margin-right: 1rem;
    line-height: 3rem;
    font-size: 1.5rem;
    text-align: center;
    color: #ffb712;
    border: .1rem solid #ffb712;
    border-radius: .3rem;
    -ms-flex: 1;
    flex: 1;
  }

  .subject .subject_intro {
    margin-bottom: 3rem;
  }
  .subject h2{
    margin: 0 0 1.5rem;
    font-size: 1.5rem;
    font-weight: 100;
    color: #aaa;
  }
  .subject .subject_intro p{
    font-size: 1.5rem;
    line-height: 1.15;
    color: #494949;
  }
  .subject .subject_intro p a{
    color: #42bd56;
  }

  .subject .genres{
    margin-bottom: 3rem;
  }
  .subject .genres>div>ul>li{
    margin: 1rem 1rem 0 0;
    display: inline-block;
  }
  .subject .genres>div>ul>li a{
    display: inline-block;
    padding: 0 1.2rem;
    line-height: 2.8rem;
    font-size: 1.5rem;
    border-radius: 2.8rem;
    text-align: center;
    color: #494949;
    background: #f5f5f5;
  }

  .subject .subject_pic{
    margin-bottom: 3rem;
  }
  .subject .subject_pic ul li{
    height: 12rem;
    overflow: hidden;
    display: inline-block;
  }
  .subject .subject_pic ul{
    margin-right: -1.8rem;
    overflow-x: auto;
    white-space: nowrap;
  }
  .subject .subject_pic ul li img{
    height: 100%;
  }

  .subject .subject-comments{
    margin-bottom: 3rem;
  }
  .subject .subject-comments ul li{
    display: flex;
    padding : 2rem 0;
    border-bottom: .1rem solid #e8e8e8;
  }
  .subject .subject-comments ul li .left img{
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
  .subject .subject-comments ul li .right{
    width: 100%;
  }
  .subject .subject-comments ul li .right h3{
    font-size: 1.7rem;
    line-height: 1;
    color: #494949;
  }
  .subject .subject-comments ul li .right span{
    display: block;
    font-size: 1.4rem;
    margin-top: .6rem;
    line-height: 1;
    color: #aaa;
  }
  .subject .subject-comments ul li .right p{
    margin: 1rem 0;
    line-height: 2.2rem;
    font-size: 1.5rem;
    color: #494949;
  }
  .subject .subject-comments ul li .right>div{
    color: #ccc;
  }
  .subject .subject-comments ul li .right>div i{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-bottom: -.4rem;
    margin-right: .3rem;
    background: url('https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg')
  }
  .subject .subject-comments ul li .right>div em{
    float: right;
    display: inline-block;
    background: url('https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg');
    background-position: 50%;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
  }

  .subject .question>div ul li{
    margin-bottom:1.7rem;
  }
  .subject .question>div ul li a h3{
    padding: 0;
    line-height: 1.41;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
  }
  .subject .question>div ul li a p{
    margin-top: .5rem;
    font-size: 1.4rem;
    color: #42bd56;
  }
  .subject .question>div>a{
    display: block;
    padding: 0 0 1.5rem;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
  }
</style>
