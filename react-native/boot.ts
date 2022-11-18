import axios from 'axios';
import {useState, useEffect} from 'react';

const useBoot = () => {
  const [isBootDone, setIsBootDone] = useState(false);

  axios.defaults.baseURL = 'http://fit-nation.onrender.com';

  useEffect(() => {
    (async () => {
      // TODO: Use AsyncStorage to check for access token and login with it.
      setIsBootDone(true);
    })();
  }, []);

  return {isBootDone};
};

export default useBoot;
