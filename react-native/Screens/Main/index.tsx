import React, {FC, useEffect} from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-paper';
import {useStoreActions, useStoreState} from '../../Stores';

interface MainScreenProps {}

const MainScreen: FC<MainScreenProps> = () => {
  const {someStateValue} = useStoreState(({App: {someStateValue}}) => ({
    someStateValue,
  }));
  const {getStateValue} = useStoreActions(({App: {getStateValue}}) => ({
    getStateValue,
  }));
  useEffect(() => {
    getStateValue();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log({someStateValue});
  }, [someStateValue]);

  return (
    <Card>
      <Text>Testing out paper. This card is a paper component</Text>
    </Card>
  );
};

export default MainScreen;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = {};
