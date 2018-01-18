<template>
  <div class="login">
  	<span class="close" @click='exit'></span>
  	<div class="logo"></div>
  	<div class="user" id="udiv">
  		 <div class="username clearfix">
  		 	<span class="fl"></span>
  		 	<input type="text" name="username" class="fl" v-model="user.username">
  		 </div>
  		 <div class="userpassword clearfix">
  		 	<span class="fl"></span>
  		 	<input type="password" name="userpassword" class="fl" v-model="user.password">
  		 </div>
  		 <div class="clearfix logBox">
  		 	<div :class="{fl:true, act:isRemind}" @click='isRemind=!isRemind'>
  		 		<i class="fl"></i>
  		 		<b class="fl">记住密码</b>
  		 	</div>
  		 	<div :class="{fr:true, act:isAuto}" @click='isAuto=!isAuto'>
  		 		<i class="fl"></i>
  		 		<b class="fl">自动登录</b>
  		 	</div>
  		 </div>
			 <div class="loginBtn" @click='submit'>登录</div>
		</div>
  </div>
</template>
<script>
import {fetchJSON} from '../tools'
import URL from '../store/url'
export default {
	name: 'login',
	data(){
		return {
			user:{
				username: '',
				password: ''
			},
			isRemind: true,
			isAuto: false
		}
	},
    methods: {
      exit(){
		require('electron').remote.getCurrentWindow().close();
	  },
	  submit(){
		  if (this.user.username === '' || this.user.password === '') {
				location.replace('#/login')
				alert('请输入用户名和密码')
				return
		   }
		  let user = Object.assign({}, this.user)
          this.$store.dispatch('signin', user) 
	  }
	},
	created:()=>{
		var d=document.documentElement;
		function change(){
			d.style.fontSize= d.clientWidth/35.25+'px';
		}
		window.addEventListener('resize',change,false);
		change();
	}
}
</script>

<style scoped>
.login{
	width:35.25rem;
	height:16.25rem;
	background:url('../assets/images/login_bg2.png') no-repeat center center;
	position:relative;
	background-size:110%;
}
.close{
	position:absolute;
	right:0.7rem;
	top:0.7rem;
	width:0.45rem;
	height:0.45rem;
	background:url('../assets/images/login-icon.png') no-repeat;
	background-size:3.75rem 1.25rem;
}
.logo{
	position:absolute;
	left:1.5rem;
	top:5rem;
	height:6rem;
	width:14rem;
	background:url('../assets/images/login_logo.png') no-repeat;
	background-size:100%;
}

.logo>span{
	position: absolute;
	right: -1.8rem;
    bottom: -1rem;
    width: 4rem;
    height: 4rem;
	background:url('../assets/images/login_star.png') center/cover;
}
.user{
	position:absolute;
	left:18.25rem;
	top:3.65rem;
}
.user span{
	width:0.9rem;
	height:0.9rem;
	margin-right:0.25rem;
	background:url('../assets/images/login-icon.png') no-repeat;
	background-size:3.75rem 1.25rem;
	background-position:-0.675rem 0.0rem;
}
.user .userpassword>span{
	background-position:-1.6rem 0.0rem;
}
.user input{
	width:11.5rem;
	height:0.9rem;
	font-size:0.45rem;
	color:#fff;
	background:none;
}
.user>.username,.user>.userpassword{
	padding: 0.35rem 0;
    border-bottom: 0.075rem solid #3c4967;
}
.logBox{
	color:rgba(255,255,255,0.4);
	font-size:0.45rem;
	padding: 1.0rem 0;
}
.logBox>div{
	cursor:pointer;
	line-height:0.8rem;
}
.logBox>div>i{
	display:inline-block;
	width:0.6rem;
	height:0.6rem;
	border:1px solid #fff;
	background:#26292a;
	border-radius:0.125rem;
	margin-right:0.25rem;
}
.loginBtn{
	text-align: center;
    width: 100%;
	height: 1.5rem;
    margin-top: 1rem;
    line-height: 1.55rem;
    font-size: 0.75rem;
    color: #fff;
    background-image:linear-gradient(to top,rgba(10,87,183,0.9),rgba(6,107,200,0.9));
	background-image:-webkit-linear-gradient(to top,rgba(10,87,183,0.9),rgba(6,107,200,0.9));
	box-shadow:0 0.075rem 0px -0px #172d4e;
	border-top:0.075rem solid rgba(85,145,205,0.9);
	border-radius:0.375rem;
	cursor:pointer;
}
.logBox .act i{
	background:url('../assets/images/login-icon.png') no-repeat;
	background-size:3.75rem 1.25rem;
	background-position:-2.425rem 1px;
}
.logBox .act{
	color:rgba(255,255,255,0.6);
}
#keydiv{
	display: none;
	width:400px;
}
#keydiv>.username{
	color: red;
}
</style>
