// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Product from './Product';
// import Card from './Card';

// const ParentComponent = () => {
//   // Initialize cart state
//   const [cart, setCart] = useState([]);

//   // Function to add an item to the cart
//   const addToCart = (productName, imageUrl) => {
//     // Add the new item to the cart array
//     const updatedCart = [...cart, { name: productName, image: imageUrl, quantity: 1 }];
//     setCart(updatedCart);
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = (index) => {
//     // Remove the item at the specified index from the cart array
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1);
//     setCart(updatedCart);
//   };

//   // Function to update the quantity of an item in the cart
//   const updateQuantity = (index, quantity) => {
//     // Update the quantity of the item at the specified index in the cart array
//     const updatedCart = [...cart];
//     updatedCart[index].quantity = quantity;
//     setCart(updatedCart);
//   };

//   return (
//     <div>
//       {/* Pass the cart state and update functions to child components */}
//       <Navbar cart={cart} />
//       <Product addToCart={addToCart} />
//       <Card cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
//     </div>
//   );
// };

// export default ParentComponent;
