import axios from 'axios';
import {useState, useEffect} from 'react';

const useBoot = () => {
  const [isBootDone, setIsBootDone] = useState(false);

  axios.defaults.baseURL = 'http://localhost:8000';

  useEffect(() => {
    setTimeout(() => {
      setIsBootDone(true);
    }, 3000);
  }, []);

  return {isBootDone};
};

export default useBoot;
