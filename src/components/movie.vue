<template>
  <div class="movie">
    <div class="in_theaters all_movie">
      <div class="title">
        <h2>影院热映</h2>
        <a href="#">更多</a>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in in_theaters" @click="details(item.id)">
            <img :src="item.images.large" alt="">
            <p>{{item.title}}</p>
            <i><i class="star"></i></i><span>{{item.rating.average}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="free_watch all_movie">
      <div class="title">
        <h2>免费在线观影</h2>
        <a href="#">更多</a>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in free_watch" @click="details(item.id)">
            <img :src="item.images.large" alt="">
            <p>{{item.title}}</p>
            <i><i class="stars"></i></i><span>{{item.rating.average}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="coming_soon all_movie">
      <div class="title">
        <h2>新片速递</h2>
        <a href="#">更多</a>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in coming_soon" @click="details(item.id)">
            <img :src="item.images.large" alt="">
            <p>{{item.title}}</p>
            <i><i class="starss"></i></i><span>{{item.rating.average}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="find_movie all_movie">
      <div class="title">
        <h2>发现好电影</h2>
        <a href="#">更多</a>
      </div>
      <div class="contents">
        <ul>
          <li><a style="color: rgb(255, 172, 45)">同时入选IMDB250和豆瓣电影250的电影</a></li>
          <li><a style="color: rgb(255, 64, 85);">带你进入不正常的世界</a></li>
          <li><a style="color: rgb(79, 157, 237)">用电【影】来祭奠逝去的岁月</a></li>
          <li><a style="color: rgb(255, 196, 108)">女孩们的故事【电影】</a></li><br>
          <li @click="doulist"><a style="color: rgb(35, 132, 232)">科幻是未来的钥匙——科幻启示录【科幻题材】</a></li>
          <li><a style="color: rgb(59, 169, 77)">美国生活面面观</a></li>
          <li><a style="color: rgb(66, 189, 86)">2015终极期待</a></li>
          <li><a style="color: rgb(204, 51, 68)">经典韩国电影——收集100部</a></li>
        </ul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import Bus from '../Bus'
  export default{
      data(){
          return{
            in_theaters:[],
            free_watch:[],
            coming_soon:[],
          }
      },
    methods:{
      details(x){
          Bus.$emit('receive',x);
          this.$router.push(
            {
              path:'/home/subject',
              query:{
                  x
              }
            }
          )
      },
      doulist(){
        this.$router.push(
          {
            path:'/doulist'
          }
        )
      }
    },
      mounted(){
          var _this = this;
          function in_theaters() {
              return _this.$http({url:'/api/api/in_theaters'})
          }
          function free_watch() {
              return _this.$http({url:'/api/api/free_watch'})
          }
          function coming_soon() {
            return _this.$http({url:'/api/api/coming_soon'})
          }
          this.$http.all([in_theaters(),free_watch(),coming_soon()]).then(this.$http.spread((t,f,c)=>{
              this.in_theaters = t.data.in_theaters.subjects;
              this.free_watch = f.data.free_watch.subjects;
              this.coming_soon = c.data.coming_soon.subjects;

              light_stars(_this.in_theaters,1);
              light_stars(_this.free_watch,2);
              light_stars(_this.coming_soon,3);

            function light_stars(data,num) {
                data.map(function (val,index) {//如果评分为0，就改成暂无评分
                  if(val.rating.average === 0){
                    val.rating.average = '暂无评分'
                  }
                  if (num === 1){
                    bingo_stars('.star')
                  }else if(num === 2){
                    bingo_stars('.stars')
                  }else if(num === 3){
                    bingo_stars('.starss')
                  }

                  function bingo_stars(cla) {
                    setTimeout(function () {//如果暂无评分，就不显示星星
                      if(val.rating.average === '暂无评分'){
                        $(cla).eq(index).parent().css('width','0rem')
                      }
                      $(cla).eq(index).css('width', val.rating.average*10+'%')
                    },0)
                  }
                });
              }
          }));

      }
  }
</script>

<style scoped>
  .movie{
    padding-top: 4.8rem;
  }
  .movie>div{
    margin-top: 1rem;
  }
  .movie .all_movie{
    line-height: 2.6rem;
  }

  .movie .all_movie>.title{
    display: flex;
    justify-content: space-between;
    padding: 0 1.6rem;
  }
  .movie .all_movie>.title>h2{
    font-size: 1.68rem;
    font-weight: 400;
    color: #111;
  }
  .movie .all_movie>.title>a{
    font-size: 1.44rem;
    color: #42bd56;
  }

  .movie .all_movie>.content{
    width: 100%;
  }
  .movie .all_movie>.content>ul{
    overflow: auto;
    white-space: nowrap;
    padding: .8rem 0;
  }
  .movie .all_movie>.content>ul li{
    width: 10rem;
    display: inline-block;
    margin-left: 1rem;
    text-align: center;
  }
  .movie .all_movie>.content>ul li img{
    width: 100%;
    height: 15rem;
    vertical-align: middle;
  }
  .movie .all_movie>.content>ul li p{
    max-width: 100%;
    margin-top: 1rem;
    line-height: 1.6rem;
    font-size: 1.6rem;
    color: #111;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    text-align: center;
  }
  .movie .all_movie>.content>ul li >i{
    display: inline-block;
    background: url("https://img-bbs.csdn.net/upload/201510/22/1445523252_651795.png");
    width: 7.75rem;
    height: 1.3rem;
  }
  .movie .all_movie>.content>ul li >i>i{
    background: url("https://img-bbs.csdn.net/upload/201510/22/1445523260_910443.png");
    display: block;
    height: 1.3rem;
  }
  .movie .all_movie>.content>ul li span{
    margin-top: .4rem;
    font-size: 1.4rem;
    color: #aaa;
  }

  .movie .find_movie .contents ul{
    overflow-x: auto;
    white-space: nowrap;
  }
  .movie .find_movie .contents ul li{
    display: inline-block;
    margin: 0 0 .8rem 1.6rem;
    font-size: 1.6rem;
    border: .1rem solid rgb(255, 172, 45);
    border-radius: .4rem;
    vertical-align: middle;
    /*white-space: nowrap;*/
  }
  .movie .find_movie .contents ul li a{
    height: 5rem;
    line-height: 5rem;
    padding: 0 2.4rem;
    letter-spacing: .16rem;
    overflow: auto;
    display: block;
    text-align: center;
  }
</style>
