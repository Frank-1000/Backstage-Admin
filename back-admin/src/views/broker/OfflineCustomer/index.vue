<template>
  <div class="app-container">
    <div class="title">下线客户</div>
   
    <!-- <div class="aaa"></div> -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="编号" align="center"></el-table-column>
      <el-table-column prop="name" label="客户" align="center"></el-table-column>
      <el-table-column prop="address" label="经纪人" align="center"></el-table-column>
      <el-table-column prop="jun" label="资产（USDT）" align="center"></el-table-column>
      <el-table-column prop="zichan" label="创建时间" align="center"></el-table-column>
      <el-table-column prop="ying" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            class="open"
            @click="open(tableData[scope.$index],scope.$index)"

          >编辑</el-button>
      
          <el-button type="text" class="del" @click="del(tableData[scope.$index],scope.$index)" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页按钮 -->
    <div class="block">
      <!-- <span class="demonstration">直接前往</span>-->
      <el-pagination 
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="10000"
      ></el-pagination>
    </div>
    <!-- 分页结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage3: 1, 
      item: "",
      manybang: 15,
      manycao: 5,
      tableData: [
        {
          date: "1",
          name: "许褚",
          address: "曹操",
          jun: 10000.0,
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "2",
          name: "bhbgj999",
          address: "管理员",
          jun: '192.255.63.82',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "3",
          name: "bhbgj666",
          address: "管理员",
          jun: '192.255.63.82',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        }
      ]
    };
  },
  methods: {
    // 触发“关闭状态”的方法     
    close(rows, index) {
      console.log(rows); 

      this.$confirm("确定要关闭此账号操盘功能？?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData[index].jun = '关闭';
          this.$message({
            type: "success",
            message: "关闭成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消关闭"
          });
        });
    },

    //触发“删除”指令的方法 
    del(rows, index) {
      console.log(rows);
  
      this.$confirm("此行为将删除对该账户操作, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 在此位置调用接口，更改账户状态     
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.tableData.splice(index,1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //触发 "开启"状态的方法
    open(rows, index) {
      this.$message({
        type: "success",
        message: "编辑成功！"
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //点击页数的方法
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      // console.log('发网络请求，拿到当前页数据，然后渲染')
    }
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  .title {
    width: 80px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    float: left;
    margin-top: 5px;
  }
  .status-box {
    // margin: 0 auto;
    float: left;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #36A9CE;
    color: #fff;
    border-radius: 10px;
    margin-left: 50px;
    cursor: pointer;
  }
  .hint{
    float: right;
    font-size: 12px;
    color: #d9001b;
    margin-right: 100px;
  }
  .aaa {
    height: 2px;
    width: 100%;
    background: #ccc;
    margin-top: 20px;
  }
  .del {
    width: 50px;
    height: 30px;
    line-height: 8px;
    background: #d9001b;
    color: #fff;
    text-align: center;
  }
 
  .close {
    width: 50px;
    height: 30px;
    line-height: 8px;
    background: #aaaaaa;
    color: #fff;
    text-align: center;
  }
  .open {
    width: 50px;
    height: 30px;
    line-height: 8px;
    background: #00aaaa;
    color: #fff;
    text-align: center;
  }
   height: 800px;   
    position: relative;
  .block {
   position: absolute;
    bottom: 10px;
    left: 35%;
  }
}
</style>