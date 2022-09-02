import {combineReducers} from 'redux';
import cart from './cartReducer';

const appReducer = combineReducers({
  cart,
});

export default appReducer;

export type RootState = ReturnType<typeof appReducer>;
