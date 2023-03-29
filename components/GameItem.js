import { TouchableOpacity } from "react-native"
import { useWindowDimensions } from "react-native"
import { Image, Text, View } from "react-native"
import { StyleSheet } from "react-native-web"

const GameItem = ({ game }) => {
  const { width } = useWindowDimensions()
  console.log(width)
  return (
    <View style={styles.cardContainer}>

      <Image source={game.img} style={styles.img} />

      <View >
        <Text style={styles.text}>{game.name}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Descargar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 700
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: '8px',
    justifyContent: 'center'
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 10
  },
  button: {
    backgroundColor: '#5800FF',
    marginVertical: 15,
    borderRadius: 8,
    paddingVertical: 8,
    color: '#fff'
  }
})

export default GameItem