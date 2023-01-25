import {
  SET_CURRENT_USER,
  USER_UPDATED,
  DELETED_USER_UPDATED,
} from './actionTypes';

const setCurrentUserInitialState: any = {
  isAuthenticated: false,
  user: [],
  userProfile: [],
  UpdatedCheck: false,
};

const setUpdatedInitialState: any = {
  Updated: false,
  UpdatedValue: [],
};

const setupdateAfterUpdateReducer: any = {
  UpdatedCheck: false,
  UpdatedValue: [],
};

export const setCurrentUserReducer = (
  state = setCurrentUserInitialState,
  action: any,
) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log('------------------------Reducer');
      console.log(action, !isEmpty(action.payload));

      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload.decoded,
        userProfile: action.payload.user,
      };
    default:
      return state;
  }
};

export const UpdatedInitialStateReducer = (
  state = setUpdatedInitialState,
  action: any,
) => {
  switch (action.type) {
    case USER_UPDATED:
      return {
        ...state,
        UpdatedValue: action.payload,
        Updated: action.value,
      };
    default:
      return state;
  }
};

export const updateAfterUpdateReducer = (
  state = setupdateAfterUpdateReducer,
  action: any,
) => {
  switch (action.type) {
    case DELETED_USER_UPDATED:
      return {
        ...state,
        UpdatedCheck: action.payload,
      };
    default:
      return state;
  }
};

function isEmpty(str: string | any[]) {
  return (!str || str.length === 0 );
}