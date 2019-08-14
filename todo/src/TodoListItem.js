import React, {Component} from 'react'

class TodoListItem extends Component {

  constructor(props) {

    super(props);
    
    this.state = {
      completed: false
    }
  }

  handleDelete = event => {

    this.props.deleteTodo(this.props.id);

  }
  
  render() {
    const {id, task, completed} = this.props;
    return (
    <li>
      <input type='checkbox' onChange={event => this.setState({completed: event.target.checked})} checked={this.state.completed} value={task} /> <label>{task} <button onClick={this.handleDelete}>x</button></label>
    </li>
    )   
  }
}

export default TodoListItem
