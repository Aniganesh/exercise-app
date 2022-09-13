import React from 'react';
import {View, Keyboard, StyleSheet, Dimensions} from 'react-native';

import {Button, TextInput} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';

import BasicViewSkeleton from '../components/BasicViewSkeleton';

import {
  colorContrast,
  colorPrimary,
  colorSelection,
  textInputTheme,
} from '../components/Styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const styles = LoginStyles(useHeaderHeight());

  const [emailId, setEmailId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordShown, setIsPasswordShown] = React.useState(true);
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);

  const handleLoginPress = () => {
    Keyboard.dismiss();
    console.log('Pressed Login. Email: ' + emailId + ', Password: ' + password);
    setIsButtonLoading(true);
    setTimeout(() => setIsButtonLoading(false), 1000); //Soft Delay for Loading icon in button
  };

  return (
    <BasicViewSkeleton>
      <View style={styles.viewParent}>
        <View style={styles.viewChild}>
          {/* TODO: 1. Fix page scroll issue while keyboard is displayed.
                  2. Add Email Validations and display error message.  */}
          <TextInput
            label="email"
            value={emailId}
            onChangeText={_emailId => setEmailId(_emailId.replace(/[ ]+/g, ''))}
            theme={textInputTheme}
            style={styles.input}
            selectionColor={colorSelection}
            mode="outlined"
            autoCapitalize="none"
            maxLength={50}
            textContentType="emailAddress"
          />
          <TextInput
            label="password"
            secureTextEntry={isPasswordShown}
            value={password}
            onChangeText={_password => setPassword(_password)}
            theme={textInputTheme}
            style={styles.input}
            selectionColor={colorSelection}
            mode="outlined"
            maxLength={50}
            textContentType="password"
            right={
              <TextInput.Icon
                name={isPasswordShown ? 'eye' : 'eye-off'}
                onPress={() => {
                  isPasswordShown
                    ? setIsPasswordShown(false)
                    : setIsPasswordShown(true);
                }}
                color={colorPrimary}
                forceTextInputFocus={false}
              />
            }
          />
          <Button
            mode="contained"
            uppercase={false}
            loading={isButtonLoading}
            style={styles.buttonLogin}
            dark={true}
            onPress={handleLoginPress}>
            Login
          </Button>
        </View>
      </View>
    </BasicViewSkeleton>
  );
};

export default LoginScreen;

export const LoginStyles = (headerHeight: number) =>
  StyleSheet.create({
    viewParent: {
      width: windowWidth,
      height: windowHeight - headerHeight,
      justifyContent: 'center',
      backgroundColor: colorContrast,
    },
    viewChild: {
      // flex: 1,
      // backgroundColor: '#bbb',
      width: windowWidth * 0.6,
      height: (windowHeight - headerHeight) * 0.2,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      position: 'relative',
      marginVertical: 10,
      width: '100%',
    },
    buttonLogin: {
      position: 'relative',
      marginVertical: 40,
      width: '100%',
      backgroundColor: colorPrimary,
    },
  });
