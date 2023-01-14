import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Admin from './pages/Admin';
import UpdateProduct from './pages/Updateproduct';
import NoMatch from './components/NoMatch';
import Product from './pages/Product';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Cart from './pages/Cart';
import { Context } from './context/Context';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Context>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </Context>
      </BrowserRouter>

    </div >
  )
}

export default App