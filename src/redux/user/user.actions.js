import { UserActionTypes } from './user.types';

// basically it is returning the object defining the type of the action
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
