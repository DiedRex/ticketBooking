<template>
  <div class="login-wrap">
    <div class="ms-title">{{this.type === '1' ? '后台管理系统' : '修改密码'}}</div>
    <div class="ms-login">
      <el-form :model="ruleForm" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username" v-if="this.type === '1'">
          <el-input v-model="ruleForm.username" placeholder="account"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword" v-if="this.type !== '1'">
          <el-input type="password" placeholder="new password" v-model="ruleForm.newPassword" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item prop="repeat" v-if="this.type !== '1'">
          <el-input type="password" placeholder="repeat password" v-model="ruleForm.repeat" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm">{{this.type === '1' ? '登录' : '修改'}}</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { HTTP } from '@/api/index'
export default {
  data: function() {
    return {
      ruleForm: {
        username: "",
        password: "",
        newPassword: "",
        repeat: ""
      }
    };
  },
  methods: {
    submitForm () {
      const self = this
      if (self.ruleForm.newPassword === self.ruleForm.repeat && self.ruleForm.password !== '' && self.ruleForm.newPassword !== '') {
        HTTP.post('/security/checkbyJson.action', {
          managername: self.ruleForm.username,
          manpassword: self.ruleForm.password
        }).then((res) => {
          self.$router.push("/readme")
        }).catch((err) => {
          console.log(err)
        })
      }
      self.$router.push("/readme")
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
