function PopupWithForm(props) {
  return (
    
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <form className={`form form-${props.name}`} name={props.name} method="get">
        <h2 className="form__title">{props.title}</h2>
        {/* тут инпуты */}

          {props.children}

        <button className="form__button-save" type="submit" value="Сохранить">Да</button>
        <button className="popup__button-close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </form>
    </div>

  )
}

export default PopupWithForm;

/* попапы
  Редактировать профиль
  Новое место
  Обновить аватар
  Вы уверены? */