<template>
    <div class="card">
        <div class="card-content">
            <div class="content">                
                <div class="tile is-ancestor">
                    <div class="tile is-vertical">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">                            
                                <input 
                                    class="input is-large" 
                                    type="text" 
                                    placeholder="What needs to be done"
                                    v-model=newTodo
                                    @keyup.enter="addTodo"
                                >                               
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article 
                                    v-for="(todo, index) in todos" 
                                    :key="todo.id" 
                                    class="tile is-child notification is-primary"
                                >
                                    <button 
                                        class="delete"
                                        @click="removeTodo(index)"
                                    ></button>
                                    <p class="title">{{todo.title}}...</p>
                                    <p class="subtitle">...</p>
                                    <span :class="['tag', todo.completed ? 'is-success' : 'is-danger']">{{ todo.completed ? 'completed' : 'pending' }}</span>
                                </article>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
  name: 'TodoList',
  data () {
      return {
          newTodo: '',
          idForTodo: 3,
          todos: [
              {
                  id: 1,
                  title: 'Finish vue screencast',
                  completed: false
              },
              {
                  id: 2,
                  title: 'Finish eating',
                  completed: true
              }
          ]
      }
  },
  methods: {
      removeTodo (index) {
        this.todos.splice(index, 1)
      },
      addTodo () {
        if (this.newTodo.trim().length == 0) {
            return
        }

        this.todos.push({
            id: this.idForTodo,
            title: this.newTodo,
            completed: false
        })

        this.newTodo = '',
        this.idForTodo++
      }
  }
}
</script>

<style scoped>

</style>
