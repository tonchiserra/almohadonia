import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { commerce } from './lib/commerce';

import Navbar from './components/Navbar';
import Products from './components/Products';
import DetailsProduct from './components/DetailsProduct';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState();

  const fetchProducts = async () => {
    document.getElementById("loader").style.display = "block";
    const { data } = await commerce.products.list();
    setProducts(data);
    document.getElementById("loader").style.display = "none";
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const showDetails = (product) => {
    setDetails(product)
  }

  return(
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Products products={products} showDetails={showDetails} />} />
          <Route exact path="/detalle" element={<DetailsProduct details={details} />} />
          <Route exact path="/carrito" element={<Cart />} />    
        </Routes>
             
      </div>
    </Router>
  );
}

export default App;