import { AUTH_LOGOUT } from '../auth/auth.types';
import * as carsTypes from './cars.types';

/** 
 * * Using 'fetch' instead of 'axios' because when I'm sending error from the backend at
 * * that time axios is not able to catch the response messages with error status codes
 * * like 400 and above codes, but fetch is able get the errors with message and the 
 * * status properly,
 * * But for accessing the status we will get it from the first 'response' and for 
 * * the data we need to do 'response.json()'
 * */


/**
 * - GET ALL CARS
 * @param {String} queryString - send the query for searching and filtering
 * */
export const getAllCarsAction = (queryString = "") => async (dispatch) => {
     // start loading
     dispatch({ type: carsTypes.CARS_LOADING })

     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/marketplace?${queryString}`, {
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
          if (res.ok) dispatch({ type: carsTypes.CARS_SUCCESS, payload: data.data })
          else dispatch({ type: carsTypes.CARS_ERROR });

     } catch (error) {
          console.log('error:', error)
          alert(error.message)
          dispatch({ type: carsTypes.CARS_ERROR });
     }
}


/**
 * - CREATE NEW CAR DOC
 * @param {Object} car - car object for the creation
 * */
export const createCarAction = (car) => async (dispatch) => {
     if (Object.keys(car).length === 0) return;

     // start loading
     dispatch({ type: carsTypes.CARS_LOADING })

     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/marketplace`, {
               method: 'POST',
               body: JSON.stringify(car),
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
          if (res.ok) dispatch({ type: carsTypes.CARS_SUCCESS, payload: [] });
          else dispatch({ type: carsTypes.CARS_ERROR });

          alert(data.message)

     } catch (error) {
          console.log('error:', error)
          alert(error.message)
          dispatch({ type: carsTypes.CARS_ERROR });
     }
}





/**
 * - UDPATE CARS DETAILS
 * @param {String} carId - car id for which you want the changes should apply
 * @param {Object} update - Object with update fields
 * */
export const updateCarAction = ({ carId, update }) => async (dispatch) => {
     if (!carId || Object.keys(update).length === 0) return;

     // start loading
     dispatch({ type: carsTypes.CARS_LOADING })

     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/marketplace/:${carId}`, {
               method: 'PATCH',
               body: JSON.stringify(update),
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
          if (res.ok) dispatch(getAllCarsAction())
          else dispatch({ type: carsTypes.CARS_ERROR });

          alert(data.message)

     } catch (error) {
          console.log('error:', error)
          alert(error.message)
          dispatch({ type: carsTypes.CARS_ERROR });
     }
}


/**
 * - DELETE CAR
 * @param {String} carId - car id for which you want to delete
 * */
export const deleteCarAction = (carId) => async (dispatch) => {
     if (!carId) return;

     // start loading
     dispatch({ type: carsTypes.CARS_LOADING })

     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/marketplace/:${carId}`, {
               method: 'DELETE',
               headers: {
                    'Content-Type': 'application/json',
                    'authorization': sessionStorage.getItem("TOKEN")
               }
          })

          const data = await res.json()

          // * IF TOKEN EXPIRED
          if (res.status === 401) {
               dispatch({ type: AUTH_LOGOUT });
               // Getting undefined in the alert for `window.location.replace` function that's why giving "" using or operator
               alert(`Session Expired! \nPlease Login again.. ${window.location.replace('/auth') || ""}`);
               return;
          }

          // if request success then store the data otherwise set error
          if (res.ok) dispatch(getAllCarsAction())
          else dispatch({ type: carsTypes.CARS_ERROR });

          alert(data.message)

     } catch (error) {
          console.log('error:', error)
          alert(error.message)
          dispatch({ type: carsTypes.CARS_ERROR });
     }
}