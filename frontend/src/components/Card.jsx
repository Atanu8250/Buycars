/* eslint-disable react/prop-types */
import Styles from "../styles/Card.module.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";



const Card = ({ element }) => {
     // eslint-disable-next-line react/prop-types
     const { carImage, dealer, majorScratches, noOfAccidents, noOfPreviousBuyers, odometer, oemSpec, originalPaint, registrationPlace } = element;

     const loggedInUser = sessionStorage.getItem("USERNAME");

     return (
          <div className={Styles.card_container}>
               <div className={Styles.oemSpecs_container}>
                    <div>
                         <img src={carImage} />
                    </div>
                    <div>
                         <div>
                              <bdi>Brand</bdi>
                              <span>{"Honda"}</span>
                         </div>
                         <div>
                              <bdi>Model</bdi>
                              <span>{oemSpec?.model}</span>
                         </div>
                         <div>
                              <bdi>Price</bdi>
                              <span>{oemSpec?.listPrice}</span>
                         </div>
                         <div>
                              <bdi>Max Speed</bdi>
                              <span>{oemSpec?.maxSpeed}</span>
                         </div>
                         <div>
                              <bdi>Mileage</bdi>
                              <span>{oemSpec?.mileage}</span>
                         </div>
                         <div>
                              <bdi>Power</bdi>
                              <span>{oemSpec?.power}</span>
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
                              {
                                   loggedInUser !== dealer?.username ?
                                        <div>
                                             <button>Buy Now</button>
                                        </div>
                                        :
                                        <div>
                                             <button><bdi>Edit</bdi><AiFillEdit /></button>
                                             <button><bdi>Delete</bdi><MdDeleteOutline /></button>
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
          </div>
     )
}

export default Card