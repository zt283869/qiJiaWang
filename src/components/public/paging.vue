<template>
 <div class="pining">
   <div class="block">
     <el-pagination
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page="currentPage4"
       :page-sizes="[100, 200, 300, 400]"
       :page-size="100"
       layout="total, sizes, prev, pager, next, jumper"
       :total="400">
     </el-pagination>
   </div>
 </div>
</template>

<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pining{
    height: 88px;
    width: 1190px;
    text-align: center;
    padding-top:30px;
    box-sizing: border-box;
  }
</style>
