import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

import { initialTodos, validationConfig } from '../utils/constants.js'
import Todo from '../components/Todo.js'
import FormValidator from '../components/FormValidator.js'

const addTodoButton = document.querySelector('.button_action_add')
const addTodoPopup = document.querySelector('#add-todo-popup')
const addTodoForm = addTodoPopup.querySelector('.popup__form')
const addTodoCloseBtn = addTodoPopup.querySelector('.popup__close')
const todosList = document.querySelector('.todos__list')

const openModal = modal => {
  modal.classList.add('popup_visible')
}

const closeModal = modal => {
  modal.classList.remove('popup_visible')
}

const generateTodo = data => {
  const todo = new Todo(data, '#todo-template')
  const todoElement = todo.getView()

  return todoElement
}

addTodoButton.addEventListener('click', () => {
  openModal(addTodoPopup)
})

addTodoCloseBtn.addEventListener('click', () => {
  closeModal(addTodoPopup)
})

addTodoForm.addEventListener('submit', evt => {
  evt.preventDefault()

  const id = uuidv4()
  const name = evt.target.name.value
  const dateInput = evt.target.date.value

  const date = new Date(dateInput)
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset())

  const values = { id, name, date }
  const todo = generateTodo(values)
  todosList.append(todo)
  closeModal(addTodoPopup)
  newTodoValidator.resetValidation()
})

initialTodos.forEach(item => {
  const todo = generateTodo(item)
  todosList.append(todo)
})

const newTodoValidator = new FormValidator(validationConfig, addTodoForm)
newTodoValidator.enableValidation()
