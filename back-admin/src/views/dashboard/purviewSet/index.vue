<template>
  <div class="app-container">
    <div class="title">权限设置</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="zichan" label="编号"  align="center"></el-table-column>
      <el-table-column prop="ying" label="分组"  align="center"></el-table-column>
      <el-table-column prop="shou" label="权限"  align="center"></el-table-column>
      <el-table-column prop="lv" label="操作"  align="center">
        <template slot-scope="scope">
        <el-button type="primary"  @click="add(tableData[scope.$index])">设置</el-button>
                 </template>
        </el-table-column>
 
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          zichan:1,
          ying:"管理员",
          shou:"全部",
        },
         {
          zichan:2,
          ying:"客服部",
          shou:"客户管理、交易记录",
        },
         {
          zichan:3,
          ying:"运营部",
          shou:"客户订单、持仓、异常订单、操盘记录、交易记录",
        }
      ]
    }
  },
   created(){
    console.log('嘎嘎嘎 进来咯  异常订单')
  },
  methods: {
    //获取该行数据，触发“补足”指令  
    add(item){
      console.log(item)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container{
  .title{
    width: 80px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>