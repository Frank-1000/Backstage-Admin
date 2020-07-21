<template>
    <div class="statementList">
        <p class="title1">本期账户数</p>
         <el-table :data="tableData" border style="width: 500px">
      <el-table-column prop="date" label="当前操盘"  align="center"></el-table-column>
      <el-table-column prop="name" label="当前绑定"  align="center"></el-table-column>
      <el-table-column prop="address" label="操盘比例"  align="center"></el-table-column>
    </el-table>
     <p class="title2">本期操盘资金</p>
        <el-table :data="tableData2" border style="width: 600px">
      <el-table-column prop="date" label="初始资金 (USDT)"  align="center"></el-table-column>
      <el-table-column prop="name" label="剩余资金 (USDT)"  align="center"></el-table-column>
      <el-table-column prop="address" label="盈利 (USDT)"  align="center"></el-table-column>
       <el-table-column prop="yingli" label="盈利比"  align="center"></el-table-column>

    </el-table>
    </div>
</template>
<script>

export default {
  data() {
    return {
      tableData: [
        {
          date: 28,
          name: 30,
          address: "93.256%"
        }
      ],
       tableData2: [
        {
          date: "100000.00",
          name: "1100000.00",
          address: "100000.00",
          yingli:"100%"
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