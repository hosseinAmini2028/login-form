import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { reducer } from 'lib/store/rootReducer';
import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
    type TypedUseSelectorHook
} from 'react-redux';
import { authApi, rtkQueryErrorLogger } from 'services/auth';
export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([authApi.middleware, rtkQueryErrorLogger]);
  }
});

export type reduxDispatch = typeof reduxStore.dispatch;

export type ReduxState = ReturnType<typeof reduxStore.getState>;

export type ReduxStore = typeof reduxStore;

export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;

export const useDispatch = () => useReduxDispatch<reduxDispatch>();

export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;
