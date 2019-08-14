import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default class App extends Component {
  
  constructor(props) {

    super();
    this.state = {
      todos: [{
        id: 1,
        task: "Walk the dog",
        completed: false
      },
      {
        id: 2,
        task: 'Go to the movies',
        completed: false
      }
    ]
    }
  }

  addTodo = todoContent => {

    // create a new todo object

    const newTodo = {
      id: Math.random().toString(36).substr(2,6),
      task: todoContent,
      completed: false
    }

    // update the state
    this.setState({todos: [...this.state.todos, newTodo]})

  }

  deleteTodo = id => {

    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})

  }

  componentDidMount() {

    // axios.get('/todos')
    //   .then(res => this.setState({todos: res.data}))

  }
  
  render() {
    return (
      <div>
        <h1>List of Todos</h1>


        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>

        <TodoForm addTodo={this.addTodo}/>



      </div>
    )
  }
}
