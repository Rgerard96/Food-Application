import React, { useState } from 'react';
import {
  ChevronLeftIcon,
  ColorSwatchIcon,
  MenuAlt4Icon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import Dropdown from './Dropdown';
import SlideOver from './SlideOver';
import Cart from './Cart';

export default function Header() {
  const router = useRouter();
  const path = router.asPath.split('/');
  const { data: session } = useSession();
  const [slideOver, setSlideOver] = useState(false);
  const [cart, setCart] = useState(false);
  const [type, setType] = useState();
  const slideOverHandler = (e) => {
    setSlideOver(!slideOver);
    setType(e.target.id);
  };
  const cartHandler = () => {
    setCart(!cart);
  };

  return (
    <div className='sticky top-0 z-10 mb-8 bg-white py-3 shadow-md'>
      <SlideOver
        slideOver={slideOver}
        setSlideOver={setSlideOver}
        type={type}
      />
      <Cart cart={cart} setCart={setCart} />
      <div className='container mx-auto flex items-center justify-between px-5'>
        <div className='flex items-center'>
          {path[1] !== '' && (
            <ChevronLeftIcon
              className='mr-3 mt-1 w-6 cursor-pointer lg:hover:text-blue-500'
              onClick={() => router.back()}
            />
          )}
          <ColorSwatchIcon className='mr-3 w-9 text-blue-500 sm:w-10' />
          <h2 className='text-xl font-bold'>Food</h2>
        </div>
        {path !== '/' && (
          <div className='hidden sm:flex'>
            <p className='cursor-pointer hover:text-blue-500'>Ontdekken</p>
            <p className='mx-5 cursor-pointer hover:text-blue-500'>Ontdekken</p>
            <p className='cursor-pointer hover:text-blue-500'>Ontdekken</p>
          </div>
        )}
        <div className='flex items-center divide-x'>
          <div className='flex items-center pr-5'>
            <div className='hidden items-center lg:flex'>
              <Dropdown name={session ? 'Account' : 'Inloggen'} />
              <div className='cursor-pointer rounded-lg bg-blue-500 py-2 px-4 text-white lg:hover:bg-blue-600'>
                Nu verkopen
              </div>
            </div>
            {path[1] === '' ? (
              ''
            ) : path[1] === 'afrekenen' ? (
              ''
            ) : (
              <ShoppingCartIcon
                className='ml-5 w-5 cursor-pointer lg:hover:text-blue-500'
                onClick={cartHandler}
              />
            )}
          </div>
          <div className='cursor-pointer pl-5'>
            <MenuAlt4Icon
              className='w-6 lg:hover:text-blue-500'
              onClick={slideOverHandler}
              id='menu'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
