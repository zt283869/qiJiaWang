<template>
  <div class="public-tab">
    <span class="public-tab-name">{{tagName}}{{tagNameAfter}}<slot name="amount"></slot></span>
    <span v-if="tips.show" class="tips fr">{{tips.msg}}</span>
    <a v-if="more.show" :href="more.link" class="more fr">{{more.name}}</a>
  </div>
</template>
<script>
  export default {
    name: 'publicTabNormal',
    props: {
      tagName: {},
      tagNameAfter: {},
      tips: {
        default: function() {
          return {
            show: false
          }
        }
      },
      more: {
        default: function() {
          return {
            show: false
          }
        }
      }
    }
  }
</script>
<style scoped>
  .public-tab {
    border-bottom: 1px solid #E9E9E9;
  }

  .public-tab-name {
    display: inline-block;
    font-size: 18px;
    line-height: 1em;
    color: #4A6AFF;
    border-bottom: 2px solid #3B64FE;
    /*padding:18px 12px 11px 12px;*/
    padding: 0 12px 0 12px;
    line-height: 45px;
  }

  .public-tab .tips,
  .public-tab .more {
    font-size: 14px;
    color: #4A4A4A;
    display: inline-block;
    margin-top: 8px;
  }

  .public-tab .more {
    color: #4A6AFF;
    margin-top: 3px;
  }
</style>
