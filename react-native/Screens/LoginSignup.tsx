import React from 'react';
import {View} from 'react-native';

import {Button} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BasicViewSkeleton from '../components/BasicViewSkeleton';
import {colorPrimary, LoginSignupStyles} from '../components/Styles';

const LoginSignUpScreen = ({ navigation }) => {
  const styles = LoginSignupStyles(useHeaderHeight());
  const handleLoginPress = () => {
    console.log('Pressed Login.');
    navigation.navigate('Login')
  };

  const handleSignUpPress = () => {
    console.log('Pressed Sign Up.');
    navigation.navigate('Sign Up')
  };
  return (
    <BasicViewSkeleton>
      <View style={styles.viewParent}>
        <View style={styles.viewChild}>
          <Button
            mode="contained"
            uppercase={false}
            style={styles.buttonLogin}
            dark={true}
            onPress={handleLoginPress}>
            Login
          </Button>
          <Button
            mode="outlined"
            uppercase={false}
            style={styles.buttonSignUp}
            color={colorPrimary}
            onPress={handleSignUpPress}>
            Sign Up
          </Button>
        </View>
      </View>
    </BasicViewSkeleton>
  );
};

export default LoginSignUpScreen;
