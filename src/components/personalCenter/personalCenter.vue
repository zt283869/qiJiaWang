<template>
  <div class="personalS">
    <heade-center></heade-center>
    <div class="personalBg">
      <div class="personMiddle clearfix">
        <personal_aside class="fl"></personal_aside>
        <router-view class="fr"></router-view>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script type="text/ecmascript-6">
  import personal_aside from './components/userPublicAside.vue'
  import HeadeCenter from '../header/header.vue'
  import foot from '../footer/footer.vue'
  import {mapState, mapActions} from 'vuex'

  export default {
    data(){
      return {}
    },
    computed: {
      ...mapState({
        heiStr: state => state.personals.navBoxHigt
      })
    },
    methods: {
      ...mapActions([
        'newsListFun',
      ])
    },
    mounted () {
      this.newsListFun({navBoxHigt: true})
    },
    components: {
      personal_aside,
      HeadeCenter,
      foot,
    }
  }
</script>
<style scoped>
  .personalBg{
    background: #eff0f1;
    overflow: hidden;
  }
  .personMiddle{
    overflow: hidden;
    min-height:657px;
    width:1190px;
    margin:30px auto 44px;
  }


</style>
