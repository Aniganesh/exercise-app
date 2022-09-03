import React from 'react';
import {View, Keyboard} from 'react-native';

import {Button, TextInput} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';

import BasicViewSkeleton from '../components/BasicViewSkeleton';

import {
  colorPrimary,
  colorSelection,
  SignUpStyles,
  textInputTheme,
} from '../components/Styles';

const SignUpScreen = () => {
  const styles = SignUpStyles(useHeaderHeight());

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [emailId, setEmailId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordSecure, setIsPasswordSecure] = React.useState(true);
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);

  const handleSignUpPress = () => {
    Keyboard.dismiss();
    console.log(
      'Pressed Sign Up. First Name: ' +
        firstName +
        ', Last Name: ' +
        lastName +
        ', Email: ' +
        emailId +
        ', Password: ' +
        password,
    );
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
            label="first name"
            value={firstName}
            onChangeText={firstName =>
              setFirstName(firstName.replace(/[^a-zA-Z0-9 ]+/g, ''))
            }
            theme={textInputTheme}
            style={styles.input}
            selectionColor={colorSelection}
            mode="outlined"
            maxLength={50}
            textContentType="name"
          />
          <TextInput
            label="last name"
            value={lastName}
            onChangeText={lastName =>
              setLastName(lastName.replace(/[^a-zA-Z0-9 ]+/g, ''))
            }
            theme={textInputTheme}
            style={styles.input}
            selectionColor={colorSelection}
            mode="outlined"
            maxLength={50}
            textContentType="familyName"
          />
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
            loading={isButtonLoading}
            uppercase={false}
            style={styles.buttonSignUp}
            dark={true}
            onPress={handleSignUpPress}>
            Sign Up
          </Button>
        </View>
      </View>
    </BasicViewSkeleton>
  );
};

export default SignUpScreen;
