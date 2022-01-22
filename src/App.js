import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { commerce } from './lib/commerce';

import Loader from './components/ui/Loader';
import Navbar from './components/Navbar';
import Products from './components/Products';
import DetailsProduct from './components/DetailsProduct';
import Cart from './components/Cart';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const App = () => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState();
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    document.getElementById("loader").style.display = "block";
    const { data } = await commerce.products.list();
    setProducts(data);
    document.getElementById("loader").style.display = "none";
  }

  const fetchCart = async () => {
    document.getElementById("loader").style.display = "block";
    setCart(await commerce.cart.retrieve());
    document.getElementById("loader").style.display = "none";
  }
  
  const handleAddToCart = async (productId, quantity) => {
    document.getElementById("loader").style.display = "block";
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
    document.getElementById("loader").style.display = "none";
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    document.getElementById("loader").style.display = "block";
    const { cart } = await commerce.cart.update(productId, {quantity});
    setCart(cart);
    document.getElementById("loader").style.display = "none";
  }

  const handleRemoveFromCart = async (productId) => {
    document.getElementById("loader").style.display = "block";
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
    document.getElementById("loader").style.display = "none";
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const showDetails = (product) => {
    setDetails(product);
  }

  const applyFilter = (orderBy) => {
    let p = products.slice();
    switch (orderBy){
      case 'priceAsc':  //ordenar de menor a mayor
        p.sort(function(a,b){
          return (a.price.raw - b.price.raw)
        });
        setProducts(p);
        break;
      case 'priceDesc': //ordenar de mayor a menor
        p.sort(function(a,b){
          return (b.price.raw - a.price.raw)
        });
        setProducts(p);
        break;
      default: //sin ordenar (por defecto)
        fetchProducts();
        break;
    }
  }

  return(
    <Router>
      <div className='app-container'>
        <Loader id="loader" />

        <Navbar totalItems={cart.total_items} />

        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route exact path="/" element={<Navigate to="/productos" />} />
          <Route exact path="/productos" element={<Products products={products} showDetails={showDetails} applyFilter={applyFilter} />} />
          <Route exact path="/detalle" element={<DetailsProduct details={details} onAddToCart={handleAddToCart} />} />
          <Route exact path="/carrito" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />} />    
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;