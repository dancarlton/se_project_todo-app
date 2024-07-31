export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector)
  }

  open() {
    this._popupElement.classList.add('popup_visible')
    document.addEventListener('keydown', this._handleEscapeClose)
  }

  close() {
    this._popupElement.classList.remove('popup_visible')
    document.removeEventListener('keydown', this._handleEscapeClose)
  }

  _handleEscapeClose = event => {
    if (event.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    const popupCloseButton = this._popupElement.querySelector('.popup__close')

    popupCloseButton.addEventListener('click', () => {
      this.close()
    })
  }
}
