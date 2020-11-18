import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './slices/userSlice';

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
