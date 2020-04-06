import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import Home from './components/Home';
import RaceResult from './components/RaceResult'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Race result" component={RaceResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
