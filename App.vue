<template>
  <div id="app" class="bgi ">
    <!-- <img src="./assets/logo.png"> -->
    <p class="todo_css">todos</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; /*抗锯齿*/
  -moz-osx-font-smoothing: grayscale;   /*原理相似*/
  text-align: center;
  color: #e7587c;
  margin-top: 0px;
  
}
</style>
