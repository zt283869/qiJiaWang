<template>
  <div class="nav-box">
    <div class="nav-box-inner">
      <div class="nav-list" v-for="item in headerList">
        <span><img :src="item['img']" alt=""></span>
        <ul>
          <router-link :to="{name:'serviceDetailS'}">
              <li v-for="item in item['names']">{{item}}</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapActions} from 'vuex'
  export default {
    data(){
      return{


      }
    },
    computed: {
     headerList(){
       return this.$store.state.headerNav.nav_list
     }
    },
    mounted(){

    }

  }
</script>
<style scoped>
  @import '../../../../static/css/independent/header/header.css';
</style>


