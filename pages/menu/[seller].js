import { ChevronLeftIcon } from '@heroicons/react/outline';
import React from 'react';
import { useRouter } from 'next/router';

export default function Seller() {
  const router = useRouter();
  return (
    <div className='container mx-auto px-4 sm:px-5'>
      <div
        className='group mb-5 flex w-max cursor-pointer items-center'
        onClick={() => router.back()}
      >
        <ChevronLeftIcon className='mr-2 w-5 group-hover:text-blue-500' />
        <h3 className='font-bold group-hover:text-blue-500'>Terug</h3>
      </div>
      <div className='overflow-hidden rounded-lg'>
        <div
          className='relative h-32 sm:h-60'
          style={{
            backgroundImage: 'url(' + '../images/food.jpg' + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute -bottom-10 left-5 sm:-bottom-14'>
            <div
              className='h-20 w-20 rounded-full sm:h-36 sm:w-36'
              style={{
                backgroundImage: 'url(' + '../images/person.jpg' + ')',
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
        </div>
        <div className='h-16 bg-white sm:h-24'></div>
      </div>
    </div>
  );
}
