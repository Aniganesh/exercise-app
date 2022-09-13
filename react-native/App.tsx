import React, {FC} from 'react';
import type {} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {StoreProvider} from 'easy-peasy';

import store from './Stores';
import LoginScreen from './Screens/Login';
import SignUpScreen from './Screens/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginSignUpScreen from './Screens/LoginSignup';
import {theme} from './Theme';

const Stack = createNativeStackNavigator();

const App: FC<unknown> = () => {
  const transitionName = 'slide_from_right';

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={LoginSignUpScreen}
              options={{
                animation: transitionName,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                animation: transitionName,
              }}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignUpScreen}
              options={{
                animation: transitionName,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
