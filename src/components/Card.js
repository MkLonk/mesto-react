import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card(props) {

  const currentUser = useContext(CurrentUserContext); // подписка на контекст

  function handleClick() {
    const card = { name: props.name, link: props.link }
    props.onCardClick(card);
  }

  function handleLikeClick() {
    const card = { likes: props.likes, _id: props._id, owner: props.owner}
    props.onCardLike(card);
  }

  function handleLikeDelete() {
    const card = { _id: props._id }
    props.onCardDelete(card);
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.owner._id === currentUser._id;
  const isLiked = props.likes.some(i => i._id === currentUser._id);


  return (
    <li className="gallery__element">
      <article className="card">
        <img className="card__image" src={props.link} alt={props.name} onClick={handleClick} />
        <button className="card__delete" type="button" aria-label="Удалить" onClick={handleLikeDelete}
          style={isOwn ? { display: 'block' } : { display: 'none' }} ></button>

        <div className="card__caption-container">
          <h2 className="card__caption">{props.name}</h2>
          <div className="card__like-container">
            <button className={`card__like ${isLiked ? 'card__like_active' : '' }`} type="button" aria-label="Нравится" onClick={handleLikeClick}></button>
            <div className="card__like-counter">{props.likes.length}</div>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Card;