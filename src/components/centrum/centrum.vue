<template>
      <div class="centrum">
        <banner-title></banner-title>
        <exclusive></exclusive>
        <flow></flow>
        <refer></refer>
        <message></message>
      </div>
</template>

<script>
  import bannerTitle from './components/bannerTitle.vue'
  import exclusive from './components/exclusive.vue'
  import flow from './components/flow.vue'
  import refer from './components/refer.vue'
  import message from './components/message.vue'
  export default {
    data(){
      return{

      }
    },
    components:{
      bannerTitle,
      exclusive,
      flow,
      refer,
      message
    }
  }

</script>
<style>
.centrum{
  width: 100%;
  min-height:800px;
}
</style>
