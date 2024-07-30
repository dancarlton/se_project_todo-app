export default class Todo {
  constructor(data, selector, handleCheckboxClick) {
    this._data = data
    this._templateElement = document.querySelector(selector)
    this._handleCheckboxClick = handleCheckboxClick
    this._setInitialCompletedState()
  }

  _setInitialCompletedState () {
    if (this._data.completed) {
      return
    } else {
      this._data.completed = false
    }
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener('change', () => {
      this._data.completed = !this._data.completed
      this._handleCheckboxClick(this._data.completed)
    })

    this._todoDeleteBtn.addEventListener('click', () => {
      this._todoElement.remove()
    })
  }

  _generateCheckbox() {
    this._todoCheckboxEl = this._todoElement.querySelector('.todo__completed')
    this._todoLabel = this._todoElement.querySelector('.todo__label')
    this._todoCheckboxEl.checked = this._data.completed
    this._todoCheckboxEl.id = `todo-${this._data.id}`
    this._todoLabel.setAttribute('for', `todo-${this._data.id}`)
  }

  _setDueDate() {
    if (this._data.date) {
      const dueDate = new Date(this._data.date);
      if (!isNaN(dueDate)) {
        this._todoDate.textContent = `Due: ${dueDate.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}`;
      }
    }
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector('.todo')
      .cloneNode(true)
    this._todoNameEl = this._todoElement.querySelector('.todo__name')

    this._todoDate = this._todoElement.querySelector('.todo__date')
    this._todoDeleteBtn = this._todoElement.querySelector('.todo__delete-btn')

    this._todoNameEl.textContent = this._data.name

    this._generateCheckbox()
    this._setEventListeners()
    this._setDueDate()

    return this._todoElement
  }
}
