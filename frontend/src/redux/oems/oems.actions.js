import { AUTH_LOGOUT } from '../auth/auth.types';
import * as oemsTypes from './oems.types';

/** 
 * * Using 'fetch' instead of 'axios' because when I'm sending error from the backend at
 * * that time axios is not able to catch the response messages with error status codes
 * * like 400 and above codes, but fetch is able get the errors with message and the 
 * * status properly,
 * * But for accessing the status we will get it from the first 'response' and for 
 * * the data we need to do 'response.json()'
 * */


/**
 * - GET ALL OEMS
 * @param {String} queryString - send the query for searching and filtering
 * */
export const getAllOemsAction = (queryString = "") => async (dispatch) => {
     // start loading
     dispatch({ type: oemsTypes.OEMS_LOADING })

     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/oemspec?${queryString}`, {
               headers: {
                    'Content-Type': 'application/json',
                    'authorization': sessionStorage.getItem("TOKEN")
               }
          })

          const data = await res.json();

          // * IF TOKEN EXPIRED
          if (res.status === 401) {
               dispatch({ type: AUTH_LOGOUT });
               // Getting undefined in the alert for `window.location.replace` function that's why giving "" using or operator
               alert(`Session Expired! \nPlease Login again.. ${window.location.replace('/auth') || ""}`);
               return;
          }

          // if request success then store the data otherwise set error
          if (res.ok) dispatch({ type: oemsTypes.OEMS_SUCCESS, payload: data.data })
          else dispatch({ type: oemsTypes.OEMS_ERROR });

     } catch (error) {
          console.log('error:', error)
          alert(error.message)
          dispatch({ type: oemsTypes.OEMS_ERROR });
     }
}