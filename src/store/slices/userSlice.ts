import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { RootState } from '../store';
import { authenticate } from './../../api/authentication';

// THUNKS
export const signIn = createAsyncThunk(
  'user/loginUser',
  async (payload: { email: string; password: string }, api) => {
    return authenticate(payload, api);
  }
);

// SLICE
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    status: 'idle',
    error: '',
    isSignedIn: false,
  },
  reducers: {
    signOut(state) {
      state.isSignedIn = false;
      state.token = '';
      state.status = 'idle';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = 'loading';
      state.isSignedIn = false;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.token = action.payload?.token as string;
      state.error = '';
      state.status = 'succeeded';
      state.isSignedIn = true;
    });

    builder.addCase(signIn.rejected, (state, action) => {
      state.token = '';
      state.status = 'failed';
      state.error = action.payload as string;
      state.isSignedIn = false;
      Alert.alert('Une erreur est survenue : ', state.error || '');
    });
  },
});

// SELECTORS
export const getIsSignedIn = ({ user }: RootState) => user.isSignedIn;
export const getStatus = ({ user }: RootState) => user.status;

//EXPORTS
export const { signOut } = userSlice.actions;
export default userSlice.reducer;
