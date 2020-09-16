import util from '../uitls';

const filters = {

    //金额保留两位小数
    floatNum(val) {
      return val.toFixed(2);
    },
  //整型
  parseIntNum(val) {
    return parseInt(val);
  }
}


export default filters;
