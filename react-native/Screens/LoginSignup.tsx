import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth = windowWidth * 0.6;
const viewHeight = windowHeight * 0.2;
const colorPrimary = '#1990d5';
const colorSecondary = '#9b30d9';
const colorContrast = '#ffffff';

const LoginSignUpScreen = () => {
  const handleLoginPress = () => {
    console.log('Pressed Login.');
  };

  const handleSignUpPress = () => {
    console.log('Pressed Sign Up.');
  };
  return (
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
          color={colorSecondary}
          onPress={handleSignUpPress}>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewParent: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
  },
  viewChild: {
    // flex: 1,
    // backgroundColor: '#105090',
    width: viewWidth,
    height: viewHeight,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    position: 'relative',
    marginVertical: 10,
    width: '100%',
    backgroundColor: colorPrimary,
  },
  buttonSignUp: {
    position: 'relative',
    marginVertical: 10,
    width: '100%',
    borderColor: colorSecondary,
    borderWidth: 1,
  },
});

export default LoginSignUpScreen;
