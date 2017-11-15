<template>
  <div class="login-wrap">
    <div class="ms-title">{{this.type === '1' ? '后台管理系统' : '注册'}}</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">{{this.type === '1' ? '登录' : '注册'}}</el-button>
        </div>
        <p class="tip" @click="changeType">{{this.type === '1' ? 'Tips : 还没有帐号?' : 'Tips : 已经有帐号了?'}}</p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm (formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("ms_username", self.ruleForm.username);
          self.$router.push("/readme");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    changeType () {
      this.type = this.type === '1' ? '2' : '1'
    }
  },
  props: {
    type: {
      default: '1'
    }
  }
};
</script>

<style lang="stylus" scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  .tip {
    display: inline-block
    font-size: 12px
    color: #999
    cursor: pointer
    margin-top: 0.5rem
    &:hover {
      text-decoration: underline
      color: rgba(57, 57, 243, 0.64)
    }
  }
}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: #fff
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
