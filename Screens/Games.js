import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import GameItem from "../components/GameItem";
import NavBar from "../components/NavBar";
import useGames from "../hooks/useGames";

const Games = () => {
  const { games } = useGames();
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={{ marginTop: 80 }}>
        <Text style={styles.title}>Juegos</Text>
      </View>
      <ScrollView>
        {games ? (
          <FlatList
            data={games}
            renderItem={({ item }) => <GameItem game={item} />}
            keyExtractor={(item) => item._id.toString()}
            style={{ marginVertical: 50 }}
          />
        ) : (
          <Text
            style={{
              color: "red",
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 50,
            }}
          >
            Hubo un error
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000114",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#5800FF",
    marginVertical: 20,
    paddingHorizontal: 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Games;
