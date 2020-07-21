<template>
  <div style="padding:30px;" class="binding">
    <p class="title1">绑定API</p>
    <div class="binding-box">
      <div class="name-box">
        <span>姓名</span>
        <input type="text" v-model="userName"/>
      </div>
      <div class="name-box">
        <span>Access Key</span>
        <input type="text" v-model="Access_Key"/>
      </div>
      <div class="name-box">
        <span>Secret Key</span>
        <input type="text" v-model="Secret_Key"/>
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
      <div class="submit" @click="submit">提交</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      state: 2,
      userName:'',
      Access_Key:'',
      Secret_Key:''
    }
  },
  methods: {
    //  
    submit(){
         var objct={};
         objct.userName=this.userName;
         objct.Access_Key=this.Access_Key;
         objct.Secret_Key=this.Secret_Key;
         objct.state=this.state;
         console.log(objct)
         if(this.state!=''&&this.Secret_Key!=''&& this.Access_Key!=''&&this.userName!=''){
           alert('提交成功')
            this.$router.push("/admin/adminter");
         }else{
           this.$message({
          showClose: true,
          message: '请完善信息！'
        });
         }
    }
  }
}
</script>
<style lang="scss" scoped>
.binding {
  .title1 {
    width: 100px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
  }
  .binding-box {
    width: 450px;
    height: 500px;
    //   border: 1px solid #222; 
    margin: 10px auto;
  }
  .name-box {
    width: 100%;
    height: 80px;
    line-height: 80px;
    //    border: 1px solid #222; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 300px;
      height: 40px;
    }
  }
  .status {
    width: 100%;
    height: 80px;
    line-height: 80px;
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
    width: 300px;
    margin-left: 150px;
    margin-top: 35px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    background: #169bd5;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }
}
</style>
