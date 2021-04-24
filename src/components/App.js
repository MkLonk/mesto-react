import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header'
import Main from './Main';

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

    setSelectedCard({})
    setIsSelectedCard(false)
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [isSelectedCard, setIsSelectedCard] = useState(false);


  return (
    <div className="root">

      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick} isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        onEditProfile={handleEditProfileClick} isEditProfilePopupOpen={isEditProfilePopupOpen}
        onAddPlace={handleAddPlaceClick} isAddPlacePopupOpen={isAddPlacePopupOpen}

        onCardClick={handleCardClick} card={selectedCard} isSelectedCard={isSelectedCard}

        onClosePopups={closeAllPopups}
      />
      <Footer />

    </div>
  );
}

export default App;
