import $ from 'jquery-ajax'

class TodoModel {
  static all() {
    let request = $.ajax({
      url: "https://super-crud.herokuapp.com/todos",
      method: 'GET'
    })
    return request
  }

  static create(todo) {
    let request = $.ajax({
      url: 'https://super-crud.herokuapp.com/todos',
      method: 'post',
      data: todo
    })
    return request
  }

  static delete(todo) {
    let request = $.ajax({
      url: 'https://super-crud.herokuapp.com/todos/' + todo._id,
      method: 'delete'
    })
    return request
  }

  static update(newTodoBody, id) {
    let request = $.ajax ({
      url: 'https://super-crud.herokuapp.com/todos/' + id,
      method: 'put',
      data: {body: newTodoBody}
    })
    return request
  }
}

export default TodoModel
