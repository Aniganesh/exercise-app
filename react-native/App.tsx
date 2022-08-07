import React, {FC} from 'react';
import type {} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StoreProvider} from 'easy-peasy';

import store from './Stores';
import LoginSignUpScreen from './Screens/LoginSignUp';
import LoginScreen from './Screens/Login';
import SignUpScreen from './Screens/SignUp';

const App: FC<unknown> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <SignUpScreen />
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
