class Todo {
  constructor(data, selector) {
    ;(this._id = data.id),
      (this.name = data.name),
      (this.completed = true),
      (this.date = data.date)
  }
}

const generateTodo = data => {
  const todoElement = todoTemplate.content
    .querySelector('.todo')
    .cloneNode(true)
  const todoNameEl = todoElement.querySelector('.todo__name')
  const todoCheckboxEl = todoElement.querySelector('.todo__completed')
  const todoLabel = todoElement.querySelector('.todo__label')
  const todoDate = todoElement.querySelector('.todo__date')
  const todoDeleteBtn = todoElement.querySelector('.todo__delete-btn')

  todoNameEl.textContent = data.name
  todoCheckboxEl.checked = data.completed

  // Apply id and for attributes.
  // The id will initially be undefined for new todos.
  todoCheckboxEl.id = `todo-${data.id}`
  todoLabel.setAttribute('for', `todo-${data.id}`)

  // If a due date has been set, parsing this it with `new Date` will return a
  // number. If so, we display a string version of the due date in the todo.
  const dueDate = new Date(data.date)
  if (!isNaN(dueDate)) {
    todoDate.textContent = `Due: ${dueDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}`
  }

  todoDeleteBtn.addEventListener('click', () => {
    todoElement.remove()
  })

  return todoElement
}
