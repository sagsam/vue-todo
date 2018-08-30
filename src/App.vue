<template>
  <section id="app">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-half ">
          <section class="is-flex is-horizontal-center">
            <figure class="image is-96x96">
              <img src="./assets/logo.png" alt="Vue logo">
            </figure>
          </section>
          <section>
            <todo-list></todo-list>
          </section>
        </div>
      </div>      
    </div>
  </section>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TodoList
  }
}
</script>

<style>
.is-horizontal-center {
  justify-content: center;
}
</style>
