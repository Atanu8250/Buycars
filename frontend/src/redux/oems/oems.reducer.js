import * as oemsTypes from './oems.types';

const initialState = {
     loading: false,
     error: false,
     data: []
}


export const reducer = (state = initialState, { type, payload }) => {
     switch (type) {
          case oemsTypes.OEMS_LOADING: {
               return { ...state, loading: true, error: false }
          }

          case oemsTypes.OEMS_ERROR: {
               return { ...state, loading: false, error: true }
          }

          case oemsTypes.OEMS_SUCCESS: {
               return { data: payload, loading: false, error: false }
          }

          default: return state
     }
}