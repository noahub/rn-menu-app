import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [mealIds, setMealIds] = useState([]);
  const addFavorite = (id) => {
    setMealIds((currentIds) => [...currentIds, id]);
  };
  const removeFavorite = (id) => {
    setMealIds((currentIds) => currentIds.filter((mealId) => mealId !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ ids: mealIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
