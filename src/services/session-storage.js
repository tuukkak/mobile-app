import { AsyncStorage } from 'react-native';

export const getToken = () => AsyncStorage.getItem('token');
export const setToken = token => AsyncStorage.setItem('token', token);
