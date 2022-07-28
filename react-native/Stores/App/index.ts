import {Thunk, thunk, action, Action} from 'easy-peasy';
import {TRootStore} from '..';

interface AppStoreState {
  someStateValue?: Record<string, string>;
  getStateValue: Thunk<
    AppStoreState,
    undefined,
    unknown,
    TRootStore,
    Promise<void>
  >;
  setStateValue: Action<AppStoreState, Record<string, string>>;
}

export const AppStore: AppStoreState = {
  getStateValue: thunk(async actions => {
    const res = await new Promise<{newValue: string}>(resolve => {
      setTimeout(() => resolve({newValue: '1'}), 5000);
    });
    actions.setStateValue(res);
  }),
  setStateValue: action((state, payload) => {
    state.someStateValue = payload;
  }),
};

export default AppStore;
