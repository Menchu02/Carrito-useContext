import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import './Home.css';

export default function Home() {
  return (
    //EN HOME RENDERIZO TODOS MIS COMPONENTES, ES LA CENTRAL
    <div>
      <Navbar />
      <Banner />
      <div className='product-card-container'>
        <Products />
      </div>
    </div>
  );
}
