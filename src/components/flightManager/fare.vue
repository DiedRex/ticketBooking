<template>
	<div class="fare">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 航班管理</el-breadcrumb-item>
        <el-breadcrumb-item> 航班票价</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-container>
      <el-aside width="250px">
        <div class="asider-title">
          <p>123dsadasdasdsad</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </div>
      </el-aside>

      <el-main>
        <el-form ref="form" :label-position="'left'" :model="form" label-width="100px">
          <div class="left-form">
            <el-form-item label="航班公司">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="机型">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="到达城市">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="到达时间">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>
          <div class="right-form">
            <el-form-item label="航班号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="起飞城市">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="起飞时间">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="日期">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>

        </el-form>

        <el-table border :data="getTableData" style="width: 100%">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column label="类型">
            <template slot-scope="scope">
              110501
            </template>
          </el-table-column>
          <el-table-column label="星期一">
            <template slot-scope="scope">
              002
            </template>
          </el-table-column>
          <el-table-column label="星期二">
            <template slot-scope="scope">
              中航
            </template>
          </el-table-column>
          <el-table-column label="星期三">
            <template slot-scope="scope">
              zh01
            </template>
          </el-table-column>
          <el-table-column label="星期四">
            <template slot-scope="scope">
              波音
            </template>
          </el-table-column>
          <el-table-column label="星期五">
            <template slot-scope="scope">
              广州
            </template>
          </el-table-column>
          <el-table-column label="星期六">
            <template slot-scope="scope">
              上海
            </template>
          </el-table-column>
          <el-table-column label="星期日">
            <template slot-scope="scope">
              虹桥
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

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
	},
  computed: {
    getTableData () {

      return this.tableData
    }
  },
  methods: {
    reset () {
      this.timeRange = null
      this.startPosition = null
      this.endPosition = null
    }
  }
}
</script>

<style lang="stylus" scoped>
.fare {
  .el-container {
    margin-top: 3rem
  }
  .el-main {
    .el-form {
      text-align: center
      .left-form, .right-form {
        display: inline-block
        width: 35%
      }
      .left-form {
        margin-right: 15rem
      }
    }
  }
  .el-aside {
    margin-right: 3rem
    .asider-title {
      font-size: 2rem
      background: white
      color: #878d99
      border: .0625rem solid #e6ebf5
      p {
        height: 4rem
        padding: 1rem
        border-top: .0625rem solid #e6ebf5
        overflow: hidden
        word-break: break-all
        &:first-child {
          border-top: 0
        }
      }
    }
  }

}
</style>
