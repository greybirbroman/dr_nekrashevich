import icon from "../../../images/list-icon.png";
import CardTitle from "../../CardTitle/CardTitle";
import { motion } from "framer-motion";
import {
  sectionListVariants,
  sectionColsVariants,
} from "../../../utils/animations";

function Specialization() {
  const sectionList = [
    "Лечение взрослых и детей",
    "Лечение кариеса зубов",
    "Лечение корневых каналов",
    "Повторное эндодонтическое лечение, извлечение отломков инструментов из корневого канала под микроскопом",
    "Эстетические реставрации, композитные виниры, лазерное отбеливание зубов, внутрикоронковое отбеливание",
  ];
  return (
    <motion.div
      variants={sectionColsVariants}
      initial='hidden'
      animate='visible'
      custom={1}
      className='py-2 px-2 bg-transparent flex w-full h-full'
    >
      <div className='z-10 relative py-4 px-4 flex-col w-full h-full'>
        <CardTitle title='Специализация' />
        <div className='absolute -z-10 w-full opacity-70 top-0 bottom-0 left-0 right-0 via-green-600 bg-gradient-to-r from-transparent to-green-700 rounded-2xl'></div>
        <div className='flex flex-col items-center'></div>
        <motion.ul
         
          className='flex-col font-normal text-white space-y-3'
        >
          {sectionList.map((el, i) => (
            <motion.li
              variants={sectionListVariants}
              initial='hidden'
              animate='visible'
              custom={i}
              key={el}
              className='flex items-baseline'
            >
              <img className='icon' src={icon} alt='Иконка' />
              <p className='pl-2'>{el}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
export default Specialization;
