import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React from 'react';
import BackButton from '../components/BackButton';

export default function afrekenen() {
  const router = useRouter();
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
        </div>
        <div className='relative order-1 mb-5 cursor-pointer rounded-lg border bg-white py-2 px-4 text-gray-600 sm:order-2 sm:mb-0 md:w-2/5'>
          Overzicht bestelling
          <ChevronDownIcon className='absolute top-3 right-4 w-5 text-gray-400' />
        </div>
      </div>
    </div>
  );
}
