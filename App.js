import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/Home';
import DetailScreen from './Screens/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'History' }}
        />
        <Stack.Screen
          name="detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: `Detail of: ${route.params.number}`
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
