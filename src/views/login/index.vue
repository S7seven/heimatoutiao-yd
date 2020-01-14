<template>
  <div class="login">
    <van-nav-bar title="登录"/>
    <van-cell-group>
      <van-field v-model="user.mobile" label="手机号" placeholder="请输入手机号"/>
      <!-- <van-field label="验证码" placeholder="请输入验证码"/> -->
      <van-field v-model="user.code" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-count-down
          v-if="isCountDownShow"
          slot="button"
          :time="1000 * 60"
          format="ss s"
          @finish="isCountDownShow = false"
        />
      <van-button
      v-else slot="button"
      size="small"
      type="primary"
      round
      @click="onSendSmsCode"
      >发送验证码</van-button>
  </van-field>
    </van-cell-group>
    <div class="login-but">
      <van-button type="info" class="denglu" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user'

export default {
  data () {
    return {
      user: {
        code: '246810',
        mobile: '13911111111'
      },
      isCountDownShow: false
    }
  },
  methods: {
    async onLogin () {
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      const user = this.user
      try {
        const res = await login(user)
        this.$store.commit('setUser', res.data.data)
        // console.log(res)
        this.$toast.success('登陆成功')
        this.$router.push('/')
      } catch (err) {
        console.log('登录失败', err)
        this.$toast.fail('登录失败，手机号或验证码错误！')
      }
    },
    async onSendSmsCode () {
      // 1. 获取手机号
      const { mobile } = this.user
      // 2. 校验手机号是否有效

      // 3. 发送验证码
      try {
        // 显示倒计时
        this.isCountDownShow = true

        // 发送
        await getSmsCode(mobile)
      } catch (err) {
        console.log(err)

        // 发送失败，关闭倒计时
        this.isCountDownShow = false

        if (err.response.status === 429) {
          this.$toast('请勿频繁发送')
          return
        }
        this.$toast('发送失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
  .login {
    .login-but {
      padding: 20px;
      .denglu {
        width: 100%;
      }
    }
  }
</style>
