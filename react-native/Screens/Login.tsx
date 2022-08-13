import React from 'react';
import {View, Keyboard} from 'react-native';

import {Button, TextInput} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';

import {
  colorPrimary,
  colorSelection,
  LoginStyles,
  textInputTheme,
} from '../components/Styles';

const LoginScreen = () => {
  const styles = LoginStyles(useHeaderHeight());

  const [emailId, setEmailId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordSecure, setIsPasswordSecure] = React.useState(true);
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);

  const handleLoginPress = () => {
    Keyboard.dismiss();
    console.log('Pressed Login. Email: ' + emailId + ', Password: ' + password);
    setIsButtonLoading(true);
    setTimeout(() => setIsButtonLoading(false), 1000); //Soft Delay for Loading icon in button
  };

  return (
    <View style={styles.viewParent}>
      <View style={styles.viewChild}>
        {/* TODO: 1. Fix page scroll issue while keyboard is displayed.
                  2. Add Email Validations and display error message.  */}
        <TextInput
          label="email"
          value={emailId}
          onChangeText={emailId => setEmailId(emailId.replace(/[ ]+/g, ''))}
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
          secureTextEntry={isPasswordSecure}
          value={password}
          onChangeText={password => setPassword(password)}
          theme={textInputTheme}
          style={styles.input}
          selectionColor={colorSelection}
          mode="outlined"
          maxLength={50}
          textContentType="password"
          right={
            <TextInput.Icon
              name={isPasswordSecure ? 'eye' : 'eye-off'}
              onPress={() => {
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true);
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
  );
};

export default LoginScreen;
