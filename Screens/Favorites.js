import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useGames from "../hooks/useGames";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import GameItem from "../components/GameItem";
import NavBar from "../components/NavBar";

const Favorites = () => {
  const { favorites } = useGames();
  return (
    <View style={styles.container}>
      <NavBar />
      <View>
        <Text
          style={{
            color: "#5800FF",
            fontSize: 40,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 100,
            paddingHorizontal: 20,
          }}
        >
          Tus favoritos
        </Text>
      </View>
        {favorites ? (
          <FlatList
            data={favorites}
            renderItem={({ item }) => <GameItem game={item} isFavorite />}
            keyExtractor={(item) => item._id.toString()}
            style={{ marginVertical: 50 }}
          />
        ) : (
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 50,
            }}
          >
            No hay favoritos
          </Text>
        )}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000114",
    justifyContent: "center",
    alignItems: "center",
  },
});
