<template>
  <div class="trip">
    <div v-show="$route.name !== 'Map'" class="trip-info">
      <img class="trip-bg" src="../../assets/img/bg.png" alt>
      <div class="trip-con">
        <md-tabs v-model="TripWay">
          <md-tab-pane name="跑步" label="跑步"></md-tab-pane>
          <md-tab-pane name="骑行" label="骑行"></md-tab-pane>
          <md-tab-pane name="自驾" label="自驾"></md-tab-pane>
        </md-tabs>
        <div class="trip-border">
          <p>累计{{TripWay}}</p>
          <strong>{{distance}}</strong>
          <p>本月{{TripWay}}{{distance}}公里>></p>
        </div>
        <div class="trip-button" @click="Navigation">开始{{TripWay}}</div>
      </div>
    </div>
    <transition name="fademap">
      <div v-if="$route.name === 'Map'" class="trip-map">
        <router-view/>
      </div>
    </transition>
  </div>
</template>
<script>
// import { Tabs, TabPane, Button } from 'mand-mobile'
import { mapGetters } from 'vuex'
export default {
  name: 'trip',
  data () {
    return {
      TripWay: '跑步', // 出行方式
      // allDistanceData: null, // 当前出行总里程
      distance: '0.0',
    }
  },
  computed: {
    allDistanceData () {
      return this.userDistance
    },
    ...mapGetters(['userDistance'])
  },
  watch: {
    '$route' (to) {
      this.updataDistance(this.TripWay)
    },
    TripWay: {
      handler (val) {
        this.updataDistance(val)
      },
      immediate: true
    }
  },
  methods: {
    updataDistance (val) {
      switch (val) {
        case '徒步':
          this.distance = this.allDistanceData.allWalk
          break
        case '跑步':
          this.distance = this.allDistanceData.allRun
          break
        case '骑行':
          this.distance = this.allDistanceData.allCycle
          break
        case '自驾':
          this.distance = this.allDistanceData.allDrive
          break
      }
    },
    Navigation () {
      this.$router.push({ name: 'Map', params: { tripType: this.TripWay } })
    }
    /** ajax */
    // allDistanceAjax () {
    //   this.$http.get('/trip/allDistance', {}).then(res => {
    //     this.allDistanceData = res.data.data
    //     this.distance = this.allDistanceData.allWalk
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.trip {
  width: 100%;
  height: 100%;
  &-con {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    color: #545454;
  }
  &-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  &-border {
    margin: 100px auto;
    width: 450px;
    height: 450px;
    border: 8px dashed #c5d1d3;
    border-bottom: none;
    border-radius: 450px;
    p {
      font-size: 28px;
      text-align: center;
      margin-top: 80px;
      letter-spacing: 2px;
    }
    p:nth-child(3) {
      margin-top: 50px;
      color: #9a9b9b;
      text-decoration: underline;
    }
    strong {
      font-size: 130px;
      text-align: center;
      display: block;
      margin-top: 20px;
      color: #696969;
    }
  }
  &-button {
    margin: 0 auto;
    width: 500px;
    height: 100px;
    border-radius: 500px;
    background: #47b3f5;
    color: #fff;
    font-size: 40px;
    text-align: center;
    line-height: 100px;
  }
}
.fademap-enter {
  opacity: 0;
}
.fademap-enter-active {
  transition: all 0.3s;
}
.fademap-leave-to {
  opacity: 0;
}
.fademap-leave-active {
  transition: all 0.3s;
}
</style>
<style lang="scss">
.md-tab-bar {
  background-color: transparent;
}
</style>
