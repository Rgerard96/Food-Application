import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import FoodCard from '../../components/FoodCard';

export default function Seller() {
  const router = useRouter();
 
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='container mx-auto px-5'
    >
      <div className='mb-5 overflow-hidden rounded-lg border'>
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
      <div>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </motion.div>
  );
}
