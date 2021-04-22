//import './App.css';
import React, {useState} from 'react';
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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =  useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  return (
    <div className="root">

      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick} isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        onEditProfile={handleEditProfileClick} isEditProfilePopupOpen={isEditProfilePopupOpen}
        onAddPlace={handleAddPlaceClick} isAddPlacePopupOpen={isAddPlacePopupOpen}
        onClosePopups={closeAllPopups}
      />
      <Footer />

    </div>
  );
}

export default App;
