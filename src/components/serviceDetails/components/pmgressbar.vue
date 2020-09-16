<template>
  <div class="pmgressbar">
    <div class="pmgressbar_good"> <div class="grade">好评（70%）</div><el-progress :percentage="70" class="pmgressbar_right"></el-progress></div>
    <div class="pmgressbar_good"> <div class="grade">中评（0.97%）</div><el-progress :percentage="0.97" class="pmgressbar_right"></el-progress></div>
    <div class="pmgressbar_good"> <div class="grade">差评（0.8%）</div><el-progress :percentage="0.8" class="pmgressbar_right"></el-progress></div>
  </div>
</template>
<script>

</script>
<style scoped>
  @import "../../../../static/css/independent/serviceDetails/serviceDetailsMore.css";

</style>
