<template>
  <div class="app-container">
    <div class="title">划转记录</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="流水号" width="120" align="center"></el-table-column>
      <el-table-column prop="name" label="币种" width="150" align="center"></el-table-column>
      <el-table-column prop="address" label="类型" align="center"></el-table-column>
      <el-table-column prop="jun" label="划转比例"  align="center"></el-table-column>
      <el-table-column prop="zichan" label="数量"  align="center"></el-table-column>
      <el-table-column prop="ying" label="持仓时间"  align="center"></el-table-column>
      <el-table-column prop="shou" label="状态"  align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "5484564",
          name: "BTC",
          address: "转出到永续·合约",
          jun:"10%",
          zichan:"10",
          ying:"2020-05-16 17:52:53",
          shou:"已完成",
         
        },
         {
         date: "5484564",
          name: "BTC",
          address: "转出到永续·合约",
          jun:"10%",
          zichan:"10",
          ying:"2020-05-16 17:52:53",
          shou:"已完成",
        },
         {
          date: "5484564",
          name: "BTC",
          address: "转出到永续·合约",
          jun:"10%",
          zichan:"10",
          ying:"2020-05-16 17:52:53",
          shou:"已完成",
        }
      ]
    }
  },
   created(){
    console.log('嘎嘎嘎 进来咯  划转记录')
  },
  methods: {
    
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