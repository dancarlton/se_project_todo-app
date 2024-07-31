import Popup from './Popup.js'

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector)
    this._inputElements = [
      ...this._popupElement.querySelectorAll('.popup__input'),
    ]
    this._formElement = this._popupElement.querySelector('.popup__form')
    this._handleFormSubmit = handleFormSubmit
  }

  _getInputValues() {
    const inputValues = {}
    this._inputElements.forEach(input => {
      // console.log(input)
      inputValues[input.name] = input.value
    })
    return inputValues
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault()

      const inputValues = this._getInputValues()
      this._handleFormSubmit(inputValues)

      this.close()
    })

    super.setEventListeners()
  }
}

export default PopupWithForm
