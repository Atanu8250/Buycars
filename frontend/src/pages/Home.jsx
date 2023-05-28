import { useCallback, useEffect, useRef, useState } from 'react';
import style from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { getAllCarsAction } from '../redux/cars/cars.actions';
import Card from '../components/Card';

// Debouncer closure function for debouncing
const debouncer = (cb, delay) => {
     let timerRef;
     return () => {
          if (timerRef) {
               clearTimeout(timerRef);
               timerRef = undefined;
          }
          timerRef = setTimeout(cb, delay);
     }

}


function Home() {
     const dispatch = useDispatch();

     // eslint-disable-next-line no-undef, no-unused-vars
     const { loading, data } = useSelector(store => store.carsManager);
     const searchRef = useRef(null);
     const colorRef = useRef(null);
     const minpriceRef = useRef(null);
     const maxpriceRef = useRef(null);
     const minmileageRef = useRef(null);
     const maxmileageRef = useRef(null);
     const [queryUrl, setQueryUrl] = useState("");

     // create query url for the searching and filtering
     const createQueryUrl = useCallback(() => {
          let url = ""
          if (searchRef.current.value) url += `q=${searchRef.current.value}`;
          if (colorRef.current.value) url += `color=${colorRef.current.value}`;
          if (minpriceRef.current.value) url += `minprice=${minpriceRef.current.value}`;
          if (maxpriceRef.current.value) url += `maxprice=${maxpriceRef.current.value}`;
          if (minmileageRef.current.value) url += `minmileage=${minmileageRef.current.value}`;
          if (maxmileageRef.current.value) url += `maxmileage=${maxmileageRef.current.value}`;
          setQueryUrl(url);
     }, []);

     // debouncing for URL search and filters
     const debounce = debouncer(createQueryUrl, 600);


     useEffect(() => {
          dispatch(getAllCarsAction(queryUrl))
     }, [queryUrl])

     return (
          <div>
               <div className={style.functionalities}>
                    <div className={style.search}>
                         <input type="search" placeholder='Serach herer!' ref={searchRef} onInput={debounce} />
                         <BsSearch onClick={createQueryUrl} />
                    </div>

                    {/* Choose color */}
                    <select className={style['color-select']} ref={colorRef} onChange={debounce}>
                         <option value="">Choose color</option>
                         <option value="White">White</option>
                         <option value="Silver">Silver</option>
                         <option value="Black">Black</option>
                         <option value="Gray">Gray</option>
                         <option value="Red">Red</option>
                         <option value="Blue">Blue</option>
                         <option value="Yellow">Yellow</option>
                    </select>

                    {/* Filter on Pricing */}
                    <div className={style["price-filter"]}>
                         <bdi>Price:</bdi>
                         <span>
                              <input type="number" placeholder='Min price' min={0} ref={minpriceRef} onInput={debounce} />
                              <input type="number" placeholder='Max price' min={0} ref={maxpriceRef} onInput={debounce} />
                         </span>
                    </div>

                    {/* Filter on Mileage */}
                    <div className={style["mileage-filter"]}>
                         <bdi>Mileage:</bdi>
                         <span>
                              <input type="number" placeholder='Min mileage' min={0} ref={minmileageRef} onInput={debounce} />
                              <input type="number" placeholder='Max mileage' min={0} ref={maxmileageRef} onInput={debounce} />
                         </span>
                    </div>
               </div>

               {/* map cars */}
               {
                    loading ? <h1>Loading...</h1> : <div className={style.cars}>
                         {
                              data?.map(el => <Card key={el._id} element={el} />)
                         }
                    </div>
               }
          </div>
     )
}

export default Home