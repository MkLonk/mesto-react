import React, { useRef } from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {

  const inputRef = useRef(); // записываем объект, возвращаемый хуком, в переменную

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(inputRef.current.value)
    inputRef.current.value = '' // сбрасываем значение инпута 
  }

  return (
    <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
      children={
        <div className="form__inputs">
          <div className="form__input-element">
            <input className="form__input" id="avatar-link-input" type="url" name="avatarLinkInput"
              placeholder="Ссылка на картинку" required ref={inputRef} />
            <span className="form__input-error" id="avatar-link-input-error"></span>
          </div>
        </div>
      } />
  )
}

export default EditAvatarPopup;