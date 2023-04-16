import axios from 'axios';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN_KEY} from './constants';
import {useStoreActions} from './Stores';

const useBoot = () => {
  const [isBootDone, setIsBootDone] = useState(false);

  axios.defaults.baseURL = 'http://fit-nation.onrender.com';
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
