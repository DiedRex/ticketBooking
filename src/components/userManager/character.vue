<template>
	<div class="table">
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-menu"></i> 用户管理</el-breadcrumb-item>
				<el-breadcrumb-item>人员管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="handle-box">
			<el-button type="primary" icon="el-icon-plus" class="handle-but">新增用户</el-button>
			<el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
			<el-button type="primary" icon="el-icon-search" @click="search" class="handle-but mr10">搜索</el-button>
		</div>
		<el-table :data="tableData" border style="width: 70%" ref="multipleTable" @selection-change="handleSelectionChange" scope="scope">
				<el-table-column prop="num" label=""  width="80">
				</el-table-column>
				<el-table-column prop="role" label="角色编码" width="180">
				</el-table-column>
				<el-table-column prop="name" label="角色名称" width="180">
				</el-table-column>
				<el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" type="danger" class="zone">删除</el-button>
            <el-button size="small" class="zone">用户</el-button>
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
      tableData: [{
          num : 1,
          user: "ll",
          name: "林丽",
          phone: "18819259282",
          role : "机长"
        },
        {
          num : 1,
          user: "wm",
          name: "文敏",
          phone: "18819259282",
          role : "机长"
        },
        {
          num : 1,
          user: "yxl",
          name: "杨秀兰",
          phone:"18819259282",
          role : "机长"
        },
        {
          num : 1,
          user: "wq",
          name: "魏强",
          phone:"18819259282",
          role : "机长"
        },
        {
          num : 1,
          user: "sxl",
          name: "石秀兰",
          phone:"18819259282",
          role : "机长"
        },
        {
          num : 1,
          user: "zy",
          name: "朱洋",
          phone:"18819259282",
          role : "机长"
        },
        {
          num : 1,
          user: "fm",
          name: "傅敏",
          phone:"18819259282",
          role : "机长"
        },
        {
          num : 1,
          user: "mm",
          name: "毛明",
          phone:"18819259282",
          role : "机长"
        },
        {
          num : 1,
          user: "hj",
          name: "何静",
          phone:"18819259282",
          role : "机长"
        }],
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
  margin-top: .625rem;
  margin-left: .3125rem;
}

.handle-but{
  margin-top: .625rem;
  margin-left: .3125rem;
}

.pagination{
  text-align : center;
}
.zone{
  margin-bottom:5px;
  margin-left : 10px;
}
</style>
