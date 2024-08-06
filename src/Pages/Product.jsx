import React, { useState } from 'react';
import './Product.css';
import selbeg1 from '../Components/assets/selbeg1.jpg';
import selbeg2 from '../Components/assets/selbeg2.jpg';
import selbeg3 from '../Components/assets/selbeg3.jpg';
import selbeg4 from '../Components/assets/selbeg4.jpg';
import selbeg5 from '../Components/assets/selbeg5.jpg';
import selbeg6 from '../Components/assets/selbeg6.jpg';
import selbeg7 from '../Components/assets/motor.jpg';
import selbeg8 from '../Components/assets/ruli.jpg';

const Product = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([
    { name: "2012-2015 Toyota camry engine", imageUrl: selbeg1 },
    { name: "Toyota alphard engine", imageUrl: selbeg2 },
    { name: "Nissan tiida engine", imageUrl: selbeg3 },
    { name: "Rx axle ", imageUrl: selbeg5 },
    { name: "Axle", imageUrl: selbeg6 },
    { name: "2005-2009 Toyota prius engine", imageUrl: selbeg7 },
    { name: "Steering wheel", imageUrl: selbeg8 },
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Search query:", searchQuery);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (productName, imageUrl) => {
    addToCart(productName, imageUrl);
  };

  return (
    <div className="Container">
      <div className='Tuv'>Сэлбэгийн жагсаалт харах</div>
      <div className="nav-search">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Нэрээр хайх..."
        />
        <button onClick={handleSubmit}>Хайх</button>
      </div>
      <div className='product-container'>
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imageUrl} alt="" />
            <p>{product.name}</p>
            <button onClick={() => handleAddToCart(product.name, product.imageUrl)}>Сагслах</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
