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
                                    <label class="checkbox">
                                        <input type="checkbox" v-model="todo.completed">
                                    </label>
                                    <p 
                                        v-if="!todo.editing"
                                        @dblclick="editTodo(todo)"
                                        :class="{completed: todo.completed,title: true}">
                                            {{todo.title}}  
                                    </p>
                                    <input 
                                        v-else
                                        class="input is-large" 
                                        type="text" 
                                        placeholder="What needs to be done"
                                        v-model="todo.title"
                                        @blur="doneEdit(todo)"
                                        @keyup.enter="doneEdit(todo)"
                                        @keyup.esc="cancelEdit(todo)"
                                        v-focus
                                    >   
                                    <p class="subtitle">...</p>
                                    <span :class="['tag', todo.completed ? 'is-success' : 'is-danger']">{{ todo.completed ? 'completed' : 'pending' }}</span>
                                </article>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
         <footer class="card-footer">
             <span class="card-footer-item">
                <label class="checkbox ">
                    <input type="checkbox" :checked="!anyRemaining" @click="checkAllTodos">
                    Check all
                </label>
             </span>            
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <span href="#" class="card-footer-item">{{remaining}} item left.</span>
        </footer>
    </div>  
</template>

<script>
export default {
    name: 'TodoList',
    data () {
        return {
            newTodo: '',
            idForTodo: 3,
            beforeEditCache: '',
            todos: [
                {
                    id: 1,
                    title: 'Finish vue screencast',
                    completed: false,
                    editing: false
                },
                {
                    id: 2,
                    title: 'Finish eating',
                    completed: true,
                    editing: false
                }
            ]
        }
    },
    computed: {
        remaining () {
            return this.todos.filter(todo => !todo.completed).length
        },
        anyRemaining () {
            return this.remaining != 0
        }
    },
    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
            el.focus()
            }
        }
    },
    methods: {
        checkAllTodos (event) {
            this.todos.forEach(todo => {
                todo.completed = event.target.checked
            })
        },
        cancelEdit (todo) {    
            todo.title = this.beforeEditCache        
            todo.editing = false
        },
        doneEdit (todo) {
            if (todo.title.trim() == '') {
                todo.title = this.beforeEditCache
            }
            todo.editing = false
        },
        editTodo (todo) {
             this.beforeEditCache = todo.title
            todo.editing = true
        },
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
.completed {
    text-decoration: line-through;
    color: grey
}
</style>
