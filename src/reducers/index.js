import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authentication from './auth';
import signup from './signup';
import forgotPassword from './forgotPassword';
import application from './application';
import applications from './applicants';
import query from './query';
import rsvp from './rsvp';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authentication,
  newUser: signup,
  lostPass: forgotPassword,
  app: application,
  apps: applications,
  queryValues: query,
  rsvp,
});

export default rootReducer;
