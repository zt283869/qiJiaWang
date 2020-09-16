<template>
    <div class="more-service">
        <div class="more-service-title" >
          <span v-for="(item,index) in moreList" :class="{'actives': index==moreDefalute}"  @click="moreDefalute=index; cut(index)" >{{item.name}}</span>
        </div>
        <div class="more-service-content" v-show="moreShow">
          <img src="../../../../static/img/home/serviceDetalis/s1.jpg" alt="">
        </div>
        <div class="more-appraise-content" v-show="gradeShow">
          <div class="evaluation_content">
            <div class="evaluation_content_left">
              <div class="percent">
                <strong>98.5%</strong>
                <span>好评率</span>
              </div>
              <PmgreBar></PmgreBar>
            </div>
            <div class="evaluation_content_right">
              <h4>客户印象</h4>
              <span class="appraise">服务评价好(8970)</span>
              <span class="efficiency">办事效率高(1963)</span>
              <span class="ardour">热情（690）</span>
              <span class="ardour">热情（690）</span>
              <span class="appraise">服务评价好(8970)</span>
              <span  class="efficiency">办事效率高(1963)</span>
              <span class="appraise">服务评价好(8970)</span>
              <span  class="efficiency">办事效率高(1963)</span>
              <span class="ardour">热情（690）</span>
              <span class="ardour">热情（690）</span>
              <span class="appraise">服务评价好(8970)</span>
            </div>
          </div>
          <div class="grade_title">
            <ul>
              <li v-for="(item,index) in evaluationList" :class="{'back': index==evalDefalute}" @click="evalDefalute=index">{{item.title}}</li>
            </ul>
          </div>
          <div class="grade_content" v-for="item in 4">
              <div class="grade_content_left">
                <img src="../../../../static/img/home/serviceDetalis/details1.jpg" alt="">
              </div>
              <div class="grade_content_center">
               <div class="grade_user">
                 <span>13963256325</span>
                 <span>有限公司注册</span>
                 <span>2017-9-6</span>
               </div>
                <div class="grade_feel">不错的体验，感觉整体注册下来还是挺快的</div>
                <div class="grade_thought">
                  <span>热情</span>
                  <span>服务态度好</span>
                </div>
              </div>
              <div class="grade_content_right">
                <strong>好评</strong>
              </div>
          </div>
          <pining></pining>
        </div>


    </div>

</template>

<script type="text/ecmascript-6">
  import PmgreBar from './pmgressbar.vue'
  import pining from '../../public/paging.vue'

export default {
  data(){
    return{
      moreDefalute:0,
      evalDefalute:0,
      value1: true,
      value2: null,
      moreShow:true,
      gradeShow:false,
      moreList:[
        {name:'全部服务'},
        {name:'用户评价（1209）'}
      ],
      evaluationList:[
        {title:'全部评价'},
        {title:'好评（8536）'},
        {title:'中评（236）'},
        {title:'差评（52）'},

      ]
    }
  },
  components:{
    PmgreBar,
    pining
  },
  methods:{
    cut(index){
     if(index == 0){
       this.moreShow = true;
       this.gradeShow = false;
     }else if(index == 1){
       this.gradeShow = true;
       this.moreShow = false;
     }
    }
  }
}

</script>
<style scoped>
  @import '../../../../static/css/independent/serviceDetails/serviceDetailsMore.css';
</style>


