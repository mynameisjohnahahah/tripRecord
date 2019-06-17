<template>
  <div class="me">
    <img class="me-bgimg" src="../../assets/img/user-bg.png">
    <div v-if="userData" class="me-top">
      <span @click="loginOutOnClick" class="me-top-out">退出登录</span>
      <img class="me-top-headimg" :src="userData.img" alt>
      <p class="me-top-name">{{userData.name}}</p>
      <p class="me-top-phone">账号:{{userData.userName}}</p>
      <div class="me-top-bottom">
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
    <div v-if="userData" class="me-info">
      <h2>个人信息</h2>
      <div class="me-info-user">
        <p>
          <span>性别：</span>
          <span>{{userData.sex}}</span>
        </p>
        <p>
          <span>年龄：</span>
          <span>{{userData.age}}</span>
        </p>
        <p>
          <span>家乡：</span>
          <span>{{userData.address}}</span>
        </p>
        <p>
          <span>情感状况：</span>
          <span>{{userData.Marriage}}</span>
        </p>
        <p>
          <span>身份：</span>
          <span>{{userData.identity}}</span>
        </p>
      </div>
      <h2>出行里程</h2>
      <div class="me-info-data">
        <echart ref="echart" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mand-mobile'
import echart from './components/echart'
export default {
  name: 'UserDetails',
  components: {
    echart
  },
  data () {
    return {
      userData: null,
      distanceArr: [] // 出行里程汇总
    }
  },
  computed: {
    ...mapGetters(['user', 'userDistance'])
  },
  mounted () {
    this.userData = this.user
    delete this.userDistance.userId
    this.distanceArr = Object.values(this.userDistance)
    this.$nextTick(() => {
      this.$refs.echart.initChart(this.distanceArr)
    })
  },
  methods: {
    loginOutOnClick () {
      localStorage.removeItem('user')
      this.setUser(null)
      Toast.succeed(`登录状态已清除`, 1500)
      this.$router.push({ path: '/login' })
    },
    ...mapActions(['setUser'])
  }
}
</script>

<style lang="scss" scoped>
.me {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  &-bgimg {
    width: calc(100%+540px);
    height: 470px;
    margin-left: -120px;
  }
  &-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 470px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgba(0,0,0,0.4);
    &-out {
      position: absolute;
      top: 30px;
      right: 30px;
      color: #fff;     
    }
    &-headimg {
      width: 140px;
      height: 140px;
      margin-top: 50px;
      border-radius: 140px;
    }
    &-name {
      color: #ffffff;
      font-weight: bold;
      font-size: 30px;
      margin-top: 10px;
    }
    &-phone {
      color: #ffffff;
      font-size: 28px;
      margin-top: 10px;
    }
    &-bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 40px;
      margin-top: 20px;
      color: #fff;
      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
  &-info {
    padding: 40px 40px;
    box-sizing: border-box;
    &-user {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      padding-top: 20px;
      p {
        min-width: 200px;
        height: 60px;
        font-size: 20px;
      }
      span:nth-child(2) {
        color: #000
      }
    }
  }
}
</style>
