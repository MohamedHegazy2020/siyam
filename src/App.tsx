import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import gsap from 'gsap';
import {  ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Products from './components/Pages/products';

const App = () => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="products" element={<Products/>} />
            <Route path="capabilities" element={<div>Capabilities</div>} />
            <Route path="contact" element={<div>Contact</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
