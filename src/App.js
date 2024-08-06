import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MaintenceCenter from './Pages/MaintenceCenter';
import Product from './Pages/Product'; 
import Home from './Pages/Home'; 
import Login from './Pages/Login';
import Register from './Pages/Register'; 
import Card from './Pages/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/footer/footer.jsx'
import Unelgee from './Pages/unelgee.jsx';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productName, imageUrl) => {
    setCart([...cart, { name: productName, image: imageUrl }]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <Router> 
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Сэлбэг' element={<Product addToCart={addToCart} />} />
          <Route path='/Засварын төв' element={<MaintenceCenter />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Card' element={<Card cart={cart} removeFromCart={removeFromCart} />} />
          <Route path='/unelgee' element={<Unelgee />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
