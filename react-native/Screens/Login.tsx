import React, {useMemo} from 'react';
import {View, Keyboard, StyleSheet, Dimensions} from 'react-native';
import {Button, TextInput, TextInputProps} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';
import {LoginValues} from '../Models/User/@types';
import BasicViewSkeleton from '../components/BasicViewSkeleton';
import {
  colorBackground,
  colorPrimary,
  colorSelection,
  textInputTheme,
} from '../Theme';
import {Formik} from 'formik';
import {useStoreActions} from '../Stores';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const styles = LoginStyles(useHeaderHeight());
  const [isPasswordShown, setIsPasswordShown] = React.useState(true);
  const {login} = useStoreActions(({AuthStore: {login}}) => ({login}));
  const handleLogin = (loginValues: LoginValues) => {
    login(loginValues);
    Keyboard.dismiss();
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
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleLogin}>
            {({handleChange, values, isSubmitting, handleSubmit}) => (
              <>
                {formConfig.map(({type, props, name}) => {
                  if (type === 'text') {
                    return (
                      <TextInput
                        key={name}
                        {...(props as TextInputProps)}
                        onChangeText={handleChange(name)}
                        value={values[name as keyof LoginValues]}
                      />
                    );
                  }
                })}
                <Button
                  onPress={handleSubmit}
                  mode="contained"
                  uppercase={false}
                  loading={isSubmitting}
                  style={styles.buttonLogin}
                  dark={true}>
                  Login
                </Button>
              </>
            )}
          </Formik>
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
    buttonLogin: {
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
