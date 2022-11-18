import React, {createContext, FC, ReactNode, useState} from 'react';
import {Snackbar, SnackbarProps} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import {MD3Theme} from 'react-native-paper/lib/typescript/types';

export type ContextMessage = Pick<SnackbarProps, 'action'> & {
  message: string | ReactNode | Array<ReactNode>;
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
};

interface SnackbarContextState {
  snackbarMessages: ContextMessage[];
  addSnackbarMessage: (newSnackbarMessage: ContextMessage) => void;
  removeMessage: (index: number) => () => void;
}

export const SnackbarContext = createContext<SnackbarContextState>({
  snackbarMessages: [],
  addSnackbarMessage: () => {},
  removeMessage: () => () => {},
});

const useSnackBarState = (): SnackbarContextState => {
  const [snackbarMessages, setSnackbarMessages] = useState<ContextMessage[]>(
    [],
  );

  const addSnackbarMessage = (newSnackbarMessage: ContextMessage) => {
    const _newSnackbarMessage = newSnackbarMessage;
    if (!_newSnackbarMessage.variant) {
      _newSnackbarMessage.variant = 'default';
    }
    setSnackbarMessages(curr => [...curr, _newSnackbarMessage]);
  };

  const removeMessage = (index: number) => {
    return () =>
      setSnackbarMessages(curr => curr.filter((_, i) => index !== i));
  };

  return {snackbarMessages, addSnackbarMessage, removeMessage};
};

const SnackbarContextProvider: FC<{children: ReactNode | ReactNode[]}> = ({
  children,
}) => {
  const values = useSnackBarState();
  const theme = useTheme();
  return (
    <SnackbarContext.Provider value={values}>
      {children}
      <SnackbarContext.Consumer>
        {({snackbarMessages, removeMessage}) => {
          return (
            <>
              {snackbarMessages.map((item, index) => (
                <Snackbar
                  visible
                  key={index}
                  onDismiss={removeMessage(index)}
                  style={getStyleForVariant(item.variant, theme)}>
                  {item.message}
                </Snackbar>
              ))}
            </>
          );
        }}
      </SnackbarContext.Consumer>
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;

const getStyleForVariant = (
  variant: ContextMessage['variant'],
  theme: MD3Theme,
): SnackbarProps['style'] => {
  switch (variant) {
    case 'error':
      return {backgroundColor: theme.colors.error};
    case 'info':
      return {backgroundColor: theme.colors.secondary};
    case 'warning':
      return {backgroundColor: theme.colors.tertiaryContainer};
    case 'success':
      return {backgroundColor: theme.colors.surfaceVariant};
    case 'default':
    default:
      return undefined;
    // Colours 'success' and warning don't look right. Others are okay. Try to fix theme
  }
};
