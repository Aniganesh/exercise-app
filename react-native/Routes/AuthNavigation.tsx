import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import Header from '../components/Header';
import LoginScreen from '../Screens/Login';
import LoginSignUpScreen from '../Screens/LoginSignup';
import SignUpScreen from '../Screens/SignUp';

interface AuthNavigationProps {}
const AuthNavigationStack = createNativeStackNavigator();
const transitionName = 'slide_from_right';

const AuthNavigation: FC<AuthNavigationProps> = () => {
  return (
    <>
      <AuthNavigationStack.Navigator initialRouteName="Home">
        <AuthNavigationStack.Screen
          name="Home"
          component={LoginSignUpScreen}
          options={{
            animation: transitionName,
            header: () => null,
          }}
        />
        <AuthNavigationStack.Screen
          name="login"
          component={LoginScreen}
          options={{
            animation: transitionName,
            header: () => <Header heading="Login" />,
          }}
        />
        <AuthNavigationStack.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{
            animation: transitionName,
            header: () => <Header heading="Sign up" />,
          }}
        />
      </AuthNavigationStack.Navigator>
    </>
  );
};

export default AuthNavigation;
