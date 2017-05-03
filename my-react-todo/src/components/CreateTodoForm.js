import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import Todo from './Todo'

class CreateTodoForm extends Component {
  constructor() {
    super()
    this.state = {
      todo: ''
    }
  }

  onInputChange(event) {
    console.log('create todo input changed')
    this.setState ({
      todo: event.target.value
    })
  }

  onFormSubmit(event) {
    console.log('form submitted')
    event.preventDefault()
    let newTodo = this.state.todo
    this.props.createTodo(newTodo)
    this.setState({
      todo: ''
    })
  }

  render(){
    return (
      <div className="todosComponent">
        <CreateTodoForm
          createTodo={this.createTodo.bind(this)} />
        <Todo
          todos={this.state.todos} />
      </div>
    )
  }

  render(){
    return (
      <div className='createForm todoForm'>
        <h2>Create Todo Here!</h2>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />
          <button type='submit'>Create Todo!</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm
