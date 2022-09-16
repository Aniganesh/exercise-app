import axios from 'axios';
import {LoginValues, SignupValues} from './@types';
export class UserModel {
  static login = async (params: LoginValues) => {
    return axios.post('/login', {data: params});
  };
  static signup = async (params: SignupValues) => {
    return axios.post('/signup', {data: params});
  };
}

export default UserModel;
