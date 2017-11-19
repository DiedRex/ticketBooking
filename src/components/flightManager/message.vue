<template>
	<div class="message">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 航班管理</el-breadcrumb-item>
        <el-breadcrumb-item> 航班票价</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-container>
      <el-header style="height:100%">
        <div class="timeRange">
          <el-date-picker v-model="timeRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>

        <div class="position">
          <el-select v-model="beginPosition" placeholder="起飞地点">
            <el-option v-for="(position, index) in positions" :key="index" :label="position.label" :value="position.value">
            </el-option>
          </el-select>
          <span style="color:rgba(0, 0, 0, 0.26);">~</span>
          <el-select v-model="endPosition" placeholder="结束地点">
            <el-option v-for="(position, index) in positions" :key="index" :label="position.label" :value="position.value">
            </el-option>
          </el-select>
        </div>
        <div class="btn">
          <el-button type="primary" @click="reset">重置<i class="el-icon-refresh el-icon--right"></i></el-button>
        </div>
      </el-header>

      <el-main>
        <el-table border :data="getMessageData" style="width: 100%">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="airline" label="航空公司">
          </el-table-column>
          <el-table-column prop="Routeid" label="航线号">
          </el-table-column>
          <el-table-column prop="airtype" label="机型">
          </el-table-column>
          <el-table-column prop="Departure" label="出发地">
          </el-table-column>
          <el-table-column prop="destination" label="目的地">
          </el-table-column>
          <el-table-column prop="Depport" label="出发机场">
          </el-table-column>
          <el-table-column prop="desport" label="目的机场">
          </el-table-column>
          <el-table-column prop="deptime" label="出发时间">
          </el-table-column>
          <el-table-column prop="Destime" label="到达时间">
          </el-table-column>
          <el-table-column prop="vipprice" label="商务座价格">
          </el-table-column>
          <el-table-column prop="norprice" label="普通座价格">
          </el-table-column>
          <el-table-column prop="remarks" label="备注">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
	</div>
</template>

<script>
import { HTTP, time } from "@/api/index"
export default {
	name: 'message',
	data() {
		return {
			messageData: [{
        Routeid: '123', //航线号
        airline: '中航', //航空公司
        airtype: '大型', //机型
        Departure: '上海', //出发地
        destination: '北京', //目的地
        Depport: '早稻田', //出发机场
        desport: '银座', //目的机场
        deptime: '2016-05-02', //出发时间
        Destime: '2016-2-1', //到达时间
        vipprice: '1110', //商务座价格
        norprice: '1233', //普通座价格
        remarks: 'A31' //备注
      }],
      addVisible: false,
      timeRange: null,
      beginPosition: null,
      endPosition: null,
      positions: [{
        value: '上海',
        label: '黄金糕'
      }],
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      startPickerOptions: {
        disabledDate(time) {
          if (this.startTime !== null) {
            return time.getTime() > Date.now()
          }
          return true
        }
      },
      endPickerOptions: {
        disabledDate(time) {
          if (this.endTime) {
            return time.getTime() > Date.now()
          }
          return true
        }
      },
		}
  },
  created () {
    HTTP.post('/flightmanager/getRouteInf').then((res) => {
      console.log(this.res)
    }).catch((error) => {
			console.log(error)
		})
  },
  computed: {
    getMessageData () {
      let result = this.messageData

      if (this.timeRange !== null) {
        result = this.filter(result, this.timeRange, function (item, timeRange) {
          if(time(item.deptime, timeRange)) {
            return true
          }
          return false
        })
      }

      if (this.beginPosition !== null) {
        result = this.filter(result, this.beginPosition, function (item, beginPosition) {
          if(item.Departure === beginPosition) {
            return true
          }
          return false
        })
      }

      if (this.endPosition !== null) {
        result = this.filter(result, this.endPosition, function (item, endPosition) {
          if(item.destination === endPosition) {
            return true
          }
          return false
        })
      }

      console.log(result)

      return result
    }
  },
  methods: {
    reset () {
      this.timeRange = null
      this.beginPosition = null
      this.endPosition = null
    },
    filter (tableData, filter, fn) {
      return tableData.filter(function (item, index, array) {
        return fn(item, filter)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.crumbs {
  margin-bottom: 0
}
.el-row {
  .timeRange {
    width: 21.875rem
    margin-right: 1.25rem
    margin-top: 1.25rem
  }
  .position {
    width: 28.4375rem
    margin-right: 1.25rem
    margin-top: 1.25rem
  }
  .btn {
    width: 12.5rem
    margin-right: 1.25rem
    margin-top: 1.25rem
  }
}
.el-table {
  border-radius: .25rem
}
.el-dialog {
  .el-input {
    width: 95%
  }
  div.el-select {
    width: 95.5%
  }
  .time div .el-col {
    width: 95.5%
  }
}
</style>
