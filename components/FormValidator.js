class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings
    this._formElement = formElement
    this._inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    )
    this._buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    )
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement)
    } else {
      this._hideInputError(inputElement)
    }
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElementId = `#${inputElement.id}-error`
    const errorElement = this._formElement.querySelector(errorElementId)
    inputElement.classList.add(this._settings.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(this._settings.errorClass)
  }

  _hideInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`
    const errorElement = this._formElement.querySelector(errorElementId)
    inputElement.classList.remove(this._settings.inputErrorClass)
    errorElement.classList.remove(this._settings.errorClass)
    errorElement.textContent = ''
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass)
      this._buttonElement.disabled = true
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass)
      this._buttonElement.disabled = false
    }
  }

  _hasInvalidInput() {
    this._inputList.some(inputElement => {
      !inputElement.validity.valid
    })
  }

  _setEventListeners() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this._toggleButtonState()
      })
    })
  }

  enableValidation() {
    this._formElement = document.querySelector(this._settings.formSelector)
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    })
    this._setEventListeners()
    this._toggleButtonState()
  }

  resetValidation() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement)
      inputElement.value = ''
    })
    this._toggleButtonState()
  }
}

export default FormValidator
