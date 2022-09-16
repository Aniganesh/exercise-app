import React, {useMemo} from 'react';
import {View, Keyboard, StyleSheet, Dimensions} from 'react-native';
import {Button, TextInput, TextInputProps} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';
import BasicViewSkeleton from '../components/BasicViewSkeleton';
import {
  colorBackground,
  colorPrimary,
  colorSelection,
  textInputTheme,
} from '../Theme/index';
import {Formik} from 'formik';
import {SignupValues} from '../Models/User/@types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUpScreen = () => {
  const styles = SignUpStyles(useHeaderHeight());

  const [isPasswordShown, setIsPasswordShown] = React.useState(true);

  const handleSignUpPress = async ({
    email,
    password,
    firstName,
    lastName,
  }: SignupValues) => {
    Keyboard.dismiss();
    console.log(
      'Pressed Sign Up. First Name: ' +
        firstName +
        ', Last Name: ' +
        lastName +
        ', Email: ' +
        email +
        ', Password: ' +
        password,
    );
  };
  const formConfig = useMemo(
    () => getFormConfig(styles, isPasswordShown, setIsPasswordShown),
    [styles, isPasswordShown, setIsPasswordShown],
  );

  return (
    <BasicViewSkeleton>
      <View style={styles.viewParent}>
        <View style={styles.viewChild}>
          {/* TODO: 1. Fix page scroll issue while keyboard is displayed.
                  2. Add Email Validations and display error message.  */}
          <Formik<SignupValues>
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
            }}
            onSubmit={handleSignUpPress}>
            {({values, handleChange, isSubmitting, handleSubmit}) => (
              <>
                {formConfig.map(({type, props, name}) => {
                  if (type === 'text') {
                    return (
                      <TextInput
                        key={name}
                        {...(props as TextInputProps)}
                        onChangeText={handleChange(name)}
                        value={values[name as keyof SignupValues]}
                      />
                    );
                  }
                })}
                <Button
                  mode="contained"
                  loading={isSubmitting}
                  uppercase={false}
                  style={styles.buttonSignUp}
                  dark={true}
                  onPress={handleSubmit}>
                  Sign Up
                </Button>
              </>
            )}
          </Formik>
        </View>
      </View>
    </BasicViewSkeleton>
  );
};

export default SignUpScreen;

export const SignUpStyles = (headerHeight: number) =>
  StyleSheet.create({
    viewParent: {
      width: windowWidth,
      height: windowHeight - headerHeight,
      justifyContent: 'center',
      backgroundColor: colorBackground,
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
    buttonSignUp: {
      position: 'relative',
      marginVertical: 40,
      width: '100%',
      backgroundColor: colorPrimary,
    },
  });

const getFormConfig = (
  styles: Record<string, any>,
  isPasswordShown: boolean,
  setIsPasswordShown: (shown: boolean) => void,
) => [
  {
    type: 'text',
    name: 'firstName',
    props: {
      label: 'first name',
      theme: textInputTheme,
      style: styles.input,
      selectionColor: colorSelection,
      mode: 'outlined',
      maxLength: 50,
      textContentType: 'name',
    },
  },
  {
    type: 'text',
    name: 'lastName',
    props: {
      label: 'last name',
      theme: textInputTheme,
      style: styles.input,
      selectionColor: colorSelection,
      mode: 'outlined',
      maxLength: 50,
      textContentType: 'familyName',
    },
  },
  {
    type: 'text',
    name: 'email',
    props: {
      label: 'email',
      theme: textInputTheme,
      style: styles.input,
      selectionColor: colorSelection,
      mode: 'outlined',
      autoCapitalize: 'none',
      maxLength: 50,
      textContentType: 'emailAddress',
    },
  },
  {
    type: 'text',
    name: 'password',
    props: {
      label: 'password',
      secureTextEntry: isPasswordShown,
      theme: textInputTheme,
      style: styles.input,
      selectionColor: colorSelection,
      mode: 'outlined',
      maxLength: 50,
      textContentType: 'password',
      right: (
        <TextInput.Icon
          icon={isPasswordShown ? 'eye' : 'eye-off'}
          onPress={() => {
            isPasswordShown
              ? setIsPasswordShown(false)
              : setIsPasswordShown(true);
          }}
          color={colorPrimary}
          forceTextInputFocus={false}
        />
      ),
    },
  },
];
