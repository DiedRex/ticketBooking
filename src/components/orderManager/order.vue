<template>
	<div class="order">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 订单管理</el-breadcrumb-item>
        <el-breadcrumb-item> 订单</el-breadcrumb-item>
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
          <el-button type="primary" @click="addVisible = true">录入<i class="el-icon-circle-plus-outline el-icon--right"></i></el-button>
        </div>
      </el-header>

      <el-main>
        <el-table border :data="getOrderData" style="width: 100%">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="OrderId" label="订单号">
          </el-table-column>
          <el-table-column prop="UserId" label="用户名">
          </el-table-column>
          <el-table-column prop="airline" label="航空公司">
          </el-table-column>
          <el-table-column prop="Routedid" label="航线号">
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
          <el-table-column prop="fare" label="费用">
          </el-table-column>
          <el-table-column prop="Seatnum" label="座位号">
          </el-table-column>
          <el-table-column prop="State" label="付款状态">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

    <el-dialog title="录入航班" :visible.sync="addVisible" width="30%" center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="航班公司">
          <el-input v-model="form.business"></el-input>
        </el-form-item>
        <el-form-item label="航班号">
          <el-input v-model="form.number"></el-input>
        </el-form-item>

        <el-form-item label="起飞城市">
          <el-select v-model="form.beginPosition" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="到达城市">
          <el-select v-model="form.endPosition" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="航班时间">
          <el-time-picker is-range v-model="form.time" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
          </el-time-picker>
        </el-form-item>

        <el-form-item label="时长">
          <el-input disabled v-model="form.spentTime"></el-input>
        </el-form-item>
        <el-form-item class="time" label="日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addOrder">确 定</el-button>
        <el-button @click="addVisible = false">取 消</el-button>
      </span>
    </el-dialog>
	</div>
</template>

<script>
import { HTTP, time } from "@/api/index"
export default {
	name: 'order',
	data() {
		return {
			orderData: [{
        OrderId: '123', //订单号
        UserId: '123', //用户名
        airline: '中航', //航空公司
        airtype: '大型', //机型
        Routedid: '波音', //航线号
        Departure: '上海', //出发地
        destination: '北京', //目的地
        Depport: '早稻田', //出发机场
        desport: '银座', //目的机场
        fare: '1110', //费用
        Seatnum: 'A31', //座位号
        State: '未付款', //付款状态
        deptime: '2017-1' //出发时间
      }],
      addVisible: false,
      timeRange: null,
      beginPosition: null,
      endPosition: null,
      positions: [{
        value: '上海',
        label: '上海'
      }],
      form: {
        business: null,
        number: null,
        date: null,
        beginPosition: null,
        endPosition: null,
        spentTime: null,
        time: null
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
      }
		}
  },
  created () {
    HTTP.post('/ordermanager/getorderInf').then((res) => {
      console.log(this.res)
    }).catch((error) => {
			console.log(error)
		})
  },
  computed: {
    getOrderData () {
      let result = this.orderData

      if (this.timeRange !== null) {
        result = this.filter(result, this.timeRange, function (item, timeRange) {
          if(time(item.deptime, timeRange)) {
            return true
          }
          return false
        })
      }

      if (this.beginPosition !== null) {
        console.log(this.beginPosition)
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
    },
    addOrder () {
      HTTP.post('/ordermanager/addorderInf', {

      }).then((res) => {

      }).catch((error) => {
        console.log(error)
      })
      this.addVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
