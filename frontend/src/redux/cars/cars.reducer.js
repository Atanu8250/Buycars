import * as carsTypes from './cars.types';

const initialState = {
     loading: false,
     error: false,
     data: []
}


export const reducer = (state = initialState, { type, payload }) => {
     switch (type) {
          case carsTypes.CARS_LOADING: {
               return { ...state, loading: true, error: false }
          }

          case carsTypes.CARS_ERROR: {
               return { ...state, loading: false, error: true }
          }

          case carsTypes.CARS_SUCCESS: {
               return { data: payload, loading: false, error: false }
          }

          default: return state
     }
}