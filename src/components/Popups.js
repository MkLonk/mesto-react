function Popups() {
  return (
    <>



      {/* Попап для полноэкранного просмотра карточки из gallery */}
      <div className="popup popup_full-screen">
        <div className="full-screen">
          <img className="full-screen__image" src="#" alt="alt" />
          <h2 className="full-screen__caption"></h2>
          <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>


      
    </>
  )
}

export default Popups;


{/* 

  //Попап для формы редактирования profile
<div className="popup popup-edit-profile">
<form className="form form_edit-profile" name="formEditProfile" method="get" >
  <h2 className="form__title">Редактировать профиль</h2>
  <div className="form__inputs">

    <div className="form__input-element">
      <input className="form__input" id="user-name-input" type="text" name="userNameInput" placeholder="Ваше имя?"
        required />
      <span className="form__input-error" id="user-name-input-error"></span>
    </div>

    <div className="form__input-element">
      <input className="form__input" id="user-job-input" type="text" name="userJobInput"
        placeholder="Чем занимаетесь?" required />
      <span className="form__input-error" id="user-job-input-error"></span>
    </div>

  </div>
  <button className="form__button-save" type="submit" value="Сохранить">Сохранить</button>
  <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
</form>
</div>


  //Попап для формы редактирования avatar
<div className="popup popup-edit-avatar">
  <form className="form form_edit-avatar" name="formEditAvatar" method="get" >
    <h2 className="form__title">Обновить аватар</h2>
    <div className="form__inputs">

      <div className="form__input-element">
        <input className="form__input" id="avatar-link-input" type="url" name="avatarLinkInput" placeholder="Ссылка на картинку" required />
        <span className="form__input-error" id="avatar-link-input-error"></span>
      </div>

    </div>
    <button className="form__button-save" type="submit" value="Сохранить">Сохранить</button>
    <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
  </form>
</div>


  //Попап для формы добавления новой карточки в gallery
<div className="popup popup-add-gallery">
  <form className="form form_add-gallery" name="formAddGallery" method="get">
    <h2 className="form__title">Новое место</h2>
    <div className="form__inputs">

      <div className="form__input-element">
        <input className="form__input" id="mesto-name-input" type="text" name="name" placeholder="Название"
          required />
        <span className="form__input-error" id="mesto-name-input-error"></span>
      </div>

      <div className="form__input-element">
        <input className="form__input" id="mesto-link-input" type="url" name="link" placeholder="Ссылка на картинку"
          required />
        <span className="form__input-error" id="mesto-link-input-error"></span>
      </div>

    </div>
    <button className="form__button-save" type="submit" value="Сохранить">Сохранить</button>
    <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
  </form>
</div> 

  //Попап перед удалением карточки из gallery
<div className="popup popup_delete-card">
  <form className="form form_delete-card" name="formDelCard" method="get">
    <h2 className="form__title">Вы уверены?</h2>
    <button className="form__button-save" type="submit" value="Сохранить">Да</button>
    <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
  </form>
</div>

*/}