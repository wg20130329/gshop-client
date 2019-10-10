<template>
  <section class="profile">
    <HeaderTop title="我的"></HeaderTop>
    <div class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont iconicon-test34"></i>
        </div>
        <div class="user-info">
          <p>登录/注册</p>
          <p>
                <span class="user-icon">
                  <i class="iconfont iconshouji"></i>
                </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
            <i class="iconfont iconchangyongicon-"></i>
          </span>
      </router-link>
    </div>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont iconwodedingdan"></i>
            </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
                <i class="iconfont iconchangyongicon-"></i>
              </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont iconwodejifen-copy-copy"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
                <i class="iconfont iconchangyongicon-"></i>
          </span>
        </div>
      </a>
      <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont iconhuiyuanqia"></i>
        </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont iconchangyongicon-"></i>
          </span>
        </div>
      </a>
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont iconfuwuzhongxin"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <i class="iconfont iconchangyongicon-"></i>
          </span>
        </div>
      </a>
    </section>
  </section>
</template>
<script type="text/ecmascript-6">
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  components: {
    HeaderTop
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile //我的
    overflow hidden
    text-decoration none
    width 100%
    .profile-number
      margin-top 45.5px
      .profile-link
        clearFix()
        position relative
        display block
        background #02a774
        padding 20px 20px
        width 100%
        margin-left -10px
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          .iconicon-test34
            font-size 55px
            color #fff
        .user-info
          float left
          margin-top 8px
          margin-left 10px
          p
            font-weight: 700
            font-size 18px
            color #fff
            .user-icon
              display inline-block
              margin-right 5px
              width 20px
              height 20px
              .iconshouji
                font-size 15px
            .icon-mobile-number
              font-size 14px
              margin-left -15px
              color #fff
        .arrow
          width 12px
          height 12px
          position absolute
          right 15px
          top 40%
          .icon-jiantou1
            color #fff
            font-size 5px
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      height 100px
      width 100%
      background #fff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          text-decoration  none
          .info_data_top
            display block
            width 100%
            font-size 14px
            color #333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              color #f90
              font-weight 700
              line-height 30px
          .info_data_bottom
            display inline-block
            font-size 14px
            color #666
            font-weight 400
            padding-bottom 10px
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(3)
          border 0
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .my_order
        display flex
        align-items center
        padding-left 15px
        text-decoration  none
        height 60px
        >span
          display flex
          align-items center
          width 20px
          height 20pxpx
          >.iconfont
            margin-left -10px
            font-size 20px
          .iconshouji
            margin-left -15px
          .iconwodedingdan
            color #02a774
          .iconwodejifen-copy-copy
            color #ff5f3e
          .iconhuiyuanqia
            color #f90
          .iconfuwuzhongxin
            color #02a774
        .my_order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          color #333
          display flex
          justify-content space-between
          span
            display block
          .my_order_icon
            width 10px
            height 10px
            .iconchangyongicon-
              color #bbb
              font-size 30px
</style>
