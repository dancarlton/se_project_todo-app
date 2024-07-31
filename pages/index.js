import { initialTodos, validationConfig } from '../utils/constants.js'
import Todo from '../components/Todo.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import TodoCounter from '../components/TodoCounter.js'

const addTodoButton = document.querySelector('.button_action_add')
const addTodoPopup = document.querySelector('#add-todo-popup')
const addTodoForm = addTodoPopup.querySelector('.popup__form')

addTodoButton.addEventListener('click', () => {
  popupWithForm.open()
})

function handleAddTodoFormSubmit(inputValues) {
  generateTodo(inputValues)
  newTodoValidator.resetValidation()
}

function generateTodo(data) {
  const todo = new Todo(
    data,
    '#todo-template',
    updateTodoCounter,
    deleteTodoInCounter
  )
  const todoElement = todo.getView()

  todoCounter.updateTotal(true)

  section.addItem(todoElement)
}

function updateTodoCounter(checked) {
  todoCounter.updateCompleted(checked)
}

function deleteTodoInCounter() {
  todoCounter.updateCompleted(false)
  todoCounter.updateTotal(false)
}

const todoCounter = new TodoCounter(initialTodos, '.counter')

const section = new Section({
  items: initialTodos,
  renderer: item => {
    generateTodo(item)
  },
  containerSelector: '.todos__list',
})

const newTodoValidator = new FormValidator(validationConfig, addTodoForm)
newTodoValidator.enableValidation()

const popupWithForm = new PopupWithForm(
  '#add-todo-popup',
  handleAddTodoFormSubmit
)
popupWithForm.setEventListeners()

section.renderItems()
