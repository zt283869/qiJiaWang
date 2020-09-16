<template>
  <div class="personalInf shoppingCar">
    <publicTabHeader :tagName="tagName"></publicTabHeader>
    <div class="personalInfMain">
      <template>
        <div class="personal-center-main">

          <div class="service-order-table-wrapper">
            <table>
              <tr class="table-header">
                <th>
                  <el-checkbox v-model="checkAll"></el-checkbox>
                  全部服务 ： {{message.length}}
                </th>
                <th v-for="item in listHeaderItems" v-text="item"></th>
                <th>操作</th>
              </tr>
              <!--<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" className="checkboxAll">-->
              <!--<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>-->
              <!--</el-checkbox-group>-->
              <template v-for="(subItem, index) in message">
                <tr class="gap"></tr>
                <tr class="paddingLeft">
                  <td align="left" class="td_flex">
                    <el-checkbox v-model="redCheck[index]"></el-checkbox>
                    <!--<span v-if="isAll" class="dui el-icon-check" @click="changeAlls(index)"></span>-->
                    <!--<span v-else class="dui" @click="changeAlls(index)"></span>-->
                    <img :src="subItem.img" class="service-img" :alt="subItem.name">
                  </td>
                  <td>{{subItem.name}}</td>
                  <td>{{subItem.price}}</td>
                  <td>

                    <template>
                      <el-input-number v-model="subItem.quantity" :debounce="0" :min="1" :max="100" label="描述文字" size="small" :readonly="true"></el-input-number>
                    </template>
                  </td>
                  <td>{{(subItem.quantity * subItem.price).toFixed(2)}}</td>
                  <td class="operations">
                    <el-button @click="del(index)">删除</el-button>
                  </td>
                </tr>
              </template>
              <div>
              </div>
            </table>
            <div v-if="message.length==0" class="empty_car">购物车暂时为空哦~~~~</div>
          </div>
          <div class="pining">
            <div class="block">
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="4"
                layout="total,prev, pager, next, jumper"
                :total="100">
              </el-pagination>
            </div>
          </div>
          <div class="paying">
            选择服务数 : <span>{{totalQuantity}}</span> 总计金额：<span>{{totalPrice.toFixed(2)}}元</span>
            <router-link :to="{name:'paySuccessS'}">
            <el-button class="red">立即支付</el-button>
          </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapActions} from 'vuex'
  import publicTabHeader from './publicTabHeader.vue';  //公共标签
  import publicOrderListHeader from './publicOrderListHeader.vue'; //订单列表公共表头
  import '../../../filter/filters'
  import Uilts from '../../../uitls'
  export default {
    data() {
      return {
        currentPage:1,
        checkAll: false,
        redCheck: [false, false, false],
        totalQuantity: 0,
        checkedCities: [],
        checked: false,
        totalPrice: 0,
        quantityArr:[],
        message: [
          {
            id: "1",
            img: Uilts.publicPath +"static/img/home/home/advertising/ad5.jpg",
            name: 'iphone5s',
            quantity: 1,
            price: 40.11,
            priceTotal: 40,
          }, {
            id: "2",
            img: Uilts.publicPath +"static/img/home/home/advertising/ad5.jpg",
            name: 'iphone5',
            quantity: 1,
            price: 30,
            priceTotal: 30,
          }, {
            id: "3",
            img: Uilts.publicPath +"static/img/home/home/advertising/ad5.jpg",
            name: 'mac',
            quantity: 1,
            price: 70,
            priceTotal: 70,
          }
        ],

        indexArr:[],


        tagName: '购物车',
        listHeaderItems: ['服务名称', '单价', '数量', '小计']
      }
    },
    watch: {
      checkAll(val) {
        if (this.checkAll) {
          this.totalPrice=0;
          this.totalQuantity=0;
          console.log(this.quantityArr)
          for (let i = 0; i < this.redCheck.length; i++) {
            this.totalQuantity+=this.message[i].quantity;
            this.totalPrice+=this.message[i].quantity*this.message[i].price
            this.redCheck[i] = true;
          }
        } else {
          let boolAdd = false;
          for (let i = 0; i < this.redCheck.length; i++) {
            if (!this.redCheck[i]) {
              boolAdd = false
              return;
            } else {
              boolAdd = true;
            }
          }
          if (boolAdd) {
            for (let i = 0; i < this.redCheck.length; i++) {
              this.redCheck[i] = false;
              this.totalPrice=0;
              this.totalQuantity=0;
            }
          }
        }
      },
      redCheck(val) {
        for (let i = 0; i < this.message.length; i++) {
          this.quantityArr[i]=this.message[i].quantity
        }
        this.totalQuantity=0;
        this.totalPrice=0;

        for(let i = 0; i < this.quantityArr.length; i++){
          if (this.redCheck[i]) {
            this.totalQuantity+=this.quantityArr[i];
            this.totalPrice+=this.quantityArr[i]*this.message[i].price
            continue
          }else{
          }
        }
        for (let i = 0; i < this.redCheck.length; i++) {
          this.quantityArr[i]=this.message[i].quantity
          if (!this.redCheck[i]) {
            this.checkAll = false
            return;
          } else {
            this.checkAll = true
          }
        }
      },
      message: {
        handler: function (val, oldVal) {
          this.totalQuantity=0;
          this.totalPrice=0;
          for (let i = 0; i < this.redCheck.length; i++) {
            this.quantityArr[i]=val[i].quantity
          }
          for(let i = 0; i < this.quantityArr.length; i++){
            if (this.redCheck[i]) {
              this.totalQuantity+=this.quantityArr[i];
              this.totalPrice+=this.quantityArr[i]*this.message[i].price
              continue
            }else{
            }
          }

        },
        deep: true
      }

    },
    computed: {
//      ...mapState({
//        serviceOrderList_All: state => state.serviceOrderList.serviceOrderListAll
//      })

    },
    methods: {
      del(index) {
        this.$confirm('此操作将删除该服务, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.message.splice(index, 1)
          this.redCheck.splice(index, 1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },
      handleCurrentChange(val) {

      }

    },

    components: {
      publicTabHeader,
      publicOrderListHeader,
    }

  }
</script>


<style scoped>

  @import "../../../../static/css/independent/personalCenter/serviceOrder.css";
  @import "../../../../static/css/independent/personalCenter/shoppingCar.css";

  .public-tab-name {
    border: none
  }

  .public-tab {
    border: none
  }

  .personal-center-main {
    width: 930px;
    background-color: #FFF;
  }

  .personalInf .el-input__inner {

  }

  .el-icon-check {
    font-size: 6px;

  }

</style>
