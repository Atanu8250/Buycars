/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import Styles from "../styles/Card.module.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "./Modal";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCarAction } from "../redux/cars/cars.actions";



const Card = ({ element }) => {
     const loggedInUser = sessionStorage.getItem("USERNAME");
     const dispatch = useDispatch();
     // eslint-disable-next-line react/prop-types
     const { carImage, dealer, majorScratches, noOfAccidents, noOfPreviousBuyers, odometer, oemSpec, originalPaint, registrationPlace, _id } = element;
     const [isModalOpen, setIsModalOpen] = useState(false);

     const handleDelete = useCallback(() => {
          dispatch(deleteCarAction(_id)); // call the action for deleting specific car
     }, [_id, dispatch])


     // close modal
     const closeModal = useCallback(() => {
          setIsModalOpen(false);
     }, [])

     // open modal
     const openModal = useCallback(() => {
          setIsModalOpen(true);
     }, [])


     return (
          <div className={Styles.card_container}>
               <div className={Styles.oemSpecs_container}>
                    <div>
                         <img src={carImage} />
                    </div>
                    <div>
                         <div>
                              <bdi>Brand</bdi>
                              <span>{oemSpec?.brand}</span>
                         </div>
                         <div>
                              <bdi>Model</bdi>
                              <span>{oemSpec?.model}</span>
                         </div>
                         <div>
                              <bdi>Price</bdi>
                              <span>₹{oemSpec?.listPrice} /-</span>
                         </div>
                         <div>
                              <bdi>Max Speed</bdi>
                              <span>{oemSpec?.maxSpeed} KM/H</span>
                         </div>
                         <div>
                              <bdi>Mileage</bdi>
                              <span>{oemSpec?.mileage}</span>
                         </div>
                         <div>
                              <bdi>Power</bdi>
                              <span>{oemSpec?.power} BHP</span>
                         </div>
                         <div>
                              <bdi>Official Launch</bdi>
                              <span>{oemSpec?.year}</span>
                         </div>
                         <div>
                              <bdi>Colors</bdi>
                              {oemSpec?.colors?.map((ele, i) => {
                                   return <span key={i} style={{
                                        height: "20px", width: "20px", borderRadius: "50% ", backgroundColor: ele.toLowerCase(), display: 'inline-block', marginRight: "5px"
                                   }}></span>
                              })}</div>
                    </div>
               </div>
               <div className={Styles.dealer_container}>
                    <div>
                         <bdi>Dealer</bdi>
                         <span>{dealer?.username}</span>

                         <div className={Styles.dealer_buy_edit}>
                              {/* If the user is the dealer then only the user can see the edit and delete button */}
                              {
                                   loggedInUser !== dealer?.username ?
                                        <div>
                                             <button>Buy Now</button>
                                        </div>
                                        :
                                        <div>
                                             <button onClick={openModal}><bdi>Edit</bdi><AiFillEdit /></button>
                                             <button onClick={handleDelete}><bdi>Delete</bdi><MdDeleteOutline /></button>
                                        </div>
                              }
                         </div>
                    </div>
                    <div>
                         <div>
                              <div><bdi>Scratches</bdi><span>{!majorScratches ? "-" : majorScratches}</span></div>
                              <div><bdi>No. Of Accidents</bdi><span>{noOfAccidents}</span></div>
                              <div><bdi>No. Of Owners</bdi><span>{noOfPreviousBuyers}</span></div>
                              <div><bdi>Odometer</bdi><span>{odometer}</span></div>
                              <div><bdi>Original Paint</bdi><span>{originalPaint ? "Original" : "Repainted"}</span></div>
                              <div><bdi>Registered At</bdi><span>{registrationPlace}</span></div>
                         </div>
                    </div>
               </div>

               {/* Edit modal */}
               <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    element={element}
               />
          </div>
     )
}

export default memo(Card);