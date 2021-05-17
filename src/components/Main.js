import React, { useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import Card from './Card';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main(props) {

  const currentUser = useContext(CurrentUserContext); // подписка на контекст

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} >
            <button className="profile__button-avatar-edit" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar} />
          </div>

          <div className="profile__user-container">
            <h1 className="profile__user-name">{currentUser.name}</h1>
            <button className="profile__button-edit" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
          </div>
          <button className="profile__button-add" type="button" aria-label="Добавить фото" onClick={props.onAddPlace} />
          <p className="profile__user-job">{currentUser.about}</p>
        </div>
      </section>

      <section className="gallery">
        <ul className="gallery__photo-grid">
          {props.cards.map(card => <Card
            key={card._id}
            _id={card._id}
            name={card.name}
            link={card.link}
            likes={card.likes}
            owner={card.owner} // Id владельца
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike} // нажатие на лайк
            onCardDelete={props.onCardDelete} //нажитие на удалить
          />)}
        </ul>
      </section>

      <PopupWithForm name="delete-card" title="Вы уверены?" isOpen={false} onClose={props.onClosePopups} />
      <ImagePopup card={props.card} isOpen={props.isSelectedCard} onClose={props.onClosePopups} />

    </main>

  )
}

export default Main;