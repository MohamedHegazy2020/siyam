import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { lazy, Suspense, useEffect, useCallback } from 'react';
import $ from 'jquery';

const Home = lazy(() => import('./components/Pages/Home'));
const About = lazy(() => import('./components/Pages/About'));
const Products = lazy(() => import('./components/Pages/products'));
const Contact = lazy(() => import('./components/Pages/Contact'));
const Capabilities = lazy(() => import('./components/Pages/Capabilities'));
const Blogs = lazy(() => import('./components/Pages/blogs'));

const App = () => {
  const handleWebGLContextLost = useCallback((e: JQuery.Event) => {
    console.log('WebGL Context Lost');
    e.preventDefault();
  }, []);

  useEffect(() => {
    const canvas = $('canvas');
    canvas.on('webglcontextlost', handleWebGLContextLost);

    return () => {
      canvas.off('webglcontextlost', handleWebGLContextLost);
    };
  }, [handleWebGLContextLost]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="capabilities" element={<Capabilities />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

