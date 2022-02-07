import React from 'react';

export default function Button({ children }) {
  return (
    <div className='cursor-pointer rounded-lg bg-blue-500 py-2 px-4 text-white hover:bg-blue-600'>
      {children}
    </div>
  );
}
