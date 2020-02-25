import axios from 'axios';
import { ApiUrl } from './constants';

export default axios.create({
    baseURL: ApiUrl, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
});