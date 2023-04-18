import CardTitle from '../../CardTitle/CardTitle';
import { instrumentslist } from '../../../utils/const';
import {
  sectionListVariants,
} from '../../../utils/animations';
import { motion } from 'framer-motion';
import icon from '../../../images/list-icon.png';

function Instruments() {
  return (
    <div className='py-2 px-2 bg-transparent w-full h-full'>
      <div className='z-10 relative py-4 px-4 flex-col w-full h-full'>
        <CardTitle title='Оборудование' />
        <div className='flex flex-col items-center'></div>
        <ul className='flex flex-col font-normal space-y-3'>
          {instrumentslist.map((item, index) => (
            <motion.li
              key={item.id}
              variants={sectionListVariants}
              initial='hidden'
              animate='visible'
              custom={index}
              className='flex items-baseline'
            >
              <img className='icon' src={icon} alt='Иконка зуба, зуб, стоматолгия' />
              <p className='pl-2'>
                {item.text}
                <span className='text-cyan-700 font-mono'>{item.span}</span>
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Instruments;
