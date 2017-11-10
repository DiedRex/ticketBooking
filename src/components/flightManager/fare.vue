<template>
	<div class="fare">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 航班管理</el-breadcrumb-item>
        <el-breadcrumb-item> 航班票价</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-header style="height:100%">
      <el-row>
        <el-col class="timeRange">
          <el-date-picker v-model="timeRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-col>

        <el-col class="position">
          <el-select v-model="startPosition" placeholder="起飞地点">
            <el-option v-for="(position, index) in positions" :key="index" :label="position.label" :value="position.value">
            </el-option>
          </el-select>
          <span style="color:rgba(0, 0, 0, 0.26);">~</span>
          <el-select v-model="endPosition" placeholder="结束地点">
            <el-option v-for="(position, index) in positions" :key="index" :label="position.label" :value="position.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="btn">
          <el-button type="primary" @click="reset">重置<i class="el-icon-refresh el-icon--right"></i></el-button>
          <el-button type="primary" @click="addVisible = true">录入<i class="el-icon-circle-plus-outline el-icon--right"></i></el-button>
        </el-col>
      </el-row>
    </el-header>

    <el-table border :data="getTableData" style="width: 100%">
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
      <el-table-column label="日期" width="100">
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

    <el-dialog title="录入航班" :visible.sync="addVisible" width="30%" center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="航班公司">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="航班号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="起飞城市">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="到达城市">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="航班时间">
          <el-col :span="11">
            <el-date-picker type="fixed-time" placeholder="开始时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" style="text-align:center" :span="1">-</el-col>
          <el-col :span="11">
            <el-date-picker type="fixed-time" placeholder="结束时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="时长">
          <el-input disabled v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item class="time" label="日期">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
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
export default {
	name: 'fare',
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
      addVisible: false,
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
