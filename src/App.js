import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrito from './components/CartContent/CartContent';
import DataProvider from './context/DataContext';

function App() {
  return (
    // envuelvo en DataProvider a toda mi aplicación, para que la info del proveedor pueda llegar a todos los puntos
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Carrito />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
