import React, {FC} from 'react';
import type {} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StoreProvider} from 'easy-peasy';

import store from './Stores';
import LoginSignUpScreen from './Screens/LoginSignUp';
import LoginScreen from './Screens/Login';
import SignUpScreen from './Screens/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: FC<unknown> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        {/* TODO: Routing between below screens */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={LoginSignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
