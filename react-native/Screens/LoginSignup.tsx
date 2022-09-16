import React, {FC} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import {Button} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';
import BasicViewSkeleton from '../components/BasicViewSkeleton';
import {colorPrimary} from '../Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginSignUpScreen: FC<{
  navigation: {navigate: (path: string) => void};
}> = ({navigation}) => {
  const styles = LoginSignupStyles(useHeaderHeight());
  const handleLoginPress = () => {
    console.log('Pressed Login.');
    navigation.navigate('login');
  };

  const handleSignUpPress = () => {
    console.log('Pressed Sign Up.');
    navigation.navigate('Sign Up');
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

export const LoginSignupStyles = (headerHeight: number) =>
  StyleSheet.create({
    viewParent: {
      width: windowWidth,
      height: windowHeight - headerHeight,
      justifyContent: 'center',
    },
    viewChild: {
      // flex: 1,
      // backgroundColor: '#105090',
      width: windowWidth * 0.6,
      height: (windowHeight - headerHeight) * 0.2,
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
      borderColor: colorPrimary,
      borderWidth: 1,
    },
  });
