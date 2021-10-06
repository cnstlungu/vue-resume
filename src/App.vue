<template>
  <div id="app">
    <h1>John Doe</h1>
    <Social></Social>
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import Social from './components/Social'
import Navbar from './components/NavBar'
export default {
  name: 'App',
  components: {
    'Social': Social,
    'NavBar': Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
