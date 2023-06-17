import './App.css';
import List from './components/List';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';
import { Route, Routes } from 'react-router-dom';
function App() {
  
  return (
    <CartProvider>
    <Routes>
      
      <Route path="/" element={<List />}/>
      <Route path="/cart" element={<Cart />}/> 
    </Routes>
    </CartProvider>
  );
}

export default App;
