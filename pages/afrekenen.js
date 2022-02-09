import { Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';

export default function afrekenen() {
  const router = useRouter();
  const [summary, setSummary] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setSummary(false);
    }
  }, []);
  return (
    <div className='container mx-auto px-5'>
      <BackButton />
      <div className='flex flex-col justify-between sm:flex-row'>
        <div className='order-2 divide-y sm:order-1 md:mr-20 md:w-3/5'>
          <div className='pb-5'>
            <h3 className='mb-5 text-lg font-bold'>Persoonlijke gegevens</h3>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>
                  Voor- en achternaam
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='w-full rounded-lg border py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>E-mailadres</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='w-full rounded-lg border py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>
                  Telefoonnummer
                </label>
                <input
                  type='tel'
                  name='tel'
                  id='tel'
                  className='w-full rounded-lg border py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
            </div>
          </div>
          <div className='py-5'>
            <h3 className='mb-5 text-lg font-bold'>Bezorgadres</h3>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>Straat</label>
                <input
                  type='text'
                  name='street '
                  id='street'
                  className='w-full rounded-lg border py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>Huisnummer</label>
                <input
                  type='number'
                  name='house'
                  id='house'
                  className='w-full rounded-lg border py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>Postcode</label>
                <input
                  type='text'
                  name='postalCode'
                  id='postalCode'
                  className='w-full rounded-lg border py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>Woonplaats</label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className='w-full rounded-lg border py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='transition-all duration-500 ease-in order-1 mb-5 cursor-pointer overflow-hidden rounded-lg border bg-white text-gray-600 sm:order-2 sm:mb-0 md:w-2/5'>
          <div className={`py-2 px-4 ${summary ? 'block' : 'hidden'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus velit nam harum tempora, eaque odio! Fuga odio placeat
            doloribus? Amet.
          </div>
          <div
            className='relative bg-blue-500 py-2 px-4 text-white text-center'
            onClick={() => setSummary(!summary)}
          >
            Overzicht bestelling
            <ChevronDownIcon className={`transition-all duration-200 ease-in absolute top-3 right-4 w-5 text-white ${summary && 'rotate-180'}`} />
          </div>
        </div>
      </div>
    </div>
  );
}