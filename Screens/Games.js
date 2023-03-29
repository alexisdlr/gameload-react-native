import { StyleSheet, Text, View } from "react-native"
import NavBar from "../components/Navbar";

const Games = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <Text style={styles.title}>Bienvenido a GameLoad!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000114',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#5800FF',
    marginVertical: 20,
    paddingHorizontal: 20,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default Games

