import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import {Text} from 'react-native-paper';
import useBoot from '../boot';
import Header from '../components/Header';
import LoginScreen from '../Screens/Login';
import LoginSignUpScreen from '../Screens/LoginSignup';
import SignUpScreen from '../Screens/SignUp';

interface RouteNavigationProps {}

const Stack = createNativeStackNavigator();
const transitionName = 'slide_from_right';

const RouteNavigation: FC<RouteNavigationProps> = () => {
  const {isBootDone} = useBoot();
  if (!isBootDone) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LoginSignUpScreen}
          options={{
            animation: transitionName,
            header: () => null,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            animation: transitionName,
            header: () => <Header heading="Login" />,
          }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{
            animation: transitionName,
            header: () => <Header heading="Sign up" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = {
  loadingContainer: {
    height: '100%',
  } as ViewStyle,
};
