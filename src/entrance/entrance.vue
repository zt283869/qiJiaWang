<template>
    <div class="home">
      <he-adr></he-adr>
      <router-view></router-view>
      <foot></foot>
      <scrollTo></scrollTo>
    </div>
</template>
<script>
  import HeAdr from '../components/header/header.vue'
  import  foot from '../components/footer/footer.vue'
  import  scrollTo from '../components/scrollTo/scrollTo.vue'
  export default {
    name: 'entrance',
    data () {
     return {
       msg: '',
       routerHead: 'HeAdr'
     }
    },
    components: {
      HeAdr,
      foot,
      scrollTo
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
