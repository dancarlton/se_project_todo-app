import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

import { initialTodos, validationConfig } from '../utils/constants.js'
import Todo from '../components/Todo.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../scripts/Section.js'
import Popup from '../components/Popup.js'
import PopupWithForm from '../components/PopupWithForm.js'
import TodoCounter from '../components/TodoCounter.js'

const addTodoButton = document.querySelector('.button_action_add')
const addTodoPopup = document.querySelector('#add-todo-popup')
const addTodoForm = addTodoPopup.querySelector('.popup__form')
const addTodoCloseBtn = addTodoPopup.querySelector('.popup__close')
const todosList = document.querySelector('.todos__list')

const todoCounter = new TodoCounter(initialTodos, '.counter')

const section = new Section({
  items: initialTodos,
  renderer: item => {
    generateTodo(item)
  },
  containerSelector: '.todos__list',
})

const generateTodo = data => {
  // debugger
  const todo = new Todo(data, '#todo-template')
  const todoElement = todo.getView()

  section.addItem(todoElement)
  newTodoValidator.resetValidation()
}

addTodoButton.addEventListener('click', () => {
  popupWithForm.open()
})

addTodoCloseBtn.addEventListener('click', () => {
  popupWithForm.close()
})

const newTodoValidator = new FormValidator(validationConfig, addTodoForm)
newTodoValidator.enableValidation()

const popupWithForm = new PopupWithForm('#add-todo-popup', generateTodo)
popupWithForm.setEventListeners()

section.renderItems()
