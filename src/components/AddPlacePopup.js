import React, { useRef, useEffect } from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {

  const nameRef = useRef(); // записываем объект, возвращаемый хуком, в переменную
  const linkRef = useRef();

  useEffect(() => {
    nameRef.current.value = '' // сбрасываем значение инпута
    linkRef.current.value = ''
  }, [props.isOpen]);


  function handleSubmit(e) {
    e.preventDefault();

    const newCard = {
      name: nameRef.current.value,
      link: linkRef.current.value
    }

    props.onAddPlace(newCard)
  }


  return (
    <PopupWithForm name="add-gallery" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
      children={
        <div className="form__inputs">
          <div className="form__input-element">
            <input className="form__input" id="mesto-name-input" type="text" name="name"
              placeholder="Название" required ref={nameRef} />
            <span className="form__input-error" id="mesto-name-input-error"></span>
          </div>

          <div className="form__input-element">
            <input className="form__input" id="mesto-link-input" type="url" name="link"
              placeholder="Ссылка на картинку" required ref={linkRef} />
            <span className="form__input-error" id="mesto-link-input-error"></span>
          </div>
        </div>
      } />
  )
}

export default AddPlacePopup