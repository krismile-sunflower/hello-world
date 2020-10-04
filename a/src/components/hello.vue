<template>
  <div class="studentType">
    <!-- 添加学生类型对话框 -->
    <el-dialog title="添加研究生类型" :visible.sync="dialogVisible" width="600px">
      <el-form :model="form" :rules="rules" ref="form" label-position="right" >
        <el-form-item label="类型代码" prop="typeNum" :label-width="formLabelWidth">
          <el-input v-model="form.typeNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型名称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学位类型代码" prop="degreeNum" :label-width="formLabelWidth">
          <el-input v-model="form.degreeNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="层次" prop="level" :label-width="formLabelWidth">
          <el-select v-model="form.level" collapse-tags placeholder="选择层次">
              <el-option label="硕士" value="master"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
        <el-button type="primary" @click="clickAddStudent('form')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改学生类型 -->
    <el-dialog title="修改学生类型" :visible.sync="updialogVisible" width="600px">
      <el-form :model="upform" :rules="rules" ref="upform" label-position="right">
        <el-form-item label="类型代码" prop="typeNum" :label-width="formLabelWidth">
          <el-input v-model="upform.typeNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型名称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="upform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学位类型代码" prop="degreeNum" :label-width="formLabelWidth">
          <el-input v-model="upform.degreeNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="层次" prop="level" :label-width="formLabelWidth">
          <el-select v-model="upform.level" collapse-tags placeholder="选择层次">
              <el-option label="硕士" value="master"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updialogVisible = false">取 消</el-button>
        <el-button @click="resetForm('upform')">重置</el-button>
        <el-button type="primary" @click="clickUpStudent('upform')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 课程类型设置 -->
        <el-dialog title="设置课程类型" :visible.sync="classdialogVisible" width="600px">
      <el-form :model="form" :rules="classrules" ref="classform" label-position="right" >
        <el-form-item label="类型编号" prop="classTypeNum" :label-width="formLabelWidth">
          <el-input v-model="classform.classTypeNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型名称" prop="classTypeName" :label-width="formLabelWidth">
          <el-input v-model="classform.classTypeName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否必修" prop="relearn" :label-width="formLabelWidth">
          <el-select v-model="classform.relearn" collapse-tags placeholder="是/否">
              <el-option label="是" value="ddddd"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="classdialogVisible = false">取 消</el-button>
        <el-button @click="resetForm('classform')">重置</el-button>
        <el-button type="primary" @click="clickSetClass('classform')">确 定</el-button>
      </div>
    </el-dialog>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 学生类型
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="studentType__upbtn">
        <div>
          <el-button type @click="addstudent('form')">添加类型</el-button>
          <el-button type @click="setclass('classform')">课程类型设置</el-button>
        </div>
      </div>

      <el-table :data="studentTypeData" class="table" ref="multipleTable">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="typeNum" label="类型代码" width="200" ></el-table-column>
        <el-table-column prop="name" label="类型名称" width="300"></el-table-column>
        <el-table-column prop="degreeNum" label="学位类型代码" width="200"></el-table-column>
        <el-table-column prop="level" label="层次" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="upstudent(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="opendel(scope.row)" type="text" style="color:red" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[1, 2, 3, 4]"
          :page-size="1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "studentType",
  data() {
    return {
      currentPage4: 1,
      dialogVisible: false,
      updialogVisible: false,
      classdialogVisible: false,
      formLabelWidth: "110px",
      studentTypeData: [
        {
          typeNum: "选项1",
          name: "黄金糕",
          degreeNum:"??",
          level:"!!"
        },{
          typeNum: "选项2",
          name: "黄金糕",
          degreeNum:"??",
          level:"!!"
        }],
      form: {
      typeNum: "",
      name: "",
      degreeNum: "",
      level:"",
      },
      upform: {
      typeNum: "",
      name: "",
      degreeNum: "",
      level:"",
      },
      classform:{
      classTypeNum:"",
      classTypeName:"",
      relearn:"",
      },
      rules: {
        typeNum: [{ required: true, message: "必填", trigger: "change" }],
        name: [{ required: true, message: "必填", trigger: "change" }],
        degreeNum: [{ required: true, message: "必填", trigger: "change" }],
        level: [{ required: true, message: "必填", trigger: "change" }],
      },
      classrules: {
        classTypeNum: [{ required: true, message: "必填", trigger: "change" }],
        classTypeName: [{ required: true, message: "必填", trigger: "change" }],
        relearn: [{ required: true, message: "必填", trigger: "change" }],
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
   //重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //添加学生
    addstudent(formName) {
      this.dialogVisible = true;
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields();
      }
    },
    //确认添加学生
    async clickAddStudent(form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
            this.dialogVisible = false;
          alert('submit!');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //设置课程类型
    setclass(formName) {
      this.classdialogVisible = true;
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields();
      }
    },
    //确认设置课程类型
    async clickSetClass(form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
            this.classdialogVisible = false;
          alert('submit!');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //确认修改学生
    async clickUpStudent(form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
            this.updialogVisible = false;
            alert('submit!');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //修改学生
    upstudent(row) {
      console.log(row);
      this.upform = row;
      this.updialogVisible = true;
        if (this.$refs[this.upform] !== undefined) {
      this.$refs[this.upform].resetFields();
      }
    },
    //删除学生
    opendel(row) {
      console.log(row);
      this.$confirm("此操作将永久删除教室数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
// .scoreInquiry {
//   &__sebox {
//     &-selectCase {
//       span {
//         line-height: 32px;
//       }
//     }
//   }
// }
.studentType {
  &__upbtn {
    margin-bottom: 10px;
  }
  &__row {
    &-spanclass {
      font-size: 13px;
    }
  }
}
.el-select {
  width: 100%;
}
.el-row {
  width: 100%;
}
.el-col {
  margin-bottom: 10px;
  display: flex;
  span {
    line-height: 32px;
  }
}
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
</style>


