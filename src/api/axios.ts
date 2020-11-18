import { URIS } from '../constants/uris';
import axios from 'axios';

var instance = axios.create();
instance.defaults.baseURL = URIS.reqres;
instance.defaults.timeout = 20000;

export { instance as default };
