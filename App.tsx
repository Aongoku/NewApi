import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigation';


// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  );
};

export default App;

