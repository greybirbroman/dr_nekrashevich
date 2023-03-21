import { educationText, educationText2 } from "../../../utils/const";
import { motion } from "framer-motion";
import CardTitle from "../../CardTitle/CardTitle";
import {sectionColsVariants ,sectionListVariants} from  "../../../utils/animations";

function Education() {
  return (
    <motion.div
    variants={sectionColsVariants}
    initial='hidden'
    animate='visible'
    custom={3}
    className='py-2 px-2 bg-transparent w-full h-full'>
      <div className='z-10 relative py-4 px-4 flex-col w-full h-full'>
        <CardTitle title='Образование' />
        <div className='absolute w-full opacity-70 top-0 bottom-0 left-0 right-0 -z-10 via-green-600 bg-gradient-to-r from-transparent to-green-700 rounded-2xl'></div>
        <div className='flex flex-col items-center'></div>
        <ul className='flex-col font-normal space-y-3'>
          <motion.li
           variants={sectionListVariants}
           initial='hidden'
           animate='visible'
           custom={4}
          >
            <div className='w-20 rounded bg-cyan-300 bg-opacity-80 text-center font-mono py-2 px-2 text-white'>
              2012
            </div>
            <p className='list-item__text py-3 text-white'>{educationText}</p>
            <span className='text-cyan-300 italic'>
              Базовое образование
            </span>
          </motion.li>
          <motion.li 
           variants={sectionListVariants}
           initial='hidden'
           animate='visible'
           custom={4.5}
         >
            <div className='w-20 rounded bg-cyan-300 bg-opacity-80 text-center font-mono py-2 px-2 text-white'>
              2013
            </div>
            <p className='py-3 text-white'>{educationText2}</p>
            <span className='text-cyan-300 italic'>Интернатура</span>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
}
export default Education;
