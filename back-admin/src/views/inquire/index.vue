<template>
  <div style="padding:30px;" class="inquire">
    <div class="sreach-box">
      <input type="text" placeholder="姓名/Access Key" v-model="inputVal" />
      <el-button type="primary" class="sreachBtn" @click="inquire">查询</el-button>
    </div>
    <div class="binding-box">
      <div class="name-box">
        <span>姓名</span>
        <div class="aaaa">{{userName}}</div>
      </div>
      <div class="name-box">
        <span>Access Key</span>
        <div class="aaaa">{{Access_key}}</div>
      </div>
      <div class="name-box">
        <span>Secret Key</span>
        <div class="aaaa">{{Secret_Key}}</div>
      </div>
      <div class="name-box">
        <span>有效期</span>
        <div class="aaaa">{{time}}</div>
      </div>
      <div class="status">
        <p>操盘状态</p>
        <label>
          <input type="radio" v-model="state" value="2" />开启
        </label>
        <label>
          <input type="radio" v-model="state" value="1" class="close" />关闭
        </label>
      </div>
      <div class="submit">
        <el-button type="info" @click="del">删除</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputVal: "",
      state: 1,
      userName: "",
      Access_key: "",
      Secret_Key: "",
      time: ""
    };
  },
  methods: {
    inquire() {
      alert("这里是查询");
    },
    del() {
      alert("这是删除按钮！");
    },
    save() {
      console.log("这里是保存按钮！");
      var objct = {};
      objct.userName = this.userName;
      objct.Access_key = this.Access_key;
      objct.Secret_Key = this.Secret_Key;
      objct.state = this.state;
      objct.time = this.time;
      console.log(objct);
    }
  }
};
</script>
<style lang="scss" scoped>
.inquire {
  .sreach-box {
    width: 400px;
    height: 60px;
    line-height: 60px;
    // border: 1px solid #222;
    margin: 0 auto;
    input {
      float: left;
      width: 300px;
      height: 30px;
      margin-top: 5px;
    }
    .sreachBtn {
      float: right;
    }
  }
  .binding-box {
    width: 450px;
    height: 600px;
    // border: 1px solid #222;    
    margin: 50px;
  }
  .name-box {
    width: 100%;
    height: 80px;
    line-height: 80px;
    //    border: 1px solid #222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .aaaa {
      width: 300px;
      height: 40px;
      border-bottom: 1px solid #ccc;
      line-height: 40px;
      text-align: center;
    }
  }
  .status {
    width: 100%;
    height: 80px;
    line-height: 80px;
    //   border: 1px solid #222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      float: left;
    }
    label {
      float: left;
      input {
        margin-right: 10px;
      }
    }
  }
  .submit {
    width: 60%;
    height: 80px;
    line-height: 80px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
