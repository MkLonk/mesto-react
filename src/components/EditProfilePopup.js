import React, { useState, useEffect, useContext } from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {

  const currentUser = useContext(CurrentUserContext); // подписка на контекст
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleAboutChange(e) {
    setAbout(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(name, about)
  }

  return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
      children={
        <div className="form__inputs">
          <div className="form__input-element">
            <input className="form__input" id="user-name-input" type="text" name="userNameInput" placeholder="Ваше имя?"
              value={name} onChange={handleNameChange} required />
            <span className="form__input-error" id="user-name-input-error"></span>
          </div>

          <div className="form__input-element">
            <input className="form__input" id="user-job-input" type="text" name="userJobInput" placeholder="Чем занимаетесь?"
              value={about} onChange={handleAboutChange} required />
            <span className="form__input-error" id="user-job-input-error"></span>
          </div>
        </div>
      } />
  )
}

export default EditProfilePopup;