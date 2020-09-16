<template>
  <div class="personalInf resetInf">
    <publicTabHeader :tagName="tagName" :tagNameAfter="tagNameAfter"></publicTabHeader>
    <div class="personalInfMain">
      <el-form  label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" >
          <el-input type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" >
          <el-input type="password"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >提交</el-button>
        </el-form-item>
      </el-form>



    </div>
  </div>
</template>

<script>
  import publicTabHeader from './publicTabHeader.vue';
  export default {
    data() {
      return {
        tagName: "账号资料",
        tagNameAfter: ">修改密码"
      }
    },
    props: {},
    components: {
      publicTabHeader
    }

  }
</script>

<style scoped>

  @import "../../../../static/css/independent/personalCenter/resetPassward.css";
  .el-form{
    padding:34px 0 30px;
  }
</style>
