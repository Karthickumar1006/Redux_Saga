// App.js or index.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { Provider } from 'react-redux';
import store from './src/store/store';
const Stack = createStackNavigator();

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>
  );
};

export default App;
