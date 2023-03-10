import React from 'react';
import { useContext } from 'react';
import { dataContext } from '../../context/DataContext';

export default function CartTotal() {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, element) => acc + element.price, 0);
  return (
    <div className='cartTotal'>
      <h3>total a pagar: {total}€</h3>
    </div>
  );
}
