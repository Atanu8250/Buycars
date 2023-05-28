import { useDispatch } from 'react-redux';
import style from '../styles/SellCar.module.css';
import { useCallback } from "react";
import { createCarAction } from '../redux/cars/cars.actions';

// eslint-disable-next-line react/prop-types
function CreateCar({ oemId }) {
     const dispatch = useDispatch();

     const handleCreateCar = useCallback((e) => {
          e.preventDefault();
          const CarObj = {
               oemSpec: oemId,
               carImage: e.target.image.value,
               odometer: +e.target.odometer.value,
               majorScratches: e.target.scratches.value,
               originalPaint: e.target.originalPaint.checked,
               registrationPlace: e.target.registrationPlace.value
          }

          if (e.target.noOfAccidents.value) CarObj.noOfAccidents = +e.target.noOfAccidents.value;
          if (e.target.noOfprevBuyers.value) CarObj.noOfprevBuyers = +e.target.noOfprevBuyers.vlaue;

          dispatch(createCarAction(CarObj));

          e.target.reset();

     }, [dispatch, oemId]);

     return (
          <div className={style['form-container']}>
               <h3>Sell car with selected OEM (Original Equipment Manufacturers Specifications)</h3>
               <form onSubmit={handleCreateCar} className={style['create-car-form']}>
                    <input type="url" id="image" placeholder="Image of the car" required />
                    <input type="number" id="odometer" placeholder="Odometer's current value" required />
                    <input type="text" id="scratches" placeholder="Major Scratches" required />
                    <div>
                         <label htmlFor="originalPaint">Original Paint:</label>
                         <input type="checkbox" name="originalPaint" id="originalPaint" />
                    </div>
                    <input type="number" id="noOfAccidents" placeholder="No of Accidents" />
                    <input type="number" id="noOfprevBuyers" placeholder="No of Previous Buyers" />
                    <input type="text" id="registrationPlace" placeholder="Registration Place" required />
                    <input type="submit" value="Sell Car 🚗" />
               </form>
          </div>
     )
}

export default CreateCar