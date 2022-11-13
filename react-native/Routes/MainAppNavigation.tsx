import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import MainScreen from '../Screens/Main';

interface MainAppNavigationProps {}

const MainAppNavigationStack = createNativeStackNavigator();
const transitionName = 'slide_from_right';

const MainAppNavigation: FC<MainAppNavigationProps> = () => {
  return (
    <>
      <MainAppNavigationStack.Navigator initialRouteName="Home">
        <MainAppNavigationStack.Screen
          name="Home"
          component={MainScreen}
          options={{
            animation: transitionName,
            header: () => null,
          }}
        />
      </MainAppNavigationStack.Navigator>
    </>
  );
};

export default MainAppNavigation;
