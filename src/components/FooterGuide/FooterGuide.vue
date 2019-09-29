<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:'/mSite'===$route.path}" @click="goto('/mSite')">
      <span class="item_icon">
        <i class="iconfont iconicon-test21"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="goto('/search')">
      <span class="item_icon">
        <i class="iconfont iconicon-test11"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goto('/order')">
      <span class="item_icon">
        <i class="iconfont iconicon-test7"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont iconicon-test34"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
