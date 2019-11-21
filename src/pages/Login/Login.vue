<template>
    <div class="off">
        <section class="loginContainer">
            <div class="loginInner">
                <div class="login_header">
                    <h2 class="login_logo">硅谷外卖</h2>
                    <div class="login_header_title">
                        <a href="javascript:;" :class="{on:loginWay}" @click="loginWay= true">短信登录</a>
                        <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay= false">密码登录</a>
                    </div>
                </div>
                <div class="login_content">
                    <form @submit.prevent="login">
                        <div :class="{on:loginWay}">
                            <section class="login_message">
                                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                                <button :disabled="!rightPhone" class="get_verification"
                                        :class="{right_phone:rightPhone}"
                                        @click="getCode">{{computerTime > 0 ? '已发送' + computerTime + 's' : '获取验证码'}}</button>
                            </section>
                            <section class="login_verification">
                                <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
                            </section>
                            <section class="login_hint">
                                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                                <a href="javascript:;">《用户服务协议》</a>
                            </section>
                        </div>
                        <div :class="{on:!loginWay}">
                            <section>
                                <section class="login_message">
                                    <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
                                </section>
                                <section class="login_verification">
                                    <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                                  <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                                    <div class="switch_button " :class="showPwd ? 'on' : 'off'" @click="showPwd = !showPwd">
                                        <div class="switch_circle" :class="{right : showPwd}"></div>
                                        <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                                    </div>
                                </section>
                                <section class="login_message">
                                    <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                                    <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha">
                                </section>
                            </section>
                        </div>
                        <button class="login_submit" >登录</button>
                    </form>
                    <a href="javascript:;" class="about_us">关于我们</a>
                </div>
                <a href="javascript:" class="go_back" @click="$router.back()">
                    <i class="iconfont iconchangyongicon-1"></i>
                </a>
            </div>
        </section>
        <alert-tip :alert-text="alertText" v-show="alertShow" @closeTip="closeTip"></alert-tip>
    </div>
</template>
<script>
import AlertTip from '../../components/AlertTip/AlertTip'
import {reqPwdLogin, reqSendCode, reqSmsLogin} from '../../api'
export default {
  components: {AlertTip},
  data () {
    return {
      loginWay: true,     // 登录方式
      phone: '',          // 用户
      computerTime: 0,    // 用户
      showPwd: false,     // 用户
      pwd: '',            // 密码
      name: '',           // 用户
      captcha: '',        // 验证码
      code: '',           // 短信验证
      alertText: '',      //弹框文本
      alertShow: false    //是否弹框显示
    }
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    // 异步获取短信
    async getCode () {
      // 如果当前没有计时
      if (!this.computerTime) {
        this.computerTime = 30
        this.interValId = setInterval(() => {
          this.computerTime--
          if (this.computerTime <= 0) {
            clearInterval(this.interValId)
          }
        }, 1000)
      }
      // 发送ajax请求
      const result = await reqSendCode(this.phone)
      // 显示提示
      if (result.code === 1) {
        this.showAlert(result.msg)
      }
      // 停止倒计时
      if (this.computerTime) {
        this.computerTime = 0
        clearInterval(this.interval)
        this.interValId = 0
      }
    },
    // 弹框显示
    showAlert (alertTest) {
      this.alertShow = true
      this.alertText = alertTest
    },
    // 登录
    async login () {
      let result
      if (this.loginWay) {
        // eslint-disable-next-line no-unused-vars
        const {rightPhone, phone, code} = this
        if (!this.rightPhone) {
          /* 手机号不正确  */
          this.showAlert('手机号不正确')
          return
        } else if (!(/^\d{6}$/.test(code))) {
           console.log(!(/^1\d{6}$/.test(code)))
          // 验证码必须是6位数字
          this.showAlert('验证码必须是6位数字')
          return
        }
        //手机号短信登录
        result = await reqSmsLogin(phone, code);

      } else {
        const {name, pwd, captcha} = this
        if (!name) {
          this.showAlert('用户不正确')
          return
        } else if (!pwd) {
          this.showAlert('密码不正确')
          return
        } else if (!captcha){
          this.showAlert('验证码不正确')
          return
        }
        //账户登录
        result = await reqPwdLogin({name, pwd, captcha});
      }
      // 停止倒计时
      if (this.computerTime) {
        this.computerTime = 0
        clearInterval(this.interval)
        this.interValId = 0
      }
      //根据结果数据处理
      if (result.code === 0) {
        const user = result.data
        // 将user 保存到vuex的state
        //去个人中心
        await this.$router.replace('/profile')
      }else{
        const msg = result.msg
        this.showAlert(msg)
      }
    },
    // 确认 关闭弹框
    closeTip () {
      this.alertShow = false
      this.alertText = ''
    },
    // 获取验证码  每次点击必须路由变化，添加时间参数
    getCaptcha (event) {
      event.target.src = 'http://localhost:4000/captcha?time' + Date.now()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .loginContainer
        width 100%
        height 100%
        background #fff
        .loginInner
            padding-top 60px
            width 80%
            margin 0 auto
            .login_header
                .login_logo
                    font-size 40px
                    font-weight bold
                    color #02a774
                    text-align center
                .login_header_title
                    padding-top 40px
                    text-align center
                    >a
                        color #333
                        font-size 14px
                        padding-bottom 4px
                        &:first-child
                            margin-right 40px
                        &.on
                            color #02a774
                            font-weight 700
                            border-bottom 2px solid #02a774
            .login_content
                >form
                    >div
                        display none
                        &.on
                            display block
                        input
                            width 100%
                            height 100%
                            padding-left 10px
                            box-sizing border-box
                            border 1px solid #ddd
                            border-radius 4px
                            outline 0
                            font 400 14px Arial
                            &:focus
                                border 1px solid #02a774
                        .login_message
                            position relative
                            margin-top 16px
                            height 48px
                            font-size 14px
                            background #fff
                            .get_verification
                                position absolute
                                top 50%
                                right 10px
                                transform translateY(-50%)
                                border 0
                                color #ccc
                                font-size 14px
                                background transparent
                                &.right_phone
                                    color black
                        .login_verification
                            position relative
                            margin-top 16px
                            height 48px
                            font-size 14px
                            background #fff
                            .switch_button
                                font-size 12px
                                border 1px solid #ddd
                                border-radius 8px
                                transition background-color .3s,border-color .3s
                                padding 0 6px
                                width 30px
                                height 16px
                                line-height 16px
                                color #fff
                                position absolute
                                top 50%
                                right 10px
                                transform translateY(-50%)
                                &.off
                                    background #fff
                                    .switch_text
                                        float right
                                        color #ddd
                                &.on
                                    background #02a774
                                >.switch_circle
                                    //transform translateX(27px)
                                    position absolute
                                    top -1px
                                    left -1px
                                    width 16px
                                    height 16px
                                    border 1px solid #ddd
                                    border-radius 50%
                                    background #fff
                                    box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                                    transition transform .3s
                                    &.right
                                      transform translateX(30px)
                        .login_hint
                            margin-top 12px
                            color #999
                            font-size 14px
                            line-height 20px
                            >a
                                color #02a774
                    .login_submit
                        display block
                        width 100%
                        height 42px
                        margin-top 30px
                        border-radius 4px
                        background #4cd96f
                        color #fff
                        text-align center
                        font-size 16px
                        line-height 42px
                        border 0
                .about_us
                    display block
                    font-size 12px
                    margin-top 20px
                    text-align center
                    color #999
            .go_back
                position absolute
                top 5px
                left 5px
                width 30px
                height 30px
                >.iconfont
                    font-size 25px
                    color #999
</style>
