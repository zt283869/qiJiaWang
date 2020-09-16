<template>
  <div class="aboutwe">
      <div class="aboutwe-left">
        <ul>
          <li v-for="(item,index) in leftList" :class="{'bg': index==TurnDefalute}" @click="TurnDefalute=index; cutShow(index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="aboutwe-right">
        <about v-show="aboutShow"></about>
        <call v-show="callShow"></call>
      </div>

  </div>
</template>
<script>
  import about from './components/about.vue'
  import call from './components/call.vue'
export default {
  data(){
    return{
      TurnDefalute:0,
      aboutShow:true,
      callShow:false,
      leftList:[
        {name:'关于我们'},
        {name:'联系我们'},
      ],
    }
  },
  methods:{
    cutShow(index){
      if(index == 0){
        this.aboutShow = true;
        this.callShow = false
      }else if(index == 1){
        this.aboutShow = false;
        this.callShow = true
      }
    }
  },
  components:{
    about,
    call
  }
}
</script>
<style>
  @import '../../../static/css/independent/aboutwe/aboutwe.css';
</style>
