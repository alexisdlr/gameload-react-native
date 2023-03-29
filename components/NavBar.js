import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const NavBar = () => {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.nav, {width}]}>
      <Text style={styles.logo}>GameLoadX</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    height: 60,
    paddingVertical: 10,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '0',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  button: {
    backgroundColor: '#5800FF',
    marginVertical: 15,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 20,
    color: '#fff'
  }
});

export default NavBar;
