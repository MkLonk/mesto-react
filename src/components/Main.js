import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { myApi } from '../utils/Api'
import loadAvatarPath from '../images/loadAvatar.gif';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = useState('Загружаем...');
  const [userDescription, setUserDescription] = useState('Загружаем...');
  const [userAvatar, setUserAvatar] = useState(loadAvatarPath);

  const [cards, setCards] = useState([]);

  /****************************************
   * API запрос данных пользователя при загрузки сайта
   ****************************************/
  useEffect(() => {
    myApi.loadUserData()
      .then(userData => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
      })
      .catch(err => `Ошибка при загрузке данных о пользователе - ${err}`)
  }, []);

  /****************************************
   * API запрос картачек сохраненных на сервере
   ****************************************/

  useEffect(() => {
    myApi.loadCards()
      .then(cardsData => {

        const data = cardsData.map(item => {
          return {
            id: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes,
          }
        })
        setCards(data)
      })
      .catch(err => `Ошибка при загрузке данных о пользователе - ${err}`)
  }, []);



  return (
    <main className="content">

      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} >
            <button className="profile__button-avatar-edit" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar} />
          </div>

          <div className="profile__user-container">
            <h1 className="profile__user-name">{userName}</h1>
            <button className="profile__button-edit" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
          </div>
          <button className="profile__button-add" type="button" aria-label="Добавить фото" onClick={props.onAddPlace} />
          <p className="profile__user-job">{userDescription}</p>
        </div>
      </section>

      <section className="gallery">
        <ul className="gallery__photo-grid">
          {cards.map(card => <Card {...card} />)}
        </ul>
      </section>

      <PopupWithForm id="1" name="edit-avatar" title="Обновить аватар" isOpen={props.isEditAvatarPopupOpen} onClose={props.onClosePopups}
        children={
          <div className="form__inputs">
            <div className="form__input-element">
              <input className="form__input" id="avatar-link-input" type="url" name="avatarLinkInput" placeholder="Ссылка на картинку" required />
              <span className="form__input-error" id="avatar-link-input-error"></span>
            </div>
          </div>
        } />
      <PopupWithForm id="2" name="edit-profile" title="Редактировать профиль" isOpen={props.isEditProfilePopupOpen} onClose={props.onClosePopups}
        children={
          <div className="form__inputs">
            <div className="form__input-element">
              <input className="form__input" id="user-name-input" type="text" name="userNameInput" placeholder="Ваше имя?" required />
              <span className="form__input-error" id="user-name-input-error"></span>
            </div>

            <div className="form__input-element">
              <input className="form__input" id="user-job-input" type="text" name="userJobInput" placeholder="Чем занимаетесь?" required />
              <span className="form__input-error" id="user-job-input-error"></span>
            </div>
          </div>
        } />
      <PopupWithForm id="3" name="add-gallery" title="Новое место" isOpen={props.isAddPlacePopupOpen} onClose={props.onClosePopups}
        children={
          <div className="form__inputs">
            <div className="form__input-element">
              <input className="form__input" id="mesto-name-input" type="text" name="name" placeholder="Название" required />
              <span className="form__input-error" id="mesto-name-input-error"></span>
            </div>

            <div className="form__input-element">
              <input className="form__input" id="mesto-link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="form__input-error" id="mesto-link-input-error"></span>
            </div>
          </div>
        } />
      <PopupWithForm id="4" name="delete-card" title="Вы уверены?" isOpen={false} onClose={props.onClosePopups} />


    </main>

  )
}

export default Main;