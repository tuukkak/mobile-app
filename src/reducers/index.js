import { combineReducers } from 'redux';
import authentication from './authentication';
import users from './users';

export const reducers = () => combineReducers({ authentication, users });
