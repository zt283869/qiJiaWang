<template>
  <a href="javascript:void(0);" class="scroll-to" :class="{show:scrollToShow}" @click="scrollToTop">返回<br>顶部</a>
</template>

<script>
  export default{
    data(){
      return {
        scrollToShow:false  //默认隐藏'回到顶部'
      }
    },
    mounted(){
      var _this=this
      window.addEventListener('scroll',function(){
        if(this.scrollY>300){    //页面下滚超过300显示'回到顶部'
          _this.scrollToShow=true
        }else{
          _this.scrollToShow=false
        }
      })
    },
    methods:{
//      滚动到顶部方法
      scrollToTop(){
        this.scrollToShow=false
        var y=window.scrollY
        var interval=setInterval(function(){
          window.scrollTo(0,y-=100)
          if(y<0){
            clearInterval(interval)   //滚动到顶部停止interval
          }
        },1)
      }
    }
  }
</script>

<style scoped>
  .scroll-to{
    display: flex;
    flex-direction: column;
    justify-content:center;
    width:40px;
    height:40px;
    line-height:1.2em;
    text-align: center;
    background: #666;
    position: fixed;
    bottom:30px;
    left:50%;
    margin-left:calc(545px + 80px);
    font-size:12px;
    color: #FFF;
    opacity:0;
    visibility: hidden;
    transition: all 0.2s ease;
  }
  .scroll-to.show{
    visibility: visible;
    opacity:0.9;
  }
  .scroll-to:hover{
    opacity:1;
    background: #555;
  }
</style>
