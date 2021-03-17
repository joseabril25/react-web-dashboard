// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import appReducer from './app.reducer';
// import registerReducer from './register.reducer';
import authReducer from './auth.reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    // apply: applyReducer,
    // register: registerReducer
});

// Exports
export default rootReducer;
