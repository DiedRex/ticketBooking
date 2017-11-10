<template>
	<div class="table">
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-menu"></i> 用户管理</el-breadcrumb-item>
				<el-breadcrumb-item>客户管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="handle-box">
      <!-- <el-button type="primary" icon="el-icon-delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
			<el-button type="primary" icon="el-icon-plus" class="handle-del mr10">新增用户</el-button> -->
			<el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
			<el-button type="primary" icon="search" @click="search">搜索</el-button>
		</div>
		<el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column prop="num" label=""  width="80">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="160">
				</el-table-column>
				<el-table-column prop="client_number" label="客户编号" width="160">
				</el-table-column>
				<el-table-column prop="license_number" label="证件号" width="160">
				</el-table-column>
				<el-table-column prop="phone" label="电话" width="160">
				</el-table-column>
				<el-table-column prop="frequency" label="已购票次数" width="160">
				</el-table-column>
				<el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button size="small">拉黑</el-button>
            <el-button size="small" type="danger">取消拉黑</el-button>
            <el-button size="small" type="warning">订单查看</el-button>
          </template>
				</el-table-column>
		</el-table>
		<div class="pagination">
      <el-pagination @current-change ="handleCurrentChange" layout="prev, pager, next" :total="1000">
      </el-pagination>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      url: "./static/vuetable.json",
      tableData: [],
      cur_page: 1,
      multipleSelection: [],
      select_cate: "",
      select_word: "",
      del_list: [],
      is_search: false
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
    handleCurrentChange(val) {
      this.cur_page = val;
      this.getData();
    },
    getData() {
      let self = this;
      console.log(self);
      // if (process.env.NODE_ENV === "development") {
      //   self.url = "/ms/table/list";
      // }
      // self.$axios.post(self.url, { page: self.cur_page }).then(res => {
      //   self.tableData = res.data.list;
      // });
      self.$axios.get(self.url).then(res =>{
        self.tableData = res.data.list;
        for(let i = 0;i<self.tableData.length;i++){
          self.tableData[i].num = i+1;
        }
        console.log(self.tableData);
      });
    },
    search() {
      this.is_search = true;
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleEdit(index, row) {
      this.$message("编辑第" + (index + 1) + "行");
    },
    handleDelete(index, row) {
      this.$message.error("删除第" + (index + 1) + "行");
    },
    delAll() {
      const self = this,
        length = self.multipleSelection.length;
      let str = "";
      self.del_list = self.del_list.concat(self.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += self.multipleSelection[i].name + " ";
      }
      self.$message.error("删除了" + str);
      self.multipleSelection = [];
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
}
</style>
