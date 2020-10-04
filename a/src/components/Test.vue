<template>
  <div>
    <form id="enter">
      <h1>学生管理系统</h1>
      <!-- 小明  12345        小花  12346 -->
      <span>账号：</span><input type="text" v-model="inId" />
      <br />
      <span>密码：</span><input type="password" v-model="inPassword" />
      <br />
      <input type="button" style="float: right;" value="注册" />
      <input
        type="button"
        style="float: right;"
        value="登录"
        @click="register"
      />
    </form>
  </div>
</template>

<style>
body {
  background-image: blue;
  background-repeat: no-repeat;
  background-size: 100%;
}
form {
  height: 200px;
  width: 225px;
  margin: 250px auto;
}
input {
  margin-top: 10px;
  margin-right: 10px;
}
</style>

<script>

export default {
  data() {
    return {
      user: {},
        users: [{
             id:'小明',
            password:12345
        },
        {
             id:'小花',
            password:12346
        }],
        inId:'',
        inPassword:''
    }
  },
  methods: {
     register:function(){
            console.log(this.users.length)
            console.log(this.inPassword);
            console.log(this.inId);
            for(var i = 0; i < this.users.length; i++){
                if(this.inId == this.users[i].id && this.inPassword == this.users[i].password){
                    alert("登陆成功");
                    // window.location.href="index.html"; 
               }
             }
            var x = ((this.inId != this.users[0].id) || (this.inPassword != this.users[0].password)) && ((this.inId != '') && (this.inPassword != ''));
            var y =((this.inId != this.users[1].id) || (this.inPassword != this.users[1].password)) && ((this.inId != '') && (this.inPassword != '')); 
            console.log(x);
            console.log(y);
            console.log(x || y);
            if(x && y){
               alert("账号或者密码错误");   
            }
            if(this.inId == '')
                alert("账号为空");
            if(this.inPassword == '')
                alert("密码为空");    
        }
  },
}
</script>

