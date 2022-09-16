import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Header from '../components/Header';
import LoginScreen from '../Screens/Login';
import LoginSignUpScreen from '../Screens/LoginSignup';
import SignUpScreen from '../Screens/SignUp';
import {theme} from '../Theme';

interface RouteNavigationProps {}

const Stack = createNativeStackNavigator();
const transitionName = 'slide_from_right';

const RouteNavigation: FC<RouteNavigationProps> = () => {
  // Set up your bottom bar navigation, auth routes here.
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
const styles = {};
