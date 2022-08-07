import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewWidth = windowWidth * 0.6;
const viewHeight = windowHeight * 0.4;
const colorPrimary = '#1990d5';
const colorContrast = '#ffffff';
const colorSelection = '#a3d3ee';
const colorInputText = '#000';
const textInputTheme = {
  colors: {
    primary: colorPrimary,
    text: colorInputText,
    background: colorContrast,
    placeholder: colorPrimary,
  },
};

const LoginScreen = () => {
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

const styles = StyleSheet.create({
  viewParent: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    backgroundColor: colorContrast,
  },
  viewChild: {
    // flex: 1,
    // backgroundColor: '#bbb',
    width: viewWidth,
    height: viewHeight,
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

export default LoginScreen;
