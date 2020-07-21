<template>
    <div class="statementList">
        <p class="title1">永续合约账户</p>
         <el-table :data="tableData" border style="width: 700px">
      <el-table-column prop="date" label="币种"  align="center"></el-table-column>
      <el-table-column prop="name" label="可用资金"  align="center"></el-table-column>
      <el-table-column prop="address" label="冻结资金"  align="center"></el-table-column>
       <el-table-column prop="yingli" label="余额"  align="center"></el-table-column>
    </el-table>
     <p class="title2">币币账户</p>
        <el-table :data="tableData2" border style="width: 700px">
      <el-table-column prop="date" label="币种"  align="center"></el-table-column>
      <el-table-column prop="name" label="可用资金"  align="center"></el-table-column>
      <el-table-column prop="address" label="冻结资金"  align="center"></el-table-column>
       <el-table-column prop="yingli" label="余额"  align="center"></el-table-column>
    </el-table>
    </div>
</template>
<script>

export default {
  data() {
    return {
      tableData: [
        {
          date: "USDT",
          name: "10000.00",
          address: "11000.00",
          yingli:"110000.00"
        },
        {
          date: "BTC",
          name: "",
          address: "",
          yingli:""
        },
         {
          date: "ETH",
          name: "",
          address: "",
          yingli:""
        },
         {
          date: "LTC",
          name: "",
          address: "",
          yingli:""
        },
         {
          date: "EOS",
          name: "",
          address: "",
          yingli:""
        }
      ],
       tableData2: [
         {
          date: "USDT",
          name: "10000.00",
          address: "11000.00",
          yingli:"110000.00"
        },
        {
          date: "BTC",
          name: "",
          address: "",
          yingli:""
        },
         {
          date: "ETH",
          name: "",
          address: "",
          yingli:""
        },
         {
          date: "LTC",
          name: "",
          address: "",
          yingli:""
        },
         {
          date: "EOS",
          name: "",
          address: "",
          yingli:""
        }
      ]
    }
  },
  methods: {
  
  }
}
</script>
<style lang="scss" scoped>
.statementList{
  .title1{
    width: 150px;
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