import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { lazy, Suspense, useEffect, useCallback, useState } from 'react';
import $ from 'jquery';
import Loading from './components/Layout/Loading';
import Video from './components/Pages/Video';
const Home = lazy(() => import('./components/Pages/Home'));
const About = lazy(() => import('./components/Pages/About'));
const Products = lazy(() => import('./components/Pages/products'));
const Contact = lazy(() => import('./components/Pages/Contact'));
const Capabilities = lazy(() => import('./components/Pages/Capabilities'));
const Blogs = lazy(() => import('./components/Pages/blogs'));

const App = () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP);
  const [showContent, setShowContent] = useState(false);
  const handleWebGLContextLost = useCallback((e: JQuery.Event) => {
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
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000); // Delay for 4 seconds

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  return (
    <>
      {showContent ? (
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
                <Route path="capabilities" element={<Capabilities />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path='video' element={<Video/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default App;
