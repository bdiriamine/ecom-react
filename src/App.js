import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetProducts } from './redux/action/ActionProduct';
import Profile from './pages/Profile';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(GetProducts()); //tkhadem el action
},[])
  return (
    <div className="App">
      <Routes>
         <Route path="/"  element={<Home />}/>
         <Route path="register" element={<Register />}  />
         <Route path="login" element={<Login />} />
         <Route path="Profile" element={<Profile />} />
         <Route path="addProduct" element={<AddProduct />} />
         <Route path="editProduct/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
