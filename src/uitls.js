/**
 * Created by 朱涛 on 2017/9/29.
 */
const config = require('../config')
export default {
  publicPath : (process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath)
}
