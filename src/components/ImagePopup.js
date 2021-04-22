function Popups() {
  return (
      /* Попап для полноэкранного просмотра карточки из gallery */
      <div className="popup popup_full-screen">
        <div className="full-screen">
          <img className="full-screen__image" src="#" alt="alt" />
          <h2 className="full-screen__caption"></h2>
          <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
  )
}

export default Popups;