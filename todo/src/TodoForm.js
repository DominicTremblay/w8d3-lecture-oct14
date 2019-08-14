import React, {Component} from 'react'

class TodoForm extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      todoContent: ''
    }
  }


  handleSubmit = event => {
    
    event.preventDefault();
    
    // validate

    // send the value to addTodo (fct)

    this.props.addTodo(this.state.todoContent);

    // reset the content of the input
  }

  
  render () {  
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      
        <input type='text' value={this.state.todoContent} onChange={event=> this.setState({todoContent: event.target.value})} placeholder='Enter your todo' />
      
        <input type='submit' value='Submit Todo' />
      </form>
        
      </div>
    )
  }
}

export default TodoForm