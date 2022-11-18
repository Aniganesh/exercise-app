import axios from 'axios';
import {LoginValues, SignupValues, User} from './@types';

export class UserModel {
  static login = async (params: LoginValues) => {
    return axios.post<{accessToken: string}>('/login', params);
  };
  static signup = async (data: SignupValues) => {
    console.log(JSON.stringify(data));
    return axios.request<{accessToken: string}>({
      url: '/user',
      method: 'POST',
      data,
    });
  };

  static getProfile = async () => {
    return axios.get<User>('/profile');
  };
}

export default UserModel;
