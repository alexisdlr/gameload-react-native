import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { clientAxios } from "../axios/clientAxios";

export const GamesContext = createContext();

export const GamesProvider =  ({ children }) => {
  const [games, setGames] = useState([]);
  const [favorites, setFavorites] = useState([]);


  async function handleAddFav(item) {
    // Obtener los favoritos del almacenamiento
    const favorites = await AsyncStorage.getItem('favorites');
    let newFavorites = [];
    
    if (favorites !== null) {
      // Si ya existen favoritos, convertirlos a un arreglo
      newFavorites = JSON.parse(favorites);
      
      // Verificar si el juego ya existe en el arreglo
      if (newFavorites.some((game) => game._id === item._id)) {
        return; // El juego ya está en el arreglo, no lo agregamos de nuevo
      }
    }
    
    // Agregar el juego al arreglo de favoritos
    newFavorites.push(item);
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }
  async function handleDeleteFav(id) {
    const favorites = await AsyncStorage.getItem('favorites');
    let newFavorites = [];
  
    if (favorites !== null) {
      newFavorites = JSON.parse(favorites).filter((game) => game._id !== id);
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    }
  }
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await clientAxios("/games");
        setGames(data);
        const favorites = await AsyncStorage.getItem('favorites');
        if (favorites !== null) {
          setFavorites(JSON.parse(favorites));
        }
      } catch (error) {
        console.error(error);
        Alert.alert(error)
      }
    };
    fetchGames();
  }, []);

  return (
    <GamesContext.Provider value={{ games, setGames, handleAddFav, handleDeleteFav, favorites }}>
      {children}
    </GamesContext.Provider>
  );
};
