import { StyleSheet, Text, View } from 'react-native';
import { GamesProvider } from './context/GamesProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Games from './Screens/Games';
import Home from './Screens/Home';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <GamesProvider>
      <View style={{backgroundColor: '#000114', width: '100%'}}>
        <NavigationContainer style={{paddindVertical: 20}} >
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home-outline'
                    : 'home-outline';
                } else if (route.name === 'Juegos') {
                  iconName = focused ? 'game-controller-outline' : 'game-controller-outline';
                }
                size = 30
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              headerShown: false,
              tabBarLabelStyle: {fontSize: 15},
              tabBarStyle: {backgroundColor: '#000114', borderColor: '#000', paddingVertical: 20, height: 65, borderTopColor: '#5800FF'},
              tabBarActiveTintColor: '#5800FF',
              tabBarInactiveTintColor: 'gray',
              
            }) }
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Juegos" component={Games} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </GamesProvider>

  );
}
