<template>
  <div class="app-container">
     <div class="title">客户管理</div>
     <div class="sreach-box">
      <input type="text" placeholder="姓名/Access Key" v-model="inputVal" />
      <el-button type="primary" class="sreachBtn" @click="inquire">查询</el-button>
    </div>
   
    <div class="status-box">当前绑定： {{manybang}}个，其中 {{manycao}}个 已开启操盘状态</div>
    <div class="hint">"删除"按钮只有在用户 操盘状态 为"关闭"时才可使用</div>
    <div class="aaa"></div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="姓名" align="center"></el-table-column>
      <el-table-column prop="name" label="Access Key" align="center"></el-table-column>
      <el-table-column prop="address" label="有效期(天)" align="center"></el-table-column>
      <el-table-column prop="jun" label="操盘状态" align="center"></el-table-column>
      <el-table-column prop="zichan" label="持仓时间" align="center"></el-table-column>
      <el-table-column prop="ying" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            class="open"
            @click="open(tableData[scope.$index],scope.$index)"
            v-if="tableData[scope.$index].jun=='关闭'"
          >开启</el-button>
          <el-button
            type="text"
            class="close"
            @click="close(tableData[scope.$index],scope.$index)"
            v-if="tableData[scope.$index].jun=='开启'"
          >关闭</el-button>
          <el-button type="text" class="del" @click="del(tableData[scope.$index],scope.$index)" :disabled="tableData[scope.$index].jun!='关闭'">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页按钮 -->
    <div class="block">
      <!-- <span class="demonstration">直接前往</span>  -->
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
          date: "张三",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '关闭',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "李四",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '开启',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "王五",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '开启',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "王五",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '开启',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "王五",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '开启',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "王五",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '开启',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "王五",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '开启',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "王五",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '开启',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "王五",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '开启',
          zichan: "2020-05-16 17:52:53",
          ying: ""
        },
        {
          date: "王五",
          name: "03386e86-xxxxxxxxx-70f21",
          address: "90",
          jun: '开启',
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
    
      this.tableData[index].jun = '开启';
      this.$message({
        type: "success",
        message: "开启成功！"
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
   .sreach-box {
    width: 400px;
    height: 60px;
    line-height: 60px;
    // border: 1px solid #222;  
    margin: 0 auto;
    input {
      float: left;
      width: 300px;
      height: 30px;
      margin-top: 5px;
    }
    .sreachBtn {
      float: right;
    }
  }
  .title {
    width: 80px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    float: left;
  }
  .status-box {
    // margin: 0 auto;
    width: 350px;
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