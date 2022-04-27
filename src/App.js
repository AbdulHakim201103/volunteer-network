import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componente/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './componente/Home/Home';
import Donation from './componente/Donation/Donation';
import Events from './componente/Events/Events';
import Blog from './componente/Blog/Blog';
import Login from './componente/Login/Login';
import Register from './componente/Register/Register';
import Admin from './componente/Admin/Admin';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
