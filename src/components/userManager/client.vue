<template>
	<div class="client">
    <!-- 面包屑导航 -->
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-menu"></i> 用户管理</el-breadcrumb-item>
				<el-breadcrumb-item>客户管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>

    <!-- 搜索框 -->
		<div class="handle-box">
			<el-input  v-model="select_word" placeholder="筛选关键词" class="handle-input"></el-input>
		</div>

    <!-- 表单数据 -->
		<el-table :data="tableData" border style="width: 100%" ref="multipleTable">
				<el-table-column type="index" width="50">
				</el-table-column>
				<el-table-column prop="name" label="姓名">
				</el-table-column>
				<el-table-column prop="client_number" label="客户编号">
				</el-table-column>
				<el-table-column prop="license_number" label="证件号" width="100">
				</el-table-column>
				<el-table-column prop="userphone" label="电话" width="120">
				</el-table-column>
				<el-table-column prop="frequency" label="已购票次数">
				</el-table-column>
				<el-table-column label="操作" width="120" class-name="pagination">
          <template slot-scope="scope">
            <el-button size="small" type="warning">订单查看</el-button>
          </template>
				</el-table-column>
		</el-table>
		<!-- <div class="pagination">
      <el-pagination @current-change ="handleCurrentChange" layout="prev, pager, next" :total="1000">
      </el-pagination>
		</div> -->
	</div>
</template>

<script>
export default {
  data() {
    return {
      url: "./static/vuetable.json",
      tableData: [{
          num : 1,
          name: "林丽",
          client_number:"001",
          license_number:"axf000000",
          phone: "18819259282",
          frequency:0,
          role : "机长"
        }],
      select_word: "",
      is_search: false,
    };
  },
  created() {
    this.getData();
  },
  computed: {
    data() {

    }
  },
  methods: {
    getData() {
      // // 用axios从json数据中获得数据数组
      // let self = this;
      // console.log(self);
      // self.$axios.get(self.url).then(res =>{
      //   self.tableData = res.data.list;
      //   for(let i = 0;i<self.tableData.length;i++){
      //     self.tableData[i].num = i+1;
      //   }
      //   console.log(self.tableData);
      // });
    },
    search() {
      this.is_search = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
.handle-box {
  margin-bottom: 20px
}
.handle-select {
  width: 120px;
}
.handle-input {
  width: 300px;
  display: inline-block;
  margin-right: 1.25rem;
}

.handle-but{
  margin-top: .625rem;
  margin-right: 1.25rem;
}
</style>
