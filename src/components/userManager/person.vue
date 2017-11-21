<template>
	<div class="person">
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-menu"></i> 用户管理</el-breadcrumb-item>
				<el-breadcrumb-item>人员管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="handle-box">
			<el-button type="primary" icon="el-icon-plus" class="handle-but"  @click="addVisible=true">新增用户</el-button>
			<el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
		</div>
		<el-table :data="getTabledata" border style="width: 100%;margin-top:1rem" ref="multipleTable" @selection-change="handleSelectionChange" scope="scope">
				<el-table-column type="index" width="50">
        </el-table-column>
				<el-table-column prop="name" label="姓名" >
				</el-table-column>
				<el-table-column prop="user" label="用户名" >
				</el-table-column>
				<el-table-column prop="phone" label="电话" width="200">
				</el-table-column>
				<el-table-column prop="role" label="角色">
				</el-table-column>
				<el-table-column label="操作" width="300" class-name="pagination">
          <template slot-scope="scope">
            <el-button size="small">编辑</el-button>
            <el-button size="small" type="danger">删除</el-button>
            <el-button size="small" type="warning">密码重置</el-button>
          </template>
				</el-table-column>
		</el-table>

    <el-dialog title="录入人员" :visible.sync="addVisible" class="dialog-body" width="40%" center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名" >
          <el-input v-model="form.name" class="set-width"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username" class="set-width"></el-input>
        </el-form-item>

        <el-form-item label="电话">
          <el-input v-model="form.phone" class="set-width"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" class="set-width"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.passwordagain" class="set-width"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.role" placeholder="请分配用户角色" class="set-width">
            <el-option label="管理员"></el-option>
            <el-option label="机长"></el-option>
            <el-option label="乘务员"></el-option>
            <el-option label="安检人员"></el-option>
            <el-option label="技术人员"></el-option>
            <el-option label="后勤人员"></el-option>
          </el-select>
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
  name: 'person',
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
        }],//表单数据
      addVisible: false,
      cur_page: 1,//分页
      multipleSelection: [],
      select_cate: "",
      select_word: "",
      del_list: [],
      is_search: false,
      //dialog表单数据
      form: {
        name: null,
        username: null,
        phone: null,
        role: null,
        password: null,
        passwordagain: null,
      }
    };
  },
  computed: {
    getTabledata() {
      let result = this.tableData;
      //更新的是newTabledata
      if(this.is_search&&this.select_word !== null){
        result = this.isSearch(this.tableData,this.select_word,function(item,word){
          if(item){
            console.log(item)
            console.log(word)
            return true
          }
          return false
        });
      }
      console.log(result);
      return result;
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.cur_page = val;
      this.getData();
    },
    isSearch(tableData, filter, fn){
      return tableData.filter(function(item,index,array){
        console.log(index);
        return fn(item,filter);
      })
    },
    // getData() {
    //   // // 用axios从json数据中获得数据数组
    //   // let self = this;
    //   // console.log(self);
    //   // self.$axios.get(self.url).then(res =>{
    //   //   self.tableData = res.data.list;
    //   //   for(let i = 0;i<self.tableData.length;i++){
    //   //     self.tableData[i].num = i+1;
    //   //   }
    //   //   console.log(self.tableData);
    //   // });
    // },
    search(){
      this.is_search = true;
    },
    resetForm(){
      this.form.name =null;
      this.form.username = null;
      console.log(this.form);
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
.handle-select {
  width: 7.5rem;
}
.handle-input {
  width: 18.75rem;
  display: inline-block;
  margin-top: .625rem;
  margin-right: 1.25rem;
}

.handle-but{
  margin-top: .625rem;
  margin-right: 1.25rem;
  margin-left: 0;
}

.pagination{
  text-align : center
}

.set-width{
  width:100%;
}

.dialog-body{
  padding : 25px 35px 0px 27px;
}
</style>
