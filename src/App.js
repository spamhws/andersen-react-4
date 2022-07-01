import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { getData, getUser } from './utils/API';
import { useDispatch } from 'react-redux';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ItemFullscreen from './Components/ItemFullscreen/ItemFullscreen';
import RouteError from './Components/RouteError/RouteError';
import CartFullscreen from './Components/CartFullscreen/CartFullscreen';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    dispatch(getUser());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<ItemFullscreen />} />
        <Route path='*' element={<RouteError />} />
        <Route path='/cart' element={<CartFullscreen />} />
      </Routes>
    </>
  );
}

export default App;
