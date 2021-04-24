function Card(props) {

  function handleClick() {
    const card = { name: props.name, link: props.link }
    props.onCardClick(card);
  }


  return (
    <li className="gallery__element">
      <article className="card">
        <img className="card__image" src={props.link} alt={props.name} onClick={handleClick} />
        <button className="card__delete" type="button" aria-label="Удалить"></button>
        <div className="card__caption-container">
          <h2 className="card__caption">{props.name}</h2>
          <div className="card__like-container">
            <button className="card__like" type="button" aria-label="Нравится"></button>
            <div className="card__like-counter">{props.likes.length}</div>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Card;