<template>
  <div id="app">
    <router-view></router-view>
    <p></p>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100vh;
  }
</style>
