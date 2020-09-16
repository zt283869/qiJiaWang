<template>
 <div class="pining">
   <div class="block">
     <el-pagination
       @current-change="handleCurrentChange"
       :current-page="currentPage"
       layout="total, prev, pager, next, jumper"
       :total="100">
     </el-pagination>
   </div>
 </div>
</template>

<script>
  export default {
    methods: {
      handleCurrentChange(val) {
      }
    },
    data() {
      return {
        currentPage:1
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pining{
    height: 88px;
    widt:100%;
    text-align: center;
    padding-top:20px;
    box-sizing: border-box;
  }
</style>
