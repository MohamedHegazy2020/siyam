import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import gsap from 'gsap';
import {  ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Products from './components/Pages/products';
import Contact from './components/Pages/Contact';
import { useEffect } from 'react';
import $ from 'jquery';

const App = () => {
  useEffect(() => {
    $('canvas').on('webglcontextlost', (e) => {
      console.log('WebGL Context Lost'); 
      e.preventDefault();
    });
  });
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    gsap.from('img', {
      skewY: 0,
      scrollTrigger: {
        trigger: 'img',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        toggleActions: 'play pause reset',
        onEnter: () => gsap.to('img', { skewY: 10 }),
        onLeave: () => gsap.to('img', { skewY: 0 }),
        onEnterBack: () => gsap.to('img', { skewY: 10 }),
        onLeaveBack: () => gsap.to('img', { skewY: 0 }),
      },
    });
  })

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="products" element={<Products/>} />
            <Route path="capabilities" element={<div>Capabilities</div>} />
            <Route path="contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
