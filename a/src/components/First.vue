<template>
    <div>
        <!-- Form -->
        <el-button type="text" @click="dialogFormVisible = true">新增</el-button>

        <el-dialog title="新增学生信息" :visible.sync="dialogFormVisible" class="dome">
        <el-form :model="form" action="#" style="width:50%">
            <el-form-item label="学号" :label-width="formLabelWidth">
                <el-input v-model="form.id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                    <el-radio label="女" aria-checked></el-radio>
                    <el-radio label="男"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="学院" :label-width="formLabelWidth">
                <el-select v-model="form.collage" placeholder="请选择学院">
                    <el-option label="两江人工智能学院" value="两江人工智能学院"></el-option>
                    <el-option label="理学院" value="理学院"></el-option>
                    <el-option label="外国语学院" value="外国语学院"></el-option>
                    <el-option label="车辆学院" value="车辆学院"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="专业" :label-width="formLabelWidth">
                <el-input v-model="form.profession" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年级" :label-width="formLabelWidth">
                <el-input v-model="form.grade" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="班级" :label-width="formLabelWidth">
                <el-input v-model="form.classes" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="爱好" :label-width="formLabelWidth">
                <el-input v-model="form.hobby" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>

<style scoped>
    .dome >>> .el-dialog {
        width: 30%;
    }
    .el-dialog__wrapper{
        overflow: hidden;
    } 
    .dome >>> .el-form-item{
        margin-bottom: 4px;
    }
</style>
   
<script>
  export default {
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '40px'
      };
    }
  };
</script>