/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { DotsHorizontalIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import Cart from './Cart';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown({ name }) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          className={
            name === 'Account'
              ? style.account
              : name === 'Inloggen'
              ? style.account
              : 'flex items-center'
          }
        >
          {name === 'Account' ? (
            name
          ) : name === 'Inloggen' ? (
            name
          ) : name === 'cart' ? (
            <ShoppingCartIcon className={style.cart} />
          ) : (
            <DotsHorizontalIcon className='mt-1 w-7' />
          )}
          {name === 'Account' && (
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5'
              aria-hidden='true'
            />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={`absolute -right-10 sm:right-0 ${
            name === 'option' ? 'mt-1' : 'mt-5'
          } w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-96 overflow-y-scroll`}
        >
          <div className='py-1'>{name === 'cart' && <Cart />}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

const style = {
  account: 'flex items-center mr-5 cursor-pointer lg:hover:text-blue-500',
  cart: 'ml-5 w-5 cursor-pointer lg:hover:text-blue-500',
};
