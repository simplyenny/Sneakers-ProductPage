import { useState } from 'react';
import './App.css';
import NavigationBar from './Component/Navbar';
import ProductPage from './Component/ProdPage';
import Basket from './Component/Basket';


function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      <NavigationBar count={count} />
      <ProductPage count={count} setCount={setCount} />

    </div>
  );
}

export default App;
