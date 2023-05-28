import { useCallback, useEffect, useState } from 'react'
import style from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { FaUserShield, FaRegUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/auth/auth.actions';

function Navbar() {
     const { user } = useSelector(store => store.authManager);
     const dispatch = useDispatch();
     const [userFromSs, setUserFromSs] = useState(sessionStorage.getItem("USERNAME") || "");

     const handleLogout = useCallback(() => {
          console.log('first')
          dispatch(logoutAction());
     }, [dispatch])

     useEffect(() => {
          if (user.name) setUserFromSs(user.name);
     }, [user])

     return (
          <header className={style.Navbar}>
               <Link to='/' className={style.logo}>
                    <img src="car-logo.png" alt="logo" />
                    <h1>Buycars</h1>
               </Link>

               <nav>
                    <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/sell-car">Sell Car</Link></li>
                         <li>
                              {
                                   userFromSs ? <a href='#' className={style['profile-btn']}>
                                        <FaRegUserCircle />
                                        {userFromSs}
                                        <div className={style['hidden-logout']}>
                                             <button onClick={handleLogout}>Log out</button>
                                        </div>
                                   </a> :
                                        <Link to="/auth">
                                             <FaUserShield />
                                             <span>Sign in</span>
                                        </Link>
                              }
                         </li>
                    </ul>
               </nav>
          </header>
     )
}

export default Navbar