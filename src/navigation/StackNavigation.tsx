import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.menu.name}
      screenOptions={{
        cardStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name={routes.menu.name} component={routes.menu.component} />
      <Stack.Screen name={routes.game.name} component={routes.game.component} />
      <Stack.Screen
        name={routes.gameOver.name}
        component={routes.gameOver.component}
      />
      <Stack.Screen
        name={routes.leaderBoards.name}
        component={routes.leaderBoards.component}
      />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default StackNavigation;
