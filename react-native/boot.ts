import axios from 'axios';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN_KEY} from './constants';
import {useStoreActions} from './Stores';

const useBoot = () => {
  const [isBootDone, setIsBootDone] = useState(false);

  axios.defaults.baseURL = 'https://ce41-49-206-116-125.ngrok-free.app';
  const {loginUsingAccessToken} = useStoreActions(
    ({AuthStore: {loginUsingAccessToken}}) => ({loginUsingAccessToken}),
  );
  useEffect(() => {
    (async () => {
      const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
      if (accessToken) {
        await loginUsingAccessToken(accessToken);
      }
      setIsBootDone(true);
    })();
  }, [loginUsingAccessToken]);

  return {isBootDone};
};

export default useBoot;
