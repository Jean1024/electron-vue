<template>
  <div class="decWeat">
    <h1>首页</h1>
  </div>
</template>
<script>
export default {
	name: 'menus',
	data(){
		return {

		}
    },
    created:()=>{
		var d=document.documentElement;
		function change(){
			d.style.fontSize= d.clientWidth/96+'px';
		}
		window.addEventListener('resize',change,false);
		change();
	}
}
</script>
