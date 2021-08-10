import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen';
import DetailsScreen from './screens/Details';
import RandomDetails from './screens/RandomDetails';

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "My home" }}
      />
    </Stack.Navigator>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="PokeAPI - Home" component={HomeScreen} />
        <Stack.Screen name="Pokemon Details" component={DetailsScreen} />
        <Stack.Screen name="PokeAPI - Function Random" component={RandomDetails} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  
});

export default App;
