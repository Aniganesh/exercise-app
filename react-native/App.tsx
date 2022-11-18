import React, {FC} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StoreProvider} from 'easy-peasy';
import store from './Stores';
import {theme} from './Theme';
import RouteNavigation from './Routes';
import RootProvider from './Contexts';

const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <RootProvider>
          <RouteNavigation />
        </RootProvider>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
