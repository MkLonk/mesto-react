function ImagePopup(props) {

  return (
      /* Попап для полноэкранного просмотра карточки из gallery */
      <div className={`popup popup_full-screen ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="full-screen">
          <img className="full-screen__image" src={props.card.link} alt={props.card.name} />
          <h2 className="full-screen__caption">{props.card.name}</h2>
          <button className="popup__button-close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        </div>
      </div>
  )
}

export default ImagePopup;