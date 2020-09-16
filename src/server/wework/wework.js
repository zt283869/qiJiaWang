// 众创空间相关方法 Created by zhen wen 2017-12-5
exports.install=function(Vue,options){
  //众创空间详情-预约参观
  Vue.prototype.sendOrderToVisit=function(options){
    console.log(options)
    const params={
      "phone":options.phone,
      "type":"3",
      "businessId":options.id
    }
    this.$http.post('/createSever_url/web/consults?format=json',{params:params}).then((response) =>{
      //console.log(response.body);
      this.$message({
        message: '预约成功',
        type: 'success'
      });

    }).catch(function() {
      this.$message({
        message: '预约失败',
        type: 'warning'
      });
    })
  }
}


// Vue.prototype.getList = function(id){
//   const params = {format: 'json','ctgId':id}
//   this.$http.get('/information_url/web/webcontents',{params: params})
//
//     .then((response) =>{
//       //console.log(response)
//       var inforContent = response.body.body[response.body.head.mdl];
//       this.$store.commit("pinContent",inforContent)
//       //console.log(inforContent)
//
//     }).catch(function() {
//     this.$message({
//       message: '获取数据失败',
//       type: 'warning'
//     });
//   })
// };
