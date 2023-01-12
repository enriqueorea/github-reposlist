import { create } from "zustand";

import { persist } from "zustand/middleware";

interface FavoritesState {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

export const useFavorites = create(
  persist<FavoritesState>(
    (set) => ({
      favorites: [],
      addFavorite: (id: number) =>
        set((state) => {
          return { favorites: [...state.favorites, id] };
        }),
      removeFavorite: (id: number) =>
        set((state) => {
          return {
            favorites: state.favorites.filter((item) => item !== id),
          };
        }),
    }),
    {
      name: "favorites",
    }
  )
);
