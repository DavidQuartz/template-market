import { createContext } from 'react';
import { getInitialState } from '../hooks/useBooleanState';

export const initialState = {
  menu: getInitialState(false),
  sidebar: getInitialState(false),
  messages: getInitialState(false),
  notifications: getInitialState(false),
};

export default createContext(initialState);
