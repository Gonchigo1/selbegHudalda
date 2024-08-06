import React from 'react';
import './home.css';
import hand_icon from './assets/hand_icon.png';
import arrow_icon from './assets/arrow.png';
import camry_1 from './assets/camry_1.png';
import camry2 from './assets/camry2.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Home = () => {
  return (
<div className='car'>
      <div className='car-left'>
        <h2>Сайн байна уу?</h2>
        <div>
          <div className='hero-hand-icon'>
          </div>
         
          {/* <img src={hand_icon} alt='' /> */}
          <p>Та автомашины эвдрэл, гэмтлийн үнэлгээ хийхэд заавал өөрийн биеэр очих шаардлагагүй боллоо</p>
        
        </div>
        <div className='car-latest-btn'>
        <Link to='/unelgee' className='unelgee-button'>
            Үнэлгээ
            <img className ='arrow' src={arrow_icon} alt='Arrow' />
          </Link>

        </div>
      </div>
      <div className='car_right'>
        <img src={camry2} alt='' />
      </div>
    </div>
  );
};

export default Home;
