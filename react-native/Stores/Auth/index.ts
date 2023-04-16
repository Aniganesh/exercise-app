import {TRootStore} from './../index';
import {action, Action, thunk, Thunk} from 'easy-peasy';
import {LoginValues, SignupValues, User} from '../../Models/User/@types';
import UserModel from '../../Models/User';
import axios from 'axios';

export interface TAuthStore {
  user?: User;
  login: Thunk<TAuthStore, LoginValues, null, TRootStore, Promise<User>>;
  loginUsingAccessToken: Thunk<TAuthStore, string, TRootStore, Promise<User>>;
  signup: Thunk<
    TAuthStore,
    SignupValues,
    null,
    TRootStore,
    Promise<User | undefined>
  >;
  setUser: Action<TAuthStore, User | undefined>;
  setAccessToken: Action<TAuthStore, string | undefined>;
}

export const AuthStore: TAuthStore = {
  user: undefined,
  login: thunk(async (actions, loginValues) => {
    try {
      const {
        data: {access_token: accessToken},
      } = await UserModel.login(loginValues);
      return actions.loginUsingAccessToken(accessToken);
    } catch (err) {
      console.error(err);
      return;
    }
  }),
  loginUsingAccessToken: thunk(async (actions, accessToken) => {
    actions.setAccessToken(accessToken);
    try {
      const {data: user} = await UserModel.getProfile();
      console.log({user});
      actions.setUser(user);
      return user;
    } catch (err) {
      console.error(JSON.stringify(err));
    }
  }),
  setUser: action((state, user) => {
    state.user = user;
  }),
  setAccessToken: action((state, accessToken) => {
    if (accessToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }),
  signup: thunk(async (actions, payload) => {
    const {
      data: {accessToken},
    } = await UserModel.signup(payload);
    if (accessToken) {
      return actions.loginUsingAccessToken(accessToken);
    }
    return;
  }),
};
