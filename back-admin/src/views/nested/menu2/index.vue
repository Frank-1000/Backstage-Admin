<template>
  <div class="app-container">
    <div class="title">兑换记录</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="流水号" width="120" align="center"></el-table-column>
      <el-table-column prop="name" label="兑换比例" width="150" align="center"></el-table-column>
      <el-table-column prop="address" label="兑出币种" align="center"></el-table-column>
      <el-table-column prop="jun" label="兑出数量"  align="center"></el-table-column>
      <el-table-column prop="zichan" label="兑入币种"  align="center"></el-table-column>
      <el-table-column prop="ying" label="兑入数量"  align="center"></el-table-column>
      <el-table-column prop="shou" label="汇率"  align="center"></el-table-column>
      <el-table-column prop="lv" label="时间"  align="center"></el-table-column>
      <el-table-column prop="zhang" label="状态" align="center"></el-table-column>
     
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
          name: "10%",
          address: "USDT",
          jun:"10000",
          zichan:"ETH",
          ying:50,
          shou:"200.00",
          lv:"2020-05-16 17:52:53",
          zhang:"已完成"
        }
      ]
    }
  },
   created(){
    console.log('嘎嘎嘎  进来咯  兑换记录')
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