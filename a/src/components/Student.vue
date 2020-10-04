<template>
  <div>
    <h1 style="text-align: center;">学生管理系统</h1>
    <div>
      <el-button type="primary" @click="dialogFormVisible = true"
        >新增</el-button
      >
      <el-button type="danger" @click="delStudent()">删除</el-button>
      <!-- 新增学生信息 -->
      <el-dialog
        title="新增学生信息"
        :visible.sync="dialogFormVisible"
        class="dome"
      >
        <el-form
          :model="form"
          :rules="rules"
          ref="form"
          :inline="true"
          class="demo-form-inline"
        >
          <el-form-item label="学号" :label-width="formLabelWidth" prop="id">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="form.sex">
              <el-radio label="女"></el-radio>
              <el-radio label="男"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="学院"
            :label-width="formLabelWidth"
            prop="college"
          >
            <el-select v-model="form.college" placeholder="请选择学院">
              <el-option
                label="两江人工智能学院"
                value="两江人工智能学院"
              ></el-option>
              <el-option label="理学院" value="理学院"></el-option>
              <el-option label="外国语学院" value="外国语学院"></el-option>
              <el-option label="车辆学院" value="车辆学院"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="专业"
            :label-width="formLabelWidth"
            prop="profession"
          >
            <el-input v-model="form.profession" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年级" :label-width="formLabelWidth" prop="grade">
            <el-input v-model="form.grade" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="班级"
            :label-width="formLabelWidth"
            prop="classes"
          >
            <el-input v-model="form.classes" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="爱好" :label-width="formLabelWidth" prop="hobby">
            <el-input v-model="form.hobby" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="padding-left: 52px">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="danger" @click="resetForm('form')"
              >重 置</el-button
            >
            <el-button type="primary" @click="addStudent('form')"
              >确 定</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>

      <!-- 查看学生信息 -->
      <el-dialog
        title="查看学生信息"
        :visible.sync="dialogFormVisibleCheck"
        class="dome"
      >
        <el-form
          :model="checkForm"
          ref="checkForm"
          :inline="true"
          class="demo-form-inline"
        >
          <el-form-item label="学号" :label-width="formLabelWidth" prop="id">
            <el-input
              v-model="checkForm.id"
              autocomplete="off"
              readonly
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
            <el-input
              v-model="checkForm.name"
              autocomplete="off"
              readonly
            ></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="checkForm.sex">
              <el-radio label="女" readonly></el-radio>
              <el-radio label="男" readonly></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="学院"
            :label-width="formLabelWidth"
            prop="college"
          >
            <el-select
              v-model="checkForm.college"
              placeholder="请选择学院"
              readonly
            >
              <el-option
                label="两江人工智能学院"
                value="两江人工智能学院"
                readonly
              ></el-option>
              <el-option label="理学院" value="理学院" readonly></el-option>
              <el-option
                label="外国语学院"
                value="外国语学院"
                readonly
              ></el-option>
              <el-option label="车辆学院" value="车辆学院" readonly></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="专业"
            :label-width="formLabelWidth"
            prop="profession"
          >
            <el-input
              v-model="checkForm.profession"
              autocomplete="off"
              readonly
            ></el-input>
          </el-form-item>
          <el-form-item label="年级" :label-width="formLabelWidth" prop="grade">
            <el-input
              v-model="checkForm.grade"
              autocomplete="off"
              readonly
            ></el-input>
          </el-form-item>
          <el-form-item
            label="班级"
            :label-width="formLabelWidth"
            prop="classes"
          >
            <el-input
              v-model="checkForm.classes"
              autocomplete="off"
              readonly
            ></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
            <el-input
              v-model="checkForm.age"
              autocomplete="off"
              readonly
            ></el-input>
          </el-form-item>
          <el-form-item label="爱好" :label-width="formLabelWidth" prop="hobby">
            <el-input
              v-model="checkForm.hobby"
              autocomplete="off"
              readonly
            ></el-input>
          </el-form-item>
          <el-form-item style="padding-left: 52px">
            <el-button @click="dialogFormVisibleCheck = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisibleCheck = false"
              >确 定</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>

      <!-- 修改学生信息 -->
      <el-dialog
        title="修改学生信息"
        :visible.sync="dialogFormVisibleUpdate"
        class="dome"
      >
        <el-form
          :model="updateForm"
          :rules="rules"
          ref="updateForm"
          :inline="true"
          class="demo-form-inline"
        >
          <el-form-item label="学号" :label-width="formLabelWidth" prop="id">
            <el-input v-model="updateForm.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
            <el-input v-model="updateForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="updateForm.sex">
              <el-radio label="女"></el-radio>
              <el-radio label="男"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="学院"
            :label-width="formLabelWidth"
            prop="college"
          >
            <el-select v-model="updateForm.college" placeholder="请选择学院">
              <el-option
                label="两江人工智能学院"
                value="两江人工智能学院"
              ></el-option>
              <el-option label="理学院" value="理学院"></el-option>
              <el-option label="外国语学院" value="外国语学院"></el-option>
              <el-option label="车辆学院" value="车辆学院"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="专业"
            :label-width="formLabelWidth"
            prop="profession"
          >
            <el-input
              v-model="updateForm.profession"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="年级" :label-width="formLabelWidth" prop="grade">
            <el-input v-model="updateForm.grade" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="班级"
            :label-width="formLabelWidth"
            prop="classes"
          >
            <el-input
              v-model="updateForm.classes"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
            <el-input v-model="updateForm.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="爱好" :label-width="formLabelWidth" prop="hobby">
            <el-input v-model="updateForm.hobby" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="padding-left: 52px">
            <el-button @click="dialogFormVisibleUpdate = false"
              >取 消</el-button
            >
            <el-button type="danger" @click="resetForm('updateForm')"
              >重 置</el-button
            >
            <el-button type="primary" @click="updateStudent('updateForm')"
              >确 定</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <!-- 学生信息表格 -->
    <el-table
      ref="multipleTable"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20]"
      :page-size="pageSize"
      :total="students.length"
      :data="
        students.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      :row-class-name="tableRowClassName"
      :row-key="getRowKey"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      style="width: 100%"
    >
      <template>
        <el-table-column
          type="selection"
          width="55"
          :reserve-selection="true"
        ></el-table-column>
        <el-table-column
          prop="number"
          label="序号"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="id"
          label="学号"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="college"
          label="学院"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="profession"
          label="专业"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="grade"
          label="年级"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="classes"
          label="班级"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="hobby"
          label="爱好"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text"
              ><span style="color:red">查看</span></el-button
            >
            <el-button @click="update(scope.row)" type="text"
              ><span style="color:red">修改</span></el-button
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <div class="block" style="margin-top:15px;">
      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="students.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<style scoped>
.el-dialog__wrapper {
  overflow: hidden;
}
.dome >>> .el-form-item {
  margin-bottom: 20px;
}
.dome >>> .el-form-item__label {
  text-align: left;
  padding: 0;
}
.dome >>> .el-radio-group {
  padding-left: 70px;
  padding-right: 100px;
}
</style>

<script>
// 创建一个函数用来存储学生的相关信息
function Student(
  id,
  name,
  sex,
  college,
  profession,
  grade,
  classes,
  age,
  hobby
) {
  this.id = id;
  this.name = name;
  this.sex = sex;
  this.college = college;
  this.profession = profession;
  this.grade = grade;
  this.classes = classes;
  this.age = age;
  this.hobby = hobby;
}
// 创建一个数组用来存储所有学生的信息
var students = new Array();
students.push(
  new Student(11623020222, "张晗", "女", "理学院", "物理", 16, 2, 19, "绘画")
);
students.push(
  new Student(11623020223, "李思", "女", "理学院", "物理", 16, 2, 18, "羽毛球")
);
students.push(
  new Student(11623020224, "张小", "女", "理学院", "物理", 16, 2, 18, "绘画")
);
students.push(
  new Student(11623020225, "张杭", "男", "理学院", "物理", 16, 2, 19, "足球")
);
students.push(
  new Student(11623020226, "张阳", "男", "理学院", "物理", 16, 2, 20, "篮球")
);
students.push(
  new Student(11623020227, "王晗", "女", "理学院", "物理", 16, 2, 19, "绘画")
);
students.push(
  new Student(11623020228, "王晓晓", "女", "理学院", "物理", 16, 2, 19, "跳绳")
);
students.push(
  new Student(11623020229, "张夏溪", "女", "理学院", "物理", 16, 2, 19, "绘画")
);
students.push(
  new Student(11623020230, "夏诺", "女", "理学院", "物理", 16, 2, 19, "跑步")
);
students.push(
  new Student(11623020231, "李丽", "女", "理学院", "物理", 16, 2, 19, "绘画")
);
students.push(
  new Student(11623020232, "张晗", "女", "理学院", "物理", 16, 2, 19, "绘画")
);
students.push(
  new Student(11623020233, "张都", "女", "理学院", "物理", 16, 2, 19, "跳绳")
);
students.push(
  new Student(11623020234, "王道", "男", "理学院", "物理", 16, 2, 19, "篮球")
);
localStorage.setItem("students", JSON.stringify(students));
students = JSON.parse(localStorage.getItem("students"));
console.log(students);
// 设置一个全局变量来查找修改学生的number
var a;
// 设置一个全局变量来存放需要删除学生数组的下标
var b = new Array();
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      let len = students.length;
      let i = 0;
      if (i < len) {
        for (let j = 1; j <= len / this.pageSize + 1; j++) {
          if (this.currentPage == j) {
            row.number = rowIndex + 1 + (this.currentPage - 1) * this.pageSize;
          }
        }
      }
      // let a = this.currentPage;
      //   console.log(this.pageSize)
    },
    check(row) {
      console.log(row);
      this.checkForm.id = row.id;
      this.checkForm.name = row.name;
      this.checkForm.sex = row.sex;
      this.checkForm.college = row.college;
      this.checkForm.profession = row.profession;
      this.checkForm.grade = row.grade;
      this.checkForm.classes = row.classes;
      this.checkForm.age = row.age;
      this.checkForm.hobby = row.hobby;
      this.dialogFormVisibleCheck = true;
    },
    update(row) {
      console.log(row);
      console.log(row.id);
      a = row.number;
      console.log(a);
      this.updateForm.id = row.id;
      this.updateForm.name = row.name;
      this.updateForm.sex = row.sex;
      this.updateForm.college = row.college;
      this.updateForm.profession = row.profession;
      this.updateForm.grade = row.grade;
      this.updateForm.classes = row.classes;
      this.updateForm.age = row.age;
      this.updateForm.hobby = row.hobby;
      this.dialogFormVisibleUpdate = true;
    },
    updateStudent: function(updateForm) {
      console.log(a);
      this.$refs[updateForm].validate(valid => {
        if (valid) {
          alert("修改成功!");
          students.splice(
            a - 1,
            1,
            new Student(
              this.updateForm.id,
              this.updateForm.name,
              this.updateForm.sex,
              this.updateForm.college,
              this.updateForm.profession,
              this.updateForm.grade,
              this.updateForm.classes,
              this.updateForm.age,
              this.updateForm.hobby
            )
          );
          console.log(this.updateForm.id);
          this.dialogFormVisibleUpdate = false;
        } else {
          console.log("修改错误!!");
          return false;
        }
      });
    },
    addStudent: function(form) {
      console.log(form);
      this.$refs[form].validate(valid => {
        if (valid) {
          alert("添加成功!");
          students.push(
            new Student(
              this.form.id,
              this.form.name,
              this.form.sex,
              this.form.college,
              this.form.profession,
              this.form.grade,
              this.form.classes,
              this.form.age,
              this.form.hobby
            )
          );
          this.dialogFormVisible = false;
        } else {
          console.log("添加失败!!");
          return false;
        }
      });
    },
    open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    delStudent: function() {
      var flag = confirm("确定删除所选项吗？");
      // var flag = open();
      
      for (let i = b.length - 1; i >= 0; i--) {
        if (flag) {
          students.splice(b[i], 1);
        }
      }
    },
    getRowKey(row) {
      return row.id;
    },

    handleSelectionChange(val) {
      console.log(val);
      let j = val.length - 1;
      console.log(j);
      //   console.log(val.length)
      for (let i = val.length - 1; i >= 0; i--, j--) {
        console.log(val[i].number);
        b[j] = val[i].number - 1;
        //   students.splice(val[i].number - 1,)
      }
      console.log(b);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  },

  data() {
    return {
      students,
      currentPage: 1,
      total: 20,
      pageSize: 5,
      dialogFormVisible: false,
      dialogFormVisibleCheck: false,
      dialogFormVisibleUpdate: false,

      form: {
        id: "",
        name: "",
        sex: "女",
        college: [],
        profession: "",
        grade: "",
        classes: "",
        age: "",
        hobby: ""
      },
      checkForm: {
        id: "",
        name: "",
        sex: "女",
        college: [],
        profession: "",
        grade: "",
        classes: "",
        age: "",
        hobby: ""
      },
      updateForm: {
        id: "",
        name: "",
        sex: "女",
        college: [],
        profession: "",
        grade: "",
        classes: "",
        age: "",
        hobby: ""
      },
      formLabelWidth: "100px",
      rules: {
        id: [
          { required: true, message: "请输入学生的学号", trigger: "blur" },
          {
            pattern: /^[0-9]{11}$/,
            message: "学生的学号为11位数字",
            trigger: "blur"
          }
        ],
        name: [
          { required: true, message: "请输入学生的姓名", trigger: "blur" },
          {
            pattern: /^[\u4E00-\u9FA5]{2,5}$/,
            message: "学生姓名不合法",
            trigger: "blur"
          }
        ],
        college: [
          {
            required: true,
            type: "string",
            message: "请选择学生所在学院",
            trigger: "blur"
          }
        ],
        profession: [
          { required: true, message: "请输入学生的专业", trigger: "blur" },
          {
            pattern: /^[\u4E00-\u9FA5]{2,6}$/,
            message: "学生专业不合法",
            trigger: "blur"
          }
        ],
        grade: [
          { required: true, message: "请输入学生的年级", trigger: "blur" },
          {
            pattern: /^[0-9]{2}$/,
            message: "学生的年级为两位数字",
            trigger: "blur"
          }
        ],
        classes: [
          { required: true, message: "请输入学生的班级", trigger: "blur" },
          {
            pattern: /^[0-9]{1,2}$/,
            message: "学生的年级为一到两位数字",
            trigger: "blur"
          }
        ],
        age: [
          { required: true, message: "请输入学生的年龄", trigger: "blur" },
          {
            pattern: /^[0-9]{2}$/,
            message: "学生的年龄为两位数字",
            trigger: "blur"
          }
        ],
        hobby: [
          { required: true, message: "请输入学生的爱好", trigger: "blur" },
          {
            pattern: /^[\u4E00-\u9FA5]{2,6}$/,
            message: "学生的爱好不合法",
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>
