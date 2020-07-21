<template>
  <div class="app-container">
    <div class="title">账号异常</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="流水号" width="120" align="center"></el-table-column>
      <el-table-column prop="name" label="时间" width="150" align="center"></el-table-column>
      <el-table-column prop="address" label="类型" align="center"></el-table-column>
      <el-table-column prop="jun" label="币种"  align="center"></el-table-column>
      <el-table-column prop="zichan" label="委托量"  align="center"></el-table-column>
      <el-table-column prop="ying" label="已完成"  align="center"></el-table-column>
      <el-table-column prop="shou" label="未完成"  align="center"></el-table-column>
      <el-table-column prop="lv" label="操作"  align="center">
        <template slot-scope="scope">
        <el-button type="primary"  @click="add(tableData[scope.$index])">补足</el-button>
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
          date: "5484564",
          name: "2020-05-16 17:52:53",
          address: "ETH永续·平空·20X",
          jun:"ETH",
          zichan:"200",
          ying:"190",
          shou:"7",
        },
         {
          date: "5484564",
          name: "2020-05-16 17:52:53",
          address: "ETH永续·平空·20X",
          jun:"ETH",
          zichan:"200",
          ying:"190",
          shou:"8",
        },
         {
           date: "5484564",
          name: "2020-05-16 17:52:53",
          address: "ETH永续·平空·20X",
          jun:"ETH",
          zichan:"200",
          ying:"190",
          shou:"9",
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