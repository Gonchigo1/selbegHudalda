import React, { useState } from 'react';
import Footer from '../Components/footer/footer.jsx';
import './unelgee.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function Unelgee() {
  const [image, setImage] = useState('');

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    try {
      const adResult = await axios.post(
        "http://localhost:3001/upload-image", 
        formData,
        { headers: {"Content-Type": "multipart/form-data"} }
      );
      console.log(adResult.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const Register = () => {
    const [values, setValues] = useState({
      type: '',
      typeName: ''
})};

  return (
    <Card>
      
    <div className='container_unelgee'>
      <p>
        Эвдрэл гэмтлэл Бүртгэх
      </p><div className='tailbar'>
        <label for="Төрөл">Тээврийн хэрэгслийн төрөл:</label>
        <select name="Төрөл" id="cars">
        <option value="Суудлын">Суудлын</option>
        <option value="Ачааны">Ачааны</option>
        <option value="Спорт">Спорт</option>
</select>
        <p>Тээврийн хэрэгслийн нэр</p>

        <input type='text' placeholder='Нэр...'/>
        <p>Дэлгэрэнгүй</p>
        <textarea id="qwer..." name="qwer..." placeholder='Дэлгэрэнгүй...' rows="4" cols="50"></textarea>
        </div>
      <div className='fileup'>
        <form onSubmit={submitImage}>
          <input type='file' accept="image/*" onChange={onInputChange} />
          <button type="submit">Upload</button>
        </form>
<div className='button_save'><button >Бүртгэх</button>
</div>
      </div>
    </div>
    </Card>
  );
}

export default Unelgee;
