import { combineReducers } from 'redux';
import { design } from './design';
import { form } from './form';

const rootReducer = combineReducers({
  design,
  form
});

export default rootReducer;