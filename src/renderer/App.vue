<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'bpa',
    created:()=>{
      var d=document.documentElement;
      function change(){
        d.style.fontSize= d.clientWidth/90+'px';
      }
      window.addEventListener('resize',change,false);
      change();
    }
  }
</script>

<style>
*{ margin:0; padding:0;}
li{list-style:none;}
img,input{border:none;}
a{ text-decoration:none;}
a:focus,input,textarea{outline:none;}
textarea{resize : none}
h1,h2,h3,h4,h5,h6,strong,b,i{ font-weight:normal; font-style:normal}
body{ font-family:"Microsoft YaHei";}
.fl{ float:left;}
.fr{ float:right;}
.clear{ clear:both;}
.oh{overflow: hidden;}
.clearfix:after{ content:""; display:block; clear:both;}
.clearfix{ zoom:1;}
/*修改浏览器滚动条样式*/
 ::-webkit-scrollbar {  
    width: 10px;
}  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track {  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    background:#0e233a;  
}  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb {  
    border-radius: 3px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color:#153a60;  
}  
::-webkit-scrollbar-thumb:hover {  
    border-radius: 3px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color:#396591;  
}
</style>
