import './App.css';
import List from './components/List';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<List />}/>
      <Route path="/cart" element={<h1>Cart</h1>}/> 
    </Routes>
  );
}

export default App;
