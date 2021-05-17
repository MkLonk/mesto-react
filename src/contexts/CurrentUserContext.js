import React from 'react';
import loadAvatarPath from '../images/loadAvatar.gif';

export const CurrentUserContext = React.createContext();

export const defaultUser = {
  name: 'Загружаем...',
  about: 'Загружаем...',
  avatar: loadAvatarPath,
}