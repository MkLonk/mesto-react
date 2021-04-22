function Card({id, link, name, likes}) {

  return (
    <li className="gallery__element" id={id}>
      <article className="card">
        <img className="card__image" src={link} alt={name} />
        <button className="card__delete" type="button" aria-label="Удалить"></button>
        <div className="card__caption-container">
          <h2 className="card__caption">{name}</h2>
          <div className="card__like-container">
            <button className="card__like" type="button" aria-label="Нравится"></button>
            <div className="card__like-counter">{likes.length}</div>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Card;