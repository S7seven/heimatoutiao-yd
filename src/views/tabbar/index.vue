<template>
  <div>
      <router-view/>
      <van-tabbar router
        v-model="active"
        active-color="rgb(251, 140, 255)"
        inactive-color="#000"
        >
        <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
        <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
</style>
