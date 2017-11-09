<template>
	<div class="order">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 订单管理</el-breadcrumb-item>
        <el-breadcrumb-item> 订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-header style="height:100%">
      <el-row>
        <el-col :span="6">
          <el-date-picker v-model="timeRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-col>

        <el-col :span="8">
          <el-select v-model="startPosition" placeholder="起飞地点">
            <el-option v-for="(position, index) in positions" :key="index" :label="position.label" :value="position.value">
            </el-option>
          </el-select>
          <span>~</span>
          <el-select v-model="endPosition" placeholder="结束地点">
            <el-option v-for="(position, index) in positions" :key="index" :label="position.label" :value="position.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-header>

    <el-table :data="getTableData" style="width: 100%">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column label="订单编号">
        <template slot-scope="scope">
          110501
        </template>
      </el-table-column>
      <el-table-column label="客户编号">
        <template slot-scope="scope">
          002
        </template>
      </el-table-column>
      <el-table-column label="航空公司">
        <template slot-scope="scope">
          中航
        </template>
      </el-table-column>
      <el-table-column label="航班号">
        <template slot-scope="scope">
          zh01
        </template>
      </el-table-column>
      <el-table-column label="机型">
        <template slot-scope="scope">
          波音
        </template>
      </el-table-column>
      <el-table-column label="出发城市">
        <template slot-scope="scope">
          广州
        </template>
      </el-table-column>
      <el-table-column label="到达城市">
        <template slot-scope="scope">
          上海
        </template>
      </el-table-column>
      <el-table-column label="起飞机场">
        <template slot-scope="scope">
          虹桥
        </template>
      </el-table-column>
      <el-table-column label="到达机场">
        <template slot-scope="scope">
          白云
        </template>
      </el-table-column>
      <el-table-column label="日期">
        <template slot-scope="scope">
          2017-11-06
        </template>
      </el-table-column>
      <el-table-column label="单程票价">
        <template slot-scope="scope">
          552
        </template>
      </el-table-column>
      <el-table-column label="座次">
        <template slot-scope="scope">
          08排5D
        </template>
      </el-table-column>
      <el-table-column label="订单状态">
        <template slot-scope="scope">
          已出票
        </template>
      </el-table-column>
    </el-table>
	</div>
</template>

<script>
export default {
	name: 'order',
	data() {
		return {
			tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      timeRange: null,
      startPosition: null,
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

      return this.tableData
    }
  },
  methods: {
    reset () {
      console.log(123)
      this.timeRange = null
      this.startPosition = null
      this.endPosition = null
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
