import React from 'react';
import { useContext } from 'react';
import { dataContext } from '../../context/DataContext';
import CartElements from './CartElements';
import CartTotal from './CartTotal';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function CartContent() {
  const { cart } = useContext(dataContext);

  //  condicion

  return cart.length > 0 ? (
    <>
      <Link to={'/'}>
        <AiFillHome className='cart-home' />
      </Link>

      <CartElements />
      <CartTotal />
    </>
  ) : (
    <div className='cart-message'>
      <Link to={'/'}>
        <AiFillHome className='cart-home' />
      </Link>

      <h2 className='cart-text'>Your cart is empty</h2>
    </div>
  );
}
