<template>
  <section class="content">
    <main>
      <section class="alert">当前环境：
        <span class="agent">{{userAgent}}</span>
      </section>
      <!-- api分类1 -->
      <section :key="index" v-for="(item,index) in apiList">
        <section class="h2">{{item.gridName}}</section>
        <ul class="api-list">
          <li :key="apiIndex" v-for="(apiCell, apiIndex) in item.gridList">
            <section class="api-cell" @click="linkTo" :data-key="apiCell.key">
              <section class="api-btn">{{apiCell.name}}</section>
              <section class="api-desc">{{apiCell.desc}}</section>
            </section>
          </li>
        </ul>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped src="./index.scss"></style>

<script>
import { appBridge } from '@/utils/appBridge'
import { isApp, isWeixin } from '@/utils/platform'
import { setHeaderView } from '@/utils/util'
export default {
  name: 'AppAPi',
  data () {
    return {
      header: {
        name: '首页',
        desc: '应用&功能入口集合'
      },
      userAgent: '当前环境计算中...',
      apiList: [
        {
          gridName: '应用模块',
          gridList: [
            {
              name: '九宫格',
              key: 'Turntable',
              desc: '1代九宫格抽奖'
            },
            {
              name: '盒子',
              key: 'BoxIndex',
              desc: '盒子页面'
            },
            {
              name: '星云',
              key: 'NaList',
              desc: '原星云页面（暂不维护）'
            },
          ]
        },
        {
          gridName: '功能模块',
          gridList: [
            {
              name: 'appApi',
              key: 'AppApi',
              desc: '星云app接口调用方式'
            },
          ]
        },
      ]
    }
  },
  computed: {},
  created () {
    this.testAgent();
    setHeaderView(this)
  },
  methods: {
    testAgent () {
      // const isAppStatus = isApp()
      const isAppStatus = false
      const isWeixinStatus = isWeixin()

      if (isAppStatus) {
        this.userAgent = 'app'
      } else if (isWeixinStatus) {
        this.userAgent = 'weixin'
      } else {
        this.userAgent = 'h5'
      }
    },
    linkTo (e) {
      const key = e.currentTarget.dataset.key;
      // eval(`this.${key}(key)`)
      try {
        this.$router.push({
          name: key
        })
      } catch (error) {
        console.error(`不存在 ${key} 页面 !请确认是否配置正确`)
      }
    },
  }
}
</script>
