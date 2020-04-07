import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import Home from './components/Home';
import RaceResult from './components/RaceResult'
import ResultDetails from './components/ResultDetails'
import QualifyingResults from './components/QualifyingResults';
import QualifyingDetails from './components/QualifyingDetails';
import DriverStandings from './components/DriverStandings';
import DriverDetails from './components/DriverDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Race result" component={RaceResult} />
        <Stack.Screen name="Result details" component={ResultDetails} />
        <Stack.Screen name="Qualifying result" component={QualifyingResults} />
        <Stack.Screen name="Qualifying details" component={QualifyingDetails} />
        <Stack.Screen name="Driver standing" component={DriverStandings} />
        <Stack.Screen name="Driver details" component={DriverDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
