exports.install = function (Vue, options) {

  /*
   ----------示例----------------示例------------------
   Method Name：getTableListData
   Purpose:列表页面生成数据获取和绑定数据获取
   Parameter:urls----API地址路径
   WrotePerson：范涛（注：谁写的方法此处填写自己的名称）
   */

  //Vue.prototype.getTableListData = function (url, obj) {
  //  const params = obj
  //  this.$http.get(url,
  //    {params: params}
  //  ).then((response) => {
  //    this.$message({
  //    type: 'info',
  //    message: '活动管理页面数据获取成功'
  //  });
  //  this.$store.commit('loadingStateClose');
  //  this.$store.commit('updatedTabColumnsInfos', response.body.head.fields);
  //  this.$store.commit('updatedImgListColumnsInfos', response.body.head.fields);
  //  for (var key in response.body.body) {
  //    if (key == "ActivityInfo") {
  //      this.$store.commit('updatedTabData', response.body.body.ActivityInfo);
  //      this.$store.commit('updatedImgListTableData', response.body.body.ActivityInfo);
  //    }
  //    if (key == "WebContent") {
  //      this.$store.commit('updatedTabData', response.body.body.WebContent);
  //      this.$store.commit('updatedImgListTableData', response.body.body.WebContent);
  //    }
  //    if (key == "ServiceProviderApply") {
  //      this.$store.commit('updatedTabData', response.body.body.ServiceProviderApply);
  //      this.$store.commit('updatedImgListTableData', response.body.body.ServiceProviderApply);
  //    }
  //  }
  //}).catch(function (response) {
  //    this.$store.commit('loadingStateClose');
  //    this.$message({
  //      type: 'warning',
  //      message: '数据获取失败'
  //    });
  //  });
  //};
}
