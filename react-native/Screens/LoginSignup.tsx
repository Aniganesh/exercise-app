import React from 'react';
import {View} from 'react-native';

import {Button} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';

import BasicViewSkeleton from '../components/BasicViewSkeleton';
import {colorPrimary, LoginSignupStyles} from '../components/Styles';

const LoginSignUpScreen = () => {
  const styles = LoginSignupStyles(useHeaderHeight());
  const handleLoginPress = () => {
    console.log('Pressed Login.');
  };

  const handleSignUpPress = () => {
    console.log('Pressed Sign Up.');
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
