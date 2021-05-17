import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header'
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { myApi } from '../utils/Api'
import { CurrentUserContext, defaultUser } from '../contexts/CurrentUserContext'

function App() {

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsSelectedCard(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);

    setSelectedCard({});
    setIsSelectedCard(false);
  }

  // функция изменения аватара
  function handleUpdateAvatar(avatarLink) {
    myApi.editAvatar(avatarLink)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
        console.log('Аватар пользователя изменен.')
      })
      .catch(err => console.log('Ошибка при изменении аватара пользователя.', err))
  }

  // функция изменения данных пользоваталя
  function handleUpdateUser(name, about) {
    myApi.editUserInfo(name, about)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
        console.log('Данные пользователя изменены.')
      })
      .catch(err => console.log('Ошибка при изменении данных пользователя.', err))
  }

  // дабавить новую карточку
  function handleAddPlaceSubmit(newCard) {
    myApi.addNewCard(newCard)
      .then(resNewCard => {
        setCards([resNewCard, ...cards])
        closeAllPopups()
        console.log('Добавлена новая карточка.')
      })
      .catch(err => console.log('Ошибка при добавлении карточки.', err))
  }

  // добавать/убрать лайк на карточку
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    myApi.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  //удалить карточку
  function handleCardDelete(card) {
    myApi.delCard(card._id)
      .then((res) => {
        const result = cards.filter(c => c._id !== card._id);
        setCards(result);
        console.log(res.message)
      });
  }
  //

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [isSelectedCard, setIsSelectedCard] = useState(false);

  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(defaultUser); // создали стейт переменную

  // API запрос картачек сохраненных на сервере
  useEffect(() => {
    myApi.loadCards()
      .then(cardsData => {

        const data = cardsData.map(item => {
          return {
            _id: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes,
            owner: item.owner,
          }
        })
        setCards(data)
      })
      .catch(err => `Ошибка при загрузке карточек - ${err}`)
  }, []);

  // API запрос на сервере панных о пользователе
  useEffect(() => {
    myApi.loadUserData()
      .then(userData => {
        setCurrentUser(userData)
      })
      .catch(err => `Ошибка при загрузке данных о пользователе - ${err}`)
  }, []);


  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}

          onCardClick={handleCardClick} card={selectedCard} isSelectedCard={isSelectedCard}
          cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}

          onClosePopups={closeAllPopups}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
