import React, { useState } from 'react';
import './MaintenceCenter.css';
import zasvar from '../Components/assets/zavsar1.png'
  // import zasvar1 from '../Components/assets/zasvar1.png'

export const MaintenceCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [land, setLand] = useState([
    { name: "32 ын тойрог", imageUrl: zasvar },
    { name: "Баянбүрд", imageUrl: zasvar },
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Search query:", searchQuery);
  };

  const filteredProducts = land.filter(lands =>
    lands.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='Tuv'>Засварын төвүүд</div>
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
        {filteredProducts.map((lands, index) => (
          <div key={index} className="product-item">
            <img src={lands.imageUrl} alt="" />
            <p>{lands.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenceCenter;
