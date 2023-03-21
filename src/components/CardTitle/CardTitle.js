import { motion } from 'framer-motion';

function CardTitle({ title }) {
  return (
    <motion.h2 
    initial={{
      x: 150,
      opacity: 0
    }}
    animate={{
      x: 0,
      opacity: 1
    }}
    transition={{
      delay: 0.5,
      duration: 1,
      type: 'spring',
      stiffness: 100,
    }}
    className='education text-xl lg:text-2xl font-mono uppercase mb-10 lg:mb-20 bg-white rounded-2xl w-fit text-green-600 py-3 px-3 bg-opacity-80'>
      {title}
    </motion.h2>
  );
}
export default CardTitle;
