import React from 'react';
import CartItem from './CartItem';

export default function Cart() {
  return (
    <div>
      <div className=''>
        <CartItem />
        <CartItem />
        <CartItem />
        <div className='divide-y p-5'>
          <div className='pb-3'>
            <div className='mb-2 flex items-center justify-between'>
              <p>Subtotaal</p>
              <p className='font-semibold'>$50.00</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <p>Delivery</p>
              <p className='font-semibold'>$5.00</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <p>Taxes</p>
              <p className='font-semibold'>$5.00</p>
            </div>
          </div>
          <div className='flex items-center justify-between pt-5 pb-5'>
            <p className='font-bold'>Totaal</p>
            <p className='font-semibold'>$60.00</p>
          </div>
          <div>
            <div className='my-5 cursor-pointer rounded-lg bg-blue-500 py-2 px-8 text-center text-white lg:hover:bg-blue-600'>
              Afrekenen
            </div>
            <div className='cursor-pointer rounded-lg border border-blue-500 py-2 px-8 text-center text-blue-500 '>
              Verder winkelen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
