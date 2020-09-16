<template>
  <div class="user-public-aside">
    <aside>
      <figure>
        <img :src="personalInfo.avatar" class="avatar" :alt="personalInfo.name">
        <figcaption v-text="personalInfo.name"></figcaption>
      </figure>
      <el-menu :default-active="$route.path"  @open="handleOpen" @close="handleClose" unique-opened class="el-menu-vertical-demo aside-list">
        <template v-for="(item,index) in asideNav">
          <template v-if="item.subNav">
            <el-submenu :index="item.id">
              <template slot="title">
                <i class="iconfont" :class="[item.icon]"></i>{{item.name}}
              </template>
              <el-menu-item v-for="(subItem,subIndex) in item.subNav" :index="subItem.path">
                <router-link :to="{name: subItem.link}">{{subItem.name}}</router-link>
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
              <el-menu-item :index="item.path">
                <router-link :to="{name: item.link}">
                  <i class="iconfont" :class="[item.icon]"></i>{{item.name}}
                </router-link>
              </el-menu-item>
          </template>
        </template>
      </el-menu>
    </aside>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed:{
      ...mapState({
        personalInfo: state => state .personalCenterAside.personalInfo,
        asideNav: state => state.personalCenterAside.nav
      })
    },
    methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      }
    }
  }
</script>

<style scoped>
  @import '../../../../static/css/independent/personalCenter/userPublicAside.css';
  @import '../../../../static/iconfont/personalCenter/iconfont.css';
</style>
