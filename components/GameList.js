import { Text } from "react-native";
import { ScrollView } from "react-native";
import { FlatList, View } from "react-native";
import useGames from "../hooks/useGames";
import GameItem from "./GameItem";

const GameList = () => {
  const { games } = useGames();
  return (
    <View
      style={{
        marginVertical: 80,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
      }}
    >
      <Text
        style={{
          color: "#5800FF",
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Juegos que podrían gustarte:
      </Text>

        {games ? (
          <FlatList
            data={games}
            initialNumToRender={10}
            horizontal
            showsHorizontalScrollIndicator
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
    </View>
  );
};

export default GameList;
