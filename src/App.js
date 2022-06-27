import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CartMin from './Components/CartMin/CartMin';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ItemFullscreen from './Components/ItemFullscreen/ItemFullscreen';
import RouteError from './Components/RouteError/RouteError';

function App() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState({ items: [] });
  const [users, setUsers] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleIsLoggedIn() {
    setIsLoggedIn(!isLoggedIn);
  }

  function addItemToCart(itemID, price, amount = 1) {
    let itemAlreadyAdded = false;
    cart.items.forEach((item, index) => {
      if (item.productID === itemID) {
        const newCart = [...cart.items];

        newCart[index].amount += Number(amount);
        setCart({ items: newCart });

        itemAlreadyAdded = true;
      }
    });

    if (!itemAlreadyAdded) {
      setCart((prevState) => ({
        items: [...prevState.items, { productID: itemID, price: price, amount: Number(amount) }],
      }));
    }
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=12&limit=12`);
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      }
      let actualData = await response.json();
      setData(actualData);
    };

    const getUser = async () => {
      const response = await fetch(`https://api.escuelajs.co/api/v1/users/`);
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      }
      let actualUser = await response.json();
      setUsers(actualUser);
    };

    getData();
    getUser();
  }, []);

  return (
    <>
      <Header toggleIsLoggedIn={toggleIsLoggedIn} users={users} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' element={<Home data={data} addItemToCart={addItemToCart} isLoggedIn={isLoggedIn} />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/product/:id'
          element={<ItemFullscreen data={data} addItemToCart={addItemToCart} isLoggedIn={isLoggedIn} />}
        />
        <Route path='*' element={<RouteError />} />
      </Routes>
      <CartMin cart={cart} isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
