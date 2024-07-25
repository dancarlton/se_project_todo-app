export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector)
        console.log(this._popupElement)
    }

    open(){
        this._popupElement.classList.add('popup_visible')
    }

    close(){
        this._popupElement.classList.remove('popup_visible')
    }

    _handleEscapeClose(event){
        if(event.key === "Escape"){
            this._popupElement.close()
        }
    }

    setEventListeners(){
        const popupCloseButton = document.querySelector('popup__close')

        popupCloseButton.addEventListener('click', () => {
            this._popupElement.close()
        })
    }
}
