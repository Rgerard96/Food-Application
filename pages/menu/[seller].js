import { ChevronLeftIcon } from '@heroicons/react/outline';
import React from 'react';
import { useRouter } from 'next/router';

export default function Seller() {
  const router = useRouter();
  return (
    <div className='container mx-auto px-5'>
      <div
        className='mb-5 flex cursor-pointer items-center group w-max'
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
          <div className='absolute -bottom-10 sm:-bottom-14 left-5'>
            <div
              className='h-20 sm:h-36 w-20 sm:w-36 rounded-full'
              style={{
                backgroundImage: 'url(' + '../images/person.jpg' + ')',
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
        </div>
        <div className='h-16 sm:h-24 bg-white'></div>
      </div>
    </div>
  );
}
