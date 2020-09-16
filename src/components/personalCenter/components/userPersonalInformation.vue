<template>
  <div class="personalInf userPerInf" >
    <div class="personalInfHead">个人资料</div>
    <div class="personalInfMain" >
      <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm rName">
        <el-form-item label="头像">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            accept="image/*">
            <img v-if="personalInfo.avatar" :src="personalInfo.avatar" class="avatar" title="点击更换头像">
            <i v-else class="el-icon-plus avatar-uploader-icon" title="点击上传头像"></i>
            <div slot="tip" class="el-upload__tip">仅支持大小2MB以内的图片</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="真实姓名" prop="name">
          <el-input v-model="ruleForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="城市" >
          <select v-model="prov">
            <option v-for="option in arr" :value="option.name">
              {{ option.name }}
            </option>
          </select>
          <select v-model="city">
            <option v-for="option in cityArr" :value="option.name">
              {{ option.name }}
            </option>
          </select>
          <select v-model="district">
            <option v-for="option in districtArr" :value="option.name">
              {{ option.name }}
            </option>
          </select>
        </el-form-item>

        <el-form-item class="onlyRet">
          <el-button type="primary">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import arrAll from "../../../store/city"
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        arr: arrAll["arrAll"],
        prov: '请选择',
        city: '请选择',
        district: '请选择',
        cityArr: [],
        districtArr: [],
        ruleForm: {
          name: '',
          resource: ''
        },
          imageUrl:''
      };
    },
    computed:{
      ...mapState({
        personalInfo: state => state .personalCenterAside.personalInfo
      })
    },
    methods: {
      updateCity: function () {
        for (var i in this.arr) {
          var obj = this.arr[i];
          if (obj.name == this.prov) {
            this.cityArr = obj.sub;
            this.districtArr='';
            break;
          }
        }

      },
      updateDistrict: function () {
        for (var i in this.cityArr) {
          var obj = this.cityArr[i];
          if (obj.name == this.city) {
            this.districtArr = obj.sub;
            break;
          }
        }
        if (this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
          this.district = this.districtArr[1].name;
        } else {
          this.district = '';
        }
      },

      //头像上传前回调
      beforeAvatarUpload(file){
        const isImg = /image\//.test(file.type);  //如果是图片格式
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isImg) {
          this.$message.error('头像仅支持图片格式');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isImg && isLt2M;
      },
      //头像上传成功后回调
      handleAvatarSuccess(file){
        this.imageUrl = URL.createObjectURL(file.raw);
      }
    },
    beforeMount: function () {
      this.updateCity();
      this.updateDistrict();
    },
    watch: {
      prov: function () {
        this.updateCity();
        this.updateDistrict();
      },
      city: function () {
        this.updateDistrict();
      },

    }
  }
</script>
<style scoped>
  @import "../../../../static/css/independent/personalCenter/userPersonalInformation.css";
  .avatar-uploader {
    width:180px;
  }
  .avatar-uploader img {
    width: 97px;
    height: 97px;
  }
  .tips {
    font-size: 14px;
    color: #4A4A4A;
    margin-left: 13px;
    position: relative;
    top: 4px;
  }

  .el-form {
    padding-top: 27px;
  }

  button {
    border: 0 none;

  }

  .el-form-item {
    margin-bottom: 40px;
  }
  .el-upload__tip{
    line-height:1em;
    margin-top:0;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border:1px dashed #DDD;
    transition: all .3s ease;
  }
  .avatar-uploader-icon:hover {
    border-color: #235EFD;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
