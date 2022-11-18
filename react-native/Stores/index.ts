import {AuthStore} from './Auth';
import App from './App';
import {createTypedHooks, createStore} from 'easy-peasy';

const RootStore = {
  App,
  AuthStore,
};

export type TRootStore = typeof RootStore;
const typedHooks = createTypedHooks<TRootStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default createStore(RootStore);
