import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './commponants/Navbar';
import Cart from './commponants/Cart';
import Products from './commponants/Products';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
