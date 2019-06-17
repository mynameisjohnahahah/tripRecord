<template>
  <div class="trend">
    <div class="trend-title">
      <h2>出行趋势</h2>
      <p>最近七天内，2种行程，8种出行方式的里程趋势折线图</p>
    </div>
    <lineChart ref="echart1" class="trend-echart" ></lineChart>
    <lineChart ref="echart2" class="trend-echart-btm" ></lineChart>
  </div>
</template>
<script>
import lineChart from '../components/lineChart'
import { Toast } from 'mand-mobile'
export default {
  name: 'Trend',
  components: {
    lineChart
  },
  data () {
    return {
      chart: null,
      xAxisData: ['11号', '12号', '13号', '14号', '15号', '16号', '17号'],
      trafficData: null,
      tripData: null,
      data1: {
        title: '私人出行',
        legendData: ['跑步', '徒步', '骑行', '自驾'],
        seriesData: [
          {
            name: '徒步',
            type: 'line',
            stack: '里程',
            data: [20, 132, 101, 134, 90, 330, 210]
          },
          {
            name: '跑步',
            type: 'line',
            stack: '里程',
            data: [150, 232, 201, 454, 190, 330, 410]
          },
          {
            name: '骑行',
            type: 'line',
            stack: '里程',
            data: [90, 122, 151, 124, 200, 210, 190]
          },
          {
            name: '自驾',
            type: 'line',
            stack: '里程',
            data: [189, 102, 230, 410, 287, 180, 200]
          }
        ]
      },
      data2: {
        title: '公共交通',
        legendData: ['步行', '单车', '出租', '公交'],
        seriesData: [
          {
            name: '步行',
            type: 'line',
            stack: '里程',
            data: [90, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '单车',
            type: 'line',
            stack: '里程',
            data: [150, 292, 201, 154, 190, 330, 410]
          },
          {
            name: '出租',
            type: 'line',
            stack: '里程',
            data: [90, 122, 151, 84, 80, 210, 190]
          },
          {
            name: '公交',
            type: 'line',
            stack: '里程',
            data: [89, 82, 230, 210, 387, 280, 100]
          }
        ]
      },
      allData: null
    }
  },
  mounted () {
    // Toast.loading('数据分析中...')
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$refs.echart1.echartsUpdata(this.data1, this.xAxisData)
      this.$refs.echart2.echartsUpdata(this.data2, this.xAxisData)
      // Toast.hide()
      // this.$http.get('/user/tripTrend', {}).then(res => {
      //   this.allData = res.data.data
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.trend {
  width: 100%;
  height: 100%;
  padding: 30px 30px;
  box-sizing: border-box;
  &-title {
    h2 {
      font-size: 40px;
      text-align: center;
    }
    p{
      color: #2f86f6;
      font-size: 25px;
      margin-top: 15px;
      text-align: center;
    }
  }
  &-echart{
    margin-top: 30px;
  }
  &-echart-btm{
    margin-top: 70px;
  }
}
</style>
