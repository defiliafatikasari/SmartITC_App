import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (item) => {
    if (!favorites.some(favorite => favorite.title === item.title)) {
      setFavorites([...favorites, item]);
    }
  };
  const removeFavorite = (item) => {
    setFavorites(favorites.filter(favorite => favorite.title !== item.title));
  };
  const isFavorite = (course) => {
    return favorites.some(favorite => favorite.title === course.title);
  };
  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
export const useFavorites = () => useContext(FavoriteContext);
export { FavoriteContext };
