import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import {Text} from 'react-native-paper';
import useBoot from '../boot';
import {useStoreState} from '../Stores';
import AuthNavigation from './AuthNavigation';
import MainAppNavigation from './MainAppNavigation';

interface RouteNavigationProps {}

const RouteNavigation: FC<RouteNavigationProps> = () => {
  const {isBootDone} = useBoot();
  const {user} = useStoreState(({AuthStore: {user}}) => ({user}));
  if (!isBootDone) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user && user.id ? <MainAppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RouteNavigation;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = {
  loadingContainer: {
    height: '100%',
  } as ViewStyle,
};
