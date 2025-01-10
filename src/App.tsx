import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Home</div>} />
            <Route path="about" element={<div>About</div>} />
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
