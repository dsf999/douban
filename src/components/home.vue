<template>
  <div class="home">
    <div class="nav" v-show="!flag">
      <h1>
        <a href="#">豆瓣</a>
      </h1>
      <ul>
        <li> <router-link to="/movie" style="color: rgb(35, 132, 232);">电影</router-link> </li>
        <li> <router-link to="/book" style="color: rgb(159, 120, 96);">图书</router-link> </li>
        <li> <router-link to="/radio" style="color: rgb(228, 168, 19);">广播</router-link> </li>
        <li> <router-link to="/group" style="color: rgb(42, 184, 204);">小组</router-link> </li>
      </ul>
      <span @click="tab"></span>
    </div>
    <div class="search" v-show="flag">
      <div class="top">
        <p @click="tab_close">关闭</p>
        <input type="text">
      </div>
      <div class="middle">
        <ul>
          <li>
            <p>电影</p>
            <span>影院热播</span>
          </li>
          <li>
          <p>电影</p>
          <span>影院热播</span>
        </li>
          <li>
          <p>电影</p>
          <span>影院热播</span>
        </li>
          <li>
          <p>电影</p>
          <span>影院热播</span>
        </li>
        </ul>
      </div>
      <div class="bottom">
        <div>
          <a href="#">注册帐号</a>
          <a href="#">登录豆瓣</a>
        </div>
        <div>
          <a href="#">使用桌面版</a>
          <a href="#">使用豆瓣App</a>
        </div>
      </div>
    </div>

    <router-view/>
    <div class="footer" v-show="!flag">
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
  import Movie from './movie'
  import Home from './home'
export default {
  name: 'HelloWorld',
  data () {
    return {
        flag:false,
    }
  },
  methods:{
      tab(){
          this.flag = true
      },
      tab_close(){
          this.flag = false
      }
  },
  components:{
    Movie,
    Home
  }
}
</script>

<style scoped>
  .home .nav{
    height:4.8rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    padding: 0 1.8rem;
    background: #fff;
    border-bottom: .1rem solid #f3f3f3;
    display: flex;
    align-items:center
  }
  .home .nav>h1{
    flex: 1;
    max-width: 4.6rem;
    max-height: 2.2rem;
    margin-right: 1.8rem;
    line-height: 3.2rem;
    color: #00b600;
    background: url('data:image/png;base64,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') no-repeat;
    background-size: cover;
  }
  .home .nav>h1>a{
    font-size: 0;
    display: block;
    line-height:2.2rem ;
  }
  .home .nav>ul{
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  .home .nav>ul>li{
    font-size: 1.6rem;
    margin-right: 1.2rem;
  }
  .home .nav>span{
    width: 2.4rem;
    height: 1.8rem;
    margin-top: .4rem;
    background: url('data:image/png;base64,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') no-repeat;
    background-size: cover;
  }

  .home .footer{
    padding: 0 0 2rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
    text-align: center;
    font-size: 1.5rem;
  }
  .home .footer>div{
    margin: 0 auto 1.5rem;
    overflow: hidden;
    text-align: left;
    font-size: 1.4rem;
    display: inline-block;
    color: #111;
  }
  .home .footer>div img{
    float: left;
    width: 4.8rem;
    height: 4.8rem;
    margin-right: 1.2rem;
  }
  .home .footer>div>div{
    overflow: hidden;
  }
  .home .footer>div>div h1{
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 2.8rem;
  }
  .home .footer p a{
    color: #42bd56;
    text-decoration: none;
  }

  .home .search{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 3;
  }
  .home .search>.top{
    display: flex;
    align-items: center;
    height: 4.8rem;
    padding: 0 1.8rem;
    background: #fff;
    border-bottom: .1rem solid #f3f3f3;
  }
  .home .search>.top p{
    color: #42bd56;
    font-size: 1.6rem;
  }
  .home .search>.top input{
    flex: 1;
    width: 100%;
    margin-left: 1rem;
    box-sizing: border-box;
    border: 0;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==') no-repeat 50% #f3f3f3;
    background-size: 1.73rem;
    border-radius: .3rem;
    width: 100%;
    height: 3.2rem;
    font-size: 1.4rem;
  }

  .home .search .middle ul{
    padding-top: 2.5rem;
  }
  .home .search .middle ul li{
    width:32.76%;
    display: inline-block;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .home .search .middle ul li p{
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
  .home .search .middle ul li span{
    color: #999;
    height: 1.7rem;
    font-size: 1.2rem;
    letter-spacing: .1rem;
  }

  .home .search .bottom{
    border-bottom: .1rem solid #f3f3f3;
  }
  .home .search .bottom>div{
    border-top: .1rem solid #f3f3f3;
    padding: 1.3rem 0;
    text-align: center;
    display: flex;
  }
  .home .search .bottom>div a{
    width: 50%;
    display: inline-block;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: #42bd56;
  }
  .home .search .bottom>div a:first-child{
    border-right: .1rem solid #e5e5e5;
  }
</style>
