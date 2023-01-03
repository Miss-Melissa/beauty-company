import React from 'react'
import Product from './pages/Product'
import Products from './pages/Products'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Admin from './pages/Admin';
import UpdateProduct from './pages/Updateproduct'
import NoMatch from './components/NoMatch';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </BrowserRouter>


    </div >
  )
}

export default App