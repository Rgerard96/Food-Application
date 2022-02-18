import { FilterIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import { useState } from 'react';
import Search from '../../components/Search';
import SellerCard from '../../components/SellerCard';
import SlideOver from '../../components/SlideOver';
import { motion } from 'framer-motion';

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Bestellen() {
  const [slideOver, setSlideOver] = useState(false);
  const [type, setType] = useState();
  const slideOverHandler = (e) => {
    setSlideOver(!slideOver);
    setType(e.target.id);
  };
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
      variants={stagger}
    >
      <Head>
        <title>Food Application</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SlideOver
        slideOver={slideOver}
        setSlideOver={setSlideOver}
        type={type}
      />
      <motion.div variants={fadeInUp} className='container mx-auto mb-8 px-5'>
        <div className='h-64 w-full rounded-lg bg-blue-500'></div>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Search />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className='container mx-auto mb-5 flex items-center justify-between px-5'
      >
        <h2 className='text-lg font-bold sm:text-xl'>
          Bestellen bij <span className='text-blue-500'>121</span> personen
        </h2>
        <div
          className='flex cursor-pointer items-center rounded-lg border bg-white py-1 px-2 text-gray-500'
          onClick={slideOverHandler}
          id='filter'
        >
          <FilterIcon className='mr-2 w-4' />
          <span className='text-sm'>Filter</span>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className='container mx-auto grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      >
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </motion.div>
    </motion.div>
  );
}
