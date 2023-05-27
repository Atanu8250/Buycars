import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'

import { reducer as authReducer } from './auth/auth.reducer';
import { reducer as carsReducer } from './cars/cars.reducer';
import { reducer as oemsReducer } from './oems/oems.reducer';

const rootReducer = combineReducers({
     authManager: authReducer,
     carsManager: carsReducer,
     oemsManager: oemsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));