<template>
  <div id="app">
      <div>
      <router-link
        to="/home"
      >
        home
      </router-link>
      <router-link
        to="/vue"
      >
        vue
      </router-link>
      <router-link
        to="/react"
      >
        react
      </router-link>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
