import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import PrivateRoute from './PrivateRoute';

function AllRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  )
}

export default AllRoutes