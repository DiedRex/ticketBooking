<template>
	<div class="table">
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-menu"></i> 用户管理</el-breadcrumb-item>
				<el-breadcrumb-item>人员管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="handle-box">
			<el-button type="primary" icon="el-icon-plus" class="handle-but" @click="addVisible=true">新增用户</el-button>
			<el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
		</div>
		<el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" scope="scope">
				<el-table-column type="index" width="50">
				</el-table-column>
				<el-table-column prop="encoding" label="角色编码">
				</el-table-column>
				<el-table-column prop="rolename" label="角色名称">
				</el-table-column>
				<el-table-column label="操作" width="240" class-name="pagination">
          <template slot-scope="scope">
            <el-button size="small" type="danger" class="zone">删除</el-button>
            <el-button size="small" class="zone">用户</el-button>
          </template>
				</el-table-column>
		</el-table>

        <!-- 新增角色信息录入 -->
    <el-dialog title="角色录入" :visible.sync="addVisible" class="dialog-body" width="40%" center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="角色编码" >
          <el-input v-model="form.encoding" class="set-width"></el-input>
        </el-form-item>
        <el-form-item label="角色名称">
          <el-select v-model="form.rolename" placeholder="请分配角色名称" class="set-width">
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
          user: "hj",
          name: "何静",
          phone:"18819259282",
          role : "机长"
        }],
      addVisible: false,
      select_word: "",
      is_search: false,
      form:{
        encoding:null,
        rolename:null
      }
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
  margin-top: .625rem;
  margin-right: 1.25rem;
}

.handle-but{
  margin-top: .625rem;
  margin-right: 1.25rem;
}

.alignCenter{
  text-align: center;
}
.zone{
  margin-bottom:5px;
  margin-right : 10px;
}

.set-width{
  width:100%;
}

</style>
