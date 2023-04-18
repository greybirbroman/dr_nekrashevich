import CardTitle from '../../CardTitle/CardTitle';
import { educationlist } from '../../../utils/const';
import { motion } from 'framer-motion';
import {
  sectionListVariants,
} from '../../../utils/animations';

function Education() {
  return (
    <div className='py-2 px-2'>
      <div className='z-10 relative py-4 px-4 flex-col w-full h-full'>
        <CardTitle title='Образование' />
        <div className='flex flex-col items-center'></div>
        <ul className='flex-col font-normal space-y-3'>
          {educationlist.map((item, index) => (
            <motion.li
              key={item.id}
              variants={sectionListVariants}
              initial='hidden'
              animate='visible'
              custom={index}
            >
              <div className='w-20 rounded-xl bg-cyan-700 bg-opacity-80 text-center font-mono py-2 px-2 text-white'>
                {item.year}
              </div>
              <p className='list-item__text py-3'>{item.text}</p>
              <span className='text-cyan-700 italic'>{item.span}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Education;
