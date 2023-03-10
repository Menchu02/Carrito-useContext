//PRODUCTS ES DONDE VOY A RENDERIZAR LOS DATOS QUE HE LLAMADO DESDE MI CONTEXT , QUE SE LLAMA DATACONTEXT

//1 ME IMPORTO EL useContext DE REACT
import { useContext } from 'react';

//2 ME IMPORTO MI DATA CONTEXT QUE ES MI CONTEXTO PARA TENER ACCESO A LOS DATOS
import { dataContext } from '../../context/DataContext';

//CSS
import './Products.css';

import React from 'react';

export default function Products() {
  //3 DENTRO DE LAS LLAVES, PONGO LO QUE QUIERO TRAERME DE MI DATACONTEXT
  // PARA PODER UTILIZARLO EN ESTE COMPONENTE
  //PRIMERO ME TRAIGO DATA, QUE ES EL ESTADO DONDE ESTÁN ALMACENADOS LOS DATOS LLAMADOS CON AXIOS,
  // Y NECESITO EL ESTADO PARA MAPEARLO Y RENDERIZARLOS EN ESTE COMPONENTE
  const { data, cart, setCart } = useContext(dataContext);

  const buyProducts = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  //4 MAPEO EL ESTADO DATA
  return data.map((product) => {
    return (
      <div className='card' key={product.id}>
        <img src={product.img} alt='img-product-card' />
        <h3>{product.name}</h3>
        <h4>{product.price}€</h4>
        <button onClick={() => buyProducts(product)} className='buttonCard'>
          Buy
        </button>
      </div>
    );
  });
}
