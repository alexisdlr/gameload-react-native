import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const NavBar = () => {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.nav, {width}]}>
      <Text style={styles.logo}>GameLoadX</Text>
     
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
    justifyContent: 'space-between'
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },


});

export default NavBar;
