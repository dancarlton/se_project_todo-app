import Popup from './Popup.js'

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector)
    this._inputElements = [
      ...this._popupElement.querySelectorAll('.popup__input'),
    ]
  }

  _getInputValues() {
    const inputValues = {}
    this._inputElements.forEach(item => {
      inputValues[item.name] = item.value
    })
    return inputValues
  }
}

export default PopupWithForm
