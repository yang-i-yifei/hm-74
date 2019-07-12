<template>
  <div class="container">
    <el-card class="login-box">
      <img src="../../assets/logo_index.png" alt />
      <el-form ref="loginForm" :model="loginForm">
        <!-- 表单每一项的容器 label="活动名称" 文字说明-->
        <el-form-item>
          <!-- 表单元素 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 表单元素 -->
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true" >我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        mobile: "",
        code: ""
      }
    };
  }
};
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  .login-box {
    width: 400px;
    height: 340px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 10px auto;
    }
  }
}
</style>
