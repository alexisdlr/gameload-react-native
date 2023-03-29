import { Text } from "react-native";
import { ScrollView } from "react-native";
import { FlatList, View } from "react-native";
import useGames from "../hooks/useGames";
import FadeInView from "./FadeInView";
import GameItem from "./GameItem";

const GameList = () => {
  const { games } = useGames();
  return (
    <View
      style={{
        marginVertical: 30,
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

      <ScrollView horizontal>
        {games ? (
          <FadeInView>
            <FlatList
              data={games}
              initialNumToRender={10}
              horizontal
              showsHorizontalScrollIndicator
              renderItem={({ item }) => <GameItem game={item} />}
              keyExtractor={(item) => item._id.toString()}
              style={{ marginVertical: 50 }}
            />
          </FadeInView>
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

export default GameList;
