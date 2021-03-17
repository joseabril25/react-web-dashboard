import { appTypes } from '../types';
const defaultState = {
  analyticsData: null,
  userList: [],
  session: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case appTypes.APP_SET_ANALYTICS:
      return {
        ...state,
        analyticsData: action.payload,
      };
    case appTypes.APP_SET_USERS:
      return {
        ...state,
        userList: action.payload,
      };
    case appTypes.APP_SET_SESSION:
      return {
        ...state,
        session: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
