import { ChevronDownIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';

export default function CartItem() {
  return (
    <div className='flex justify-between border-b p-5'>
      <div className='flex mr-5'>
        <div
          className='mr-5 h-20 w-20 rounded-lg hidden sm:block'
          style={{
            backgroundImage: 'url(' + '../images/food.jpg' + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className='flex flex-col justify-between'>
          <div className='mb-2'>
            <h4 className='font-bold'>Lorem ipsum</h4>
            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='font-bold text-sm'>$32.00</div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-end'>
        <TrashIcon className='w-5 text-gray-400' />
        <div className='rounded-lg border py-1 px-3 flex justify-between items-center w-16 shadow text-sm'>
          <p>5</p>
          <ChevronDownIcon className='w-4 text-gray-400' />
        </div>
      </div>
    </div>
  );
}
