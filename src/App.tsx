import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="products" element={<div>Products</div>} />
            <Route path="capabilities" element={<div>Capabilities</div>} />
            <Route path="contact" element={<div>Contact</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
