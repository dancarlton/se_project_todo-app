class Todo {
  constructor(data, selector) {
    this._id = data.id
    this.name = data.name
    this.completed = data.completed
    this.date = data.date
    this._templateElement = document
      .querySelector(selector)
      .content.querySelector('.todo')
      .cloneNode(true)
  }

  getView() {
    const todoElement = this._templateElement.content
      .querySelector('.todo')
      .cloneNode(true)
    const todoNameEl = todoElement.querySelector('.todo__name')
    const todoCheckboxEl = todoElement.querySelector('.todo__completed')
    const todoLabel = todoElement.querySelector('.todo__label')
    const todoDate = todoElement.querySelector('.todo__date')
    const todoDeleteBtn = todoElement.querySelector('.todo__delete-btn')
  }
}

export default Todo
