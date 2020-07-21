<template>
  <div class="app-container">
    <div class="title">仓位详情</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="流水号" width="120" align="center"></el-table-column>
      <el-table-column prop="name" label="合约" width="150" align="center"></el-table-column>
      <el-table-column prop="address" label="开仓均价(USD)" align="center"></el-table-column>
      <el-table-column prop="jun" label="持仓均价(USD)"  align="center"></el-table-column>
      <el-table-column prop="zichan" label="持仓担保资产"  align="center"></el-table-column>
      <el-table-column prop="ying" label="为实现盈亏"  align="center"></el-table-column>
      <el-table-column prop="shou" label="收益"  align="center"></el-table-column>
      <el-table-column prop="lv" label="收益率"  align="center"></el-table-column>
      <el-table-column prop="zhang" label="持仓量(张)" align="center"></el-table-column>
      <el-table-column prop="liang" label="可平量（张）" align="center"></el-table-column>
      <el-table-column prop="shijian" label="持仓时间"  align="center"></el-table-column>
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
          name: "ETH永续·空·20X",
          address: "202.567",
          jun:"202.567",
          zichan:"0.0024",
          ying:0.0000,
          shou:"+365425",
          lv:"122%",
          zhang:1,
          liang:100,
          shijian:"2020-05-16 17:52:53"
        },
         {
          date: "5484564",
          name: "ETH永续·空·20X",
          address: "202.567",
          jun:"202.567",
          zichan:"0.0024",
          ying:0.0000,
          shou:"+365425",
          lv:"122%",
          zhang:1,
          liang:"100",
          shijian:"2020-05-16 17:52:53"
        },
         {
          date: "5484564",
          name: "ETH永续·空·20X",
          address: "202.567",
          jun:"202.567",
          zichan:"0.0024",
          ying:0.0000,
          shou:"+365425",
          lv:"122%",
          zhang:1,
          liang:100,
          shijian:"2020-05-16 17:52:53"
        }
      ]
    }
  },
   created(){
    console.log('嘎嘎嘎 进来咯  仓位详情')
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