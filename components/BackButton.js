import { ChevronLeftIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React from 'react';

export default function BackButton() {
  const router = useRouter();
  return (
    <div
      className='group mb-5 flex w-max cursor-pointer items-center'
      onClick={() => router.back()}
    >
      <ChevronLeftIcon className='mr-2 w-5 md:group-hover:text-blue-500' />
      <h3 className='font-bold md:group-hover:text-blue-500'>Terug</h3>
    </div>
  );
}
