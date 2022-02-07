import Head from 'next/head';
import Search from '../components/Search';
import SellerCard from '../components/SellerCard';

export default function Home() {
  return (
    <div className='container mx-auto px-4 sm:px-5'>
      <Head>
        <title>Food Application</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex h-96 rounded-3xl bg-blue-200 p-10'>
        <div className='w-1/2'>
          <h1 className='mb-8 text-5xl font-bold'>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </h1>
          <p className='mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            dolores. Quibusdam eligendi animi ipsum sed deleniti saepe
            laboriosam totam similique?
          </p>
          <input
            type='text'
            name=''
            id=''
            className='w-4/5 rounded-full py-2 px-5 ring ring-blue-500 focus:outline-none'
          />
        </div>
        <div className='w-4/6'></div>
      </div>
    </div>
  );
}
