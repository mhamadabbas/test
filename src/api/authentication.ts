import axios from './axios';

export const authenticate = (
  payload: { email: string; password: string },
  api: any
) => {
  return axios
    .post('login', { email: payload.email, password: payload.password })
    .then((ok) => ok.data)
    .catch((err) => api.rejectWithValue(err.message));
};
