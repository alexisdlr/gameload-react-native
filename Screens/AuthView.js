import { StyleSheet } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clientAxios } from "../axios/clientAxios";
import { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AuthView = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigation();

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    try {
      const { data } = await clientAxios.post("auth/login", inputs);
      AsyncStorage.setItem("tokenRoms", data.token);
      setAuth(data);
      
    } catch (error) {
      console.log(error)
    }
  }, [inputs, clientAxios])

  const handlePress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>
        HOLAAAA
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={{ color: '#fff' }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000114',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
})

export default AuthView