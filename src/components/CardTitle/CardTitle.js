import { motion } from 'framer-motion';

function CardTitle({ title }) {
  return (
    <motion.h3 
    initial={{
      x: -50,
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
    }}
    className='education text-xl shadow-lg lg:text-2xl font-medium uppercase mb-10 lg:mb-20 bg-slate-100 rounded-xl w-fit py-3 px-3 bg-opacity-80'>
      {title}
    </motion.h3>
  );
}
export default CardTitle;
