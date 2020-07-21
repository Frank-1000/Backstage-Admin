<template>
    <div class="statementList">
        <p class="title1">本期账户数</p>
         <el-table :data="tableData" border style="width: 800px">
      <el-table-column prop="date" label="账户(UID)"  align="center"></el-table-column>
      <el-table-column prop="name" label="合约"  align="center"></el-table-column>
      <el-table-column prop="address" label="时间"  align="center"></el-table-column>
      <el-table-column prop="liushui" label="流水类型"  align="center"></el-table-column>
      <el-table-column prop="weituo" label="委托量（张）"  align="center"></el-table-column>
      <el-table-column prop="jine" label="金额"  align="center"></el-table-column>
    </el-table>
    </div>
</template>
<script>

export default {
  data() {
    return {
      tableData: [
        {
          date: "100008",
          name: "ETH永续",
          address: "2020-05-25 14:19:05",
          liushui:"平仓手续费-挂单",
          weituo:0,
          jine:"-0.00000997"
        },
        {
          date: "100008",
          name: "ETH永续",
          address: "2020-05-25 14:19:05",
          liushui:"平仓手续费-挂单",
          weituo:2,
          jine:"-0.00000997"
        },
        {
          date: "100008",
          name: "ETH永续",
          address: "2020-05-25 14:19:05",
          liushui:"平仓手续费-挂单",
          weituo:5,
          jine:"-0.00000997"
        }
      ]
    }
  },
  created(){
    console.log('嘎嘎嘎 进来咯  财务记录详情')
  },
  methods: {
  
  }
}
</script>
<style lang="scss" scoped>
.statementList{
  .title1{
    width: 100px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
  }
   .title2{
    width: 150px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 80px;
  }
}
</style>