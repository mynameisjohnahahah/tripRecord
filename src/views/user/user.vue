<template>
  <div class="user">
    <img class="user-bgimg" src="../../assets/img/user-bg.png">
    <div class="user-panel">
      <div v-if="userData" class="user-title">
        <div class="user-title-top">
          <img :src="userData.img" alt="">
          <div class="user-title-top-con">
            <p>{{userData.name}}</p>
            <p>账号:{{userData.userName}}</p>
          </div>
        </div>
        <div class="user-title-bottom">
          <p>
            <span>10</span>
            <span>好友</span>
          </p>
          <p>
            <span>10</span>
            <span>好友</span>
          </p>
          <p>
            <span>10</span>
            <span>好友</span>
          </p>
          <p>
            <span>10</span>
            <span>好友</span>
          </p>
        </div>
      </div>
      <div class="user-info">
        <div class="user-info-title">我的信息</div>
        <div class="user-info-box">
          <p @click="Navigation('userDetails')">
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>信息总览</span>
          </p>
          <p @click="Navigation('trend')">
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>出行趋势</span>
          </p>
          <p @click="Navigation('analysis')">
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>数据分析</span>
          </p>
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>成就</span>
          </p>
        </div>
      </div>
      <div class="user-info">
        <div class="user-info-title">我的信息</div>
        <div class="user-info-box">
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>信息总览</span>
          </p>
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>出行趋势</span>
          </p>
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>数据分析</span>
          </p>
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>成就</span>
          </p>
        </div>
        <div class="user-info-box">
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>信息总览</span>
          </p>
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>出行趋势</span>
          </p>
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>数据分析</span>
          </p>
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>成就</span>
          </p>
        </div>
        <div class="user-info-box">
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>数据分析</span>
          </p>
          <p>
            <svg-icon class="img-svg" icon-class="mileage"/>
            <span>数据分析</span>
          </p>
          <p>
            <!-- <svg-icon class="img-svg" icon-class="Analysis"/> -->
            <span></span>
          </p>
          <p>
            <!-- <svg-icon class="img-svg" icon-class="Medal"/> -->
            <span></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'User',
  data () {
    return {
      userData: null,
      headImg: '../../assets/img/head.jpeg'
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted () {
    this.userData = this.user
  },
  methods: {
    Navigation (item) {
      this.$router.push({ path: `/${item}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
  position: relative;
  color: #363030;
  &-bgimg {
    width: 100%
  }
  &-panel {
    width: 100%;
    height: 500px;
    padding: 0 40px 20px 40px;
    position: absolute;
    left: 0;
    top: 150px;
    box-sizing: border-box;
  }
  &-title {
    width: 100%;
    height: 300px;
    background: #fff;
    padding: 30px 20px;
    box-shadow: 0px 0px 3px #cac8c8;
    box-sizing: border-box;
    &-top {
      width: 100%;
      display: flex;
      justify-content: start;
      img {
        width: 140px;
        height: 140px;
        border-radius: 140px;
        box-shadow: 0px 0px 10px #cac8c8;
        margin-right: 30px;
      }
      .user-title-top-con {
        p:nth-child(1) {
          font-weight: bold;
          font-size: 30px;
          color: #1b1717;
          margin-top: 20px;
        }
        p:nth-child(2) {
          font-size: 20px;
          color: #383333;
          margin-top: 15px;
        }
      }
    }
    &-bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 35px;
      margin-top: 20px;
      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
  &-info {
    width: 100%;
    background: #fff;
    padding: 30px 20px;
    box-shadow: 0px 0px 3px #cac8c8;
    box-sizing: border-box;
    margin-top: 30px;
    &-title {
      font-size: 20px;
    }
    &-box {
      padding: 10px 20px;
      margin-top: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      p {
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        .img-svg {
          font-size: 50px;
          margin: auto;
        }
      }
    }
  }
}
</style>
