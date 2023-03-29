import { Image, Text, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-web";
import Ionicons from "react-native-vector-icons/Ionicons";
import useGames from "../hooks/useGames";
import { Linking } from "react-native";
import { Alert } from "react-native";

const GameItem = ({ game, isFavorite }) => {
  const { handleAddFav, handleDeleteFav } = useGames();
  const handlePress = () => {
    handleAddFav(game);
    Alert.alert("Juego agregado a favoritos");
  };
  const handleDelete = () => {
    handleDeleteFav(game._id)
  }
  const handleLink = () => {
    Linking.openURL(game.link)
  }
  return (
    <View style={styles.cardContainer}>
      <Image source={game.img} style={styles.img} />

      <View>
        <Text style={styles.text}>{game.name}</Text>
        {isFavorite ? (
          <View>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'red', width: 200, alignSelf:'center'}]} onPress={handleDelete} >
              <Text style={styles.textButton}>Quitar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.button} onPress={handleLink}>
              <Text style={styles.textButton}>Descargar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
              <Ionicons name={"heart-outline"} size={25} color={"red"} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: 700,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: "8px",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    padding: 10,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: "#5800FF",
    marginVertical: 15,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    color: "#fff",
  },
});

export default GameItem;
