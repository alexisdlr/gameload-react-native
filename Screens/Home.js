import { ImageBackground } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import GameList from "../components/GameList";
import bg from "../assets/bg.jpg";
import { ScrollView } from "react-native";
import NavBar from "../components/NavBar";

const Home = () => {

  return (
    <ScrollView style={styles.container} >
        <NavBar />
        <ImageBackground
          source={bg}
          defaultSource={bg}
          style={{ width: "100%", height: 1000, zIndex: -1 }}
        >
          <View style={{height: '100%'}}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Bienvenido a GameLoad!</Text>
              <Text style={styles.description}>
                Cientos de títulos en videojuegos y opciones para todos los
                gustos, sumérgete en el mundo gamer y forma parte de la
                experiencia.
              </Text>
            </View>
          </View>
        </ImageBackground>
        <GameList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: "#000114",
  },
  title: {
    color: "#fff",
    marginTop: 70,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    paddingHorizontal: 20,
    fontSize: 18,
    textAlign: "center",
  },
  textContainer: {
    height: '100%',
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Home;
