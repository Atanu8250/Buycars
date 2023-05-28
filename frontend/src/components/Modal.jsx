/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import style from '../styles/Modal.module.css';
import { RxCrossCircled } from "react-icons/rx"
import { useDispatch } from 'react-redux';
import { updateCarAction } from '../redux/cars/cars.actions';
import React from 'react';

function Modal({ isOpen, onClose, element }) {
     const { carImage, majorScratches, noOfAccidents, noOfPreviousBuyers, odometer, originalPaint, registrationPlace, _id } = element;
     const dispatch = useDispatch()


     const handleEdit = useCallback((e) => {
          e.preventDefault();
          const update = {};
          if (!e.target.image.value && e.target.image.value !== carImage) update.carImage = e.target.image.value;
          if (!e.target.odometer.value && +e.target.odometer.value !== odometer) update.odometer = +e.target.odometer.value;
          if (!e.target.scratches.value && e.target.scratches.value !== majorScratches) update.majorScratches = e.target.scratches.value;
          if (e.target.originalPaint.checked !== originalPaint) update.originalPaint = e.target.originalPaint.checked;
          if (e.target.noOfAccidents.value !== ""  && +e.target.noOfAccidents.value !== noOfAccidents) update.noOfAccidents = +e.target.noOfAccidents.value;
          if (e.target.noOfprevBuyers.value !== ""  && +e.target.noOfprevBuyers.value !== noOfPreviousBuyers) update.noOfPreviousBuyers = +e.target.noOfprevBuyers.value;
          if (!e.target.registrationPlace.value && e.target.registrationPlace.value !== registrationPlace) update.registrationPlace = e.target.registrationPlace.value;

          dispatch(updateCarAction({ carId: _id, update }))
          onClose();

     }, [_id, carImage, dispatch, majorScratches, noOfAccidents, noOfPreviousBuyers, odometer, onClose, originalPaint, registrationPlace]);

     if (!isOpen) return null;
     return (
          <div className={style.modal} onClick={onClose}>
               <div className={style["modal-content"]} onClick={(e) => e.stopPropagation()}>
                    <div className={style["modal-header"]}>
                         <h2>Edit car info</h2>
                         <RxCrossCircled style={{ cursor: 'pointer' }} onClick={onClose} />
                    </div>
                    <div className={style["modal-body"]}>
                         <form className={style['edit-form']} onSubmit={handleEdit}>
                              <input type="url" id="image" placeholder="Image of the car" defaultValue={carImage} />
                              <input type="number" id="odometer" placeholder="Odometer's current value" defaultValue={odometer} />
                              <input type="text" id="scratches" placeholder="Major Scratches" defaultValue={majorScratches} />
                              <div>
                                   <label htmlFor="originalPaint">Original Paint </label>
                                   <input type="checkbox" name="originalPaint" id="originalPaint" defaultChecked={originalPaint} />
                              </div>
                              <input type="number" id="noOfAccidents" placeholder="No of Accidents" defaultValue={noOfAccidents} />
                              <input type="number" id="noOfprevBuyers" placeholder="No of Previous Buyers" defaultValue={noOfPreviousBuyers} />
                              <input type="text" id="registrationPlace" placeholder="Registration Place" defaultValue={registrationPlace} />
                              <input type="submit" value="Update car details 🚗" />
                         </form>
                    </div>
               </div>
          </div>
     );
}

export default React.memo(Modal);