import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

// Device Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Colors
export const colorPrimary = '#1990d5';
export const colorContrast = '#ffffff';
export const colorSelection = '#a3d3ee';
export const colorInputText = '#000';

// Themes
export const textInputTheme = {
  colors: {
    primary: colorPrimary,
    text: colorInputText,
    background: colorContrast,
    placeholder: colorPrimary,
  },
};

export const LoginSignupStyles = (headerHeight: any) =>
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

export const LoginStyles = (headerHeight: any) =>
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

export const SignUpStyles = (headerHeight: any) =>
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
    buttonSignUp: {
      position: 'relative',
      marginVertical: 40,
      width: '100%',
      backgroundColor: colorPrimary,
    },
  });
