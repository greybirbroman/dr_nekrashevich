import icon from "../../../images/list-icon.png";
import { specializationList } from "../../../utils/const";
import CardTitle from "../../CardTitle/CardTitle";
import { motion } from "framer-motion";
import {
  sectionListVariants,
} from "../../../utils/animations";

function Specialization() {
 
  return (
    <div
      className='py-2 px-2 bg-transparent flex w-full h-full'
    >
      <div className='z-10 relative py-4 px-4 flex-col w-full h-full'>
        <CardTitle title='Специализация' />
       
        <div className='flex flex-col items-center'></div>
        <motion.ul
         
          className='flex-col font-normal space-y-3'
        >
          {specializationList.map((el, i) => (
            <motion.li
              variants={sectionListVariants}
              initial='hidden'
              animate='visible'
              custom={i}
              key={el}
              className='flex items-baseline'
            >
              <img className='icon' src={icon} alt='Иконка зуба, зуб, стоматология' />
              <p className='pl-2'>{el}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
export default Specialization;
