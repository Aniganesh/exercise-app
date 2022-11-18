import React, {FC, ReactNode} from 'react';
import SnackbarContextProvider from './Snackbar';

interface RootProviderProps {}

const RootProvider: FC<
  RootProviderProps & {children: ReactNode | ReactNode[]}
> = ({children}) => {
  return <SnackbarContextProvider>{children}</SnackbarContextProvider>;
};

export default RootProvider;
