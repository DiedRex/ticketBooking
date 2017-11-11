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
        <el-table border :data="getTableData" style="width: 100%">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="orderNumber" label="订单编号">
          </el-table-column>
          <el-table-column prop="clientNumber" label="客户编号">
          </el-table-column>
          <el-table-column prop="business" label="航空公司">
          </el-table-column>
          <el-table-column prop="flightNumber" label="航班号">
          </el-table-column>
          <el-table-column prop="type" label="机型">
          </el-table-column>
          <el-table-column prop="beginCity" label="出发城市">
          </el-table-column>
          <el-table-column prop="endCity" label="到达城市">
          </el-table-column>
          <el-table-column prop="beginFilght" label="起飞机场">
          </el-table-column>
          <el-table-column prop="endFilght" label="到达机场">
          </el-table-column>
          <el-table-column prop="date" label="日期" width="100">
          </el-table-column>
          <el-table-column prop="onceMoney" label="单程票价">
          </el-table-column>
          <el-table-column prop="position" label="座次">
          </el-table-column>
          <el-table-column prop="status" label="订单状态">
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
        <el-button type="primary" @click="addVisible = false">确 定</el-button>
        <el-button @click="addVisible = false">取 消</el-button>
      </span>
    </el-dialog>
	</div>
</template>

<script>
import { HTTP } from "@/api/index"
export default {
	name: 'order',
	data() {
		return {
			tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        beginPosition: '上海'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        beginPosition: '上海'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        beginPosition: '上海'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        beginPosition: '上海'
      }],
      addVisible: false,
      timeRange: null,
      beginPosition: null,
      endPosition: null,
      positions: [{
        value: '上海',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
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
      },
		}
  },
  computed: {
    getTableData () {
      let result = []

      if (this.timeRange !== null) {
        result = this.filter(this.tableData, this.timeRange, function (item, timeRange) {
          if((item.date >= timeRange[0]) && (item.date <= timeRange[1])) {
            return true
          }
          return false
        })
      }

      if (this.beginPosition !== null) {
        result = this.filter(this.tableData, this.timeRange, function (item, beginPosition) {
          if(item.beginPosition === beginPosition) {
            return true
          }
          return false
        })
      }

      if (this.endPosition !== null) {
        result = this.filter(this.tableData, this.timeRange, function (item, endPosition) {
          if(item.endPosition === endPosition) {
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
      this.startPosition = null
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
</style>
