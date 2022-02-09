import React from 'react';
import { useRouter } from 'next/router';

export default function Seller() {
  const router = useRouter();
  return (
    <div className='container mx-auto px-5'>
      <div className='mb-5 overflow-hidden rounded-lg'>
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
      <div
        className='text-center cursor-pointer rounded-lg bg-blue-500 py-2 px-14 w-max text-white lg:hover:bg-blue-600'
        onClick={() => router.push('/afrekenen')}
      >
        Afrekenen
      </div>
    </div>
  );
}
