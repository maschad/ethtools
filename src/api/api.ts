import {create} from 'apisauce';
import Config from 'react-native-config';

// define the api
const api = create({
  baseURL: Config.API_URL,
  headers: {Accept: 'application/json'},
});
