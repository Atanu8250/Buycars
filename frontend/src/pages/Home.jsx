import { useEffect } from 'react';
import style from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { getAllCarsAction } from '../redux/cars/cars.actions';
import Card from '../components/Card';

function Home() {
     const dispatch = useDispatch();

     // eslint-disable-next-line no-undef, no-unused-vars
     const { loading, data } = useSelector(store => store.carsManager);
     console.log('loading, data:', loading, data)

     useEffect(() => {
          dispatch(getAllCarsAction())
     }, [])

     return loading ? <h1>Loading...</h1> : (
          <div className={style.container}>
               <div className={style.functionalities}>
                    <div className={style.search}>
                         <input type="search" placeholder='Serach herer!' />
                         <BsSearch />
                    </div>

                    {/* Choose color */}
                    <select className={style['color-select']}>
                         <option value="">Choose color</option>
                         <option value="red">Red</option>
                         <option value="blue">Blue</option>
                    </select>

                    {/* Filter on Pricing */}
                    <div className={style["price-filter"]}>
                         <bdi>Price:</bdi>
                         <span>
                              <input type="number" placeholder='Min price' min={0} />
                              <input type="number" placeholder='Max price' min={0} />
                         </span>
                    </div>

                    {/* Filter on Mileage */}
                    <div className={style["mileage-filter"]}>
                         <bdi>Mileage:</bdi>
                         <span>
                              <input type="number" placeholder='Min mileage' min={0} />
                              <input type="number" placeholder='Max mileage' min={0} />
                         </span>
                    </div>
               </div>

               {/* map cars */}
               <div className={style.cars}>
                    {
                         data?.map(el => <Card key={el._id} element={el} />)
                    }
               </div>
          </div>
     )
}

export default Home