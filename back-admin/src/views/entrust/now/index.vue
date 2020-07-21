<template>
  <div class="app-container">
    <div class="title">当前委托</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="流水号" width="120" align="center"></el-table-column>
      <el-table-column prop="name" label="合约" width="150" align="center"></el-table-column>
      <el-table-column prop="address" label="倍数" align="center"></el-table-column>
      <el-table-column prop="jun" label="委托时间"  align="center"></el-table-column>
      <el-table-column prop="zichan" label="交易类型"  align="center"></el-table-column>
      <el-table-column prop="ying" label="委托类型"  align="center"></el-table-column>
      <el-table-column prop="shou" label="委托量（张）"  align="center"></el-table-column>
      <el-table-column prop="lv" label="委托价"  align="center"></el-table-column>
      <el-table-column prop="zhang" label="成交量(张)" align="center"></el-table-column>
      <el-table-column prop="liang" label="成交均价" align="center"></el-table-column>
      <el-table-column prop="shijian" label="冻结担保资产"  align="center"></el-table-column>
       <el-table-column prop="shouxufwi" label="手续费" align="center"></el-table-column>
        <el-table-column prop="chengjiaolu" label="成交率" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date:"5484564",
          name:"BTC 永续",
          address:"10X",
          jun:"2020-05-20 17:00",
          zichan:"",
          ying:"",
          shou:9250,
          lv:"0",
          zhang:9249,
          liang:100,
          shijian:"",
          shouxufwi:"",
          chengjiaolu:""
        },{
         date: "5484564",
          name: "BTC 永续",
          address: "10X",
          jun:"2020-05-20 17:00",
          zichan:"",
          ying:"",
          shou:9250,
          lv:"0",
          zhang:9249,
          liang:100,
          shijian:"",
          shouxufwi:"",
          chengjiaolu:""
        }
      ]
    }
  },
  created(){
    console.log('嘎嘎嘎 进来咯  当前委托')
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