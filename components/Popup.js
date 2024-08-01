export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector)
    this._popupCloseButton = this._popupElement.querySelector('.popup__close')
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

  _handleOverlayClose (event) {
    if (event.target === this._popupElement || event.target === this._popupCloseButton) {
      this.close()
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (event) => {
      this._handleOverlayClose(event)
    })
  }
}
