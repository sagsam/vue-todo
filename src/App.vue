<template>
  <div id="app">
    <div class='column is-one-quarter'>
      <div class='card equal-height'>
        <div class='card-content is-flex is-horizontal-center'>
          <figure class='image is-128x128'><img alt="Vue logo" src="./assets/logo.png"></figure>
        </div>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
.is-horizontal-center {
  justify-content: center;
}
</style>
