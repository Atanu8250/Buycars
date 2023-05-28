import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import homeStyle from '../styles/Home.module.css';
import style from '../styles/SellCar.module.css'
import { useEffect, useState } from 'react';
import { getAllOemsAction } from '../redux/oems/oems.actions';
import CreateCar from '../components/CreateCar';


function SellCar() {
     const dispatch = useDispatch();
     const { loading, data } = useSelector(store => store.oemsManager);
     const [selectedOem, setSelectedOem] = useState("");

     useEffect(() => {
          dispatch(getAllOemsAction())
     }, [])


     return loading ? <h1>Loading...</h1> : (
          <div style={style.container}>
               <div className={homeStyle.functionalities}>
                    <div className={homeStyle.search}>
                         <input type="search" placeholder='Serach herer!' />
                         <BsSearch />
                    </div>
               </div>

               {/* OEM specs */}
               <div className={style['OEM-specs']}>
                    <table>
                         <caption>Original Equipment Manufacturers Specifications</caption>
                         <thead>
                              <tr>
                                   <th>Sr no</th>
                                   <th>Brand</th>
                                   <th>Model</th>
                                   <th>Year</th>
                                   <th>List-Price</th>
                                   <th>Colors</th>
                                   <th>Mileage</th>
                                   <th>Power (in BHP)</th>
                                   <th>Max-speed</th>
                                   <th>Choose</th>
                              </tr>
                         </thead>

                         <tbody>
                              {
                                   data.map((el, indx) => <tr key={el._id}>
                                        <td>{indx + 1}</td>
                                        <td>{el?.brand}</td>
                                        <td>{el?.model}</td>
                                        <td>{el?.year}</td>
                                        <td>{el?.listPrice}</td>
                                        <td>{el?.colors?.map((ele, i) => {
                                             return <span key={i}
                                                  style={{
                                                       height: "20px",
                                                       width: "20px",
                                                       border: "1px solid gray",
                                                       borderRadius: "50% ",
                                                       backgroundColor: ele.toLowerCase(), display: 'inline-block',
                                                       marginRight: "5px"
                                                  }}></span>
                                        })}</td>
                                        <td>{el?.mileage}</td>
                                        <td>{el?.power}</td>
                                        <td>{el?.maxSpeed}</td>
                                        <td>
                                             <button
                                                  style={{
                                                       backgroundColor: `${el._id === selectedOem ? "var(--metalic-red-color)" : "var(--white-color)"}`,
                                                       color: `${el._id === selectedOem ? "var(--white-color)" : "var(--metalic-red-color)"}`
                                                  }}

                                                  onClick={() => {
                                                       setSelectedOem(el._id);
                                                  }}>Choose OEM</button>
                                        </td>
                                   </tr>)
                              }
                         </tbody>
                    </table>
               </div>

               {/* show the create from only when you selected any OEM */}
               {
                    selectedOem && <CreateCar oemId={selectedOem} />
               }
          </div>
     )
}

export default SellCar