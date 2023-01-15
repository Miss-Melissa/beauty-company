import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Context } from './context/Cart';
import Nav from './components/Nav';
import Home from './pages/Home';
import Admin from './components/Admin';
import UpdateProduct from './components/Updateproduct';
import Product from './pages/Product';
import Products from './pages/Products';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import PageNotFound from './components/PageNotFound';

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
            <Route path="/cart" element={<ShoppingCart />} ></Route>
            <Route path="/checkout" element={<Checkout />} ></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Context>
      </BrowserRouter>

    </div >
  )
}

export default App