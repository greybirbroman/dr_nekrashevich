import icon from "../../../images/list-icon.png";
import { textByYAnimation } from "../../../utils/const";
import { motion } from "framer-motion";

function Specialization() {
  return (
    <motion.div
      variants={textByYAnimation}
      custom={2}
      className='container py-4 px-4 z-10 md:py-3 md:px-3 sm:py-2 sm:px-2 md:mb-3 md:mr-0 sm:mr-0 sm:mb-3 mr-5 text-gray-700'
    >
      <div className='section__container flex flex-col items-center'>
        <h2 className='text-2xl uppercase tracking-wider'>
          Специализация
        </h2>
        <div className='skills__icon mb-3'></div>
      </div>
      <ul className='flex-col sm:text-md text-lg'>
        <li className='py-1 flex items-center'>
          <img className='icon' src={icon} alt='Иконка' />
          <span className='pl-2'>
            Лечение детей
          </span>
        </li>
        <li className='py-1 flex items-center'>
          <img className='icon' src={icon} alt='Иконка' />
          <span className='pl-2'>
            Лечение кариеса зубов
          </span>
        </li>
        <li className='py-1 flex items-center'>
          <img className='icon' src={icon} alt='Иконка' />
          <span className='pl-2'>
            Лечение корневых каналов
          </span>
        </li>
        <li className='py-1 flex items-baseline'>
          <img className='icon' src={icon} alt='Иконка' />
          <span className='pl-2'>
            Повторное эндодонтическое лечение, извлечение отломков инструментов
            из корневого канала под микроскопом
          </span>
        </li>
        <li className='py-1 flex items-baseline'>
          <img className='icon' src={icon} alt='Иконка' />
          <span className='pl-2'>
            Эстетические реставрации, композитные виниры, лазерное отбеливание
            зубов, внутрикоронковое отбеливание
          </span>
        </li>
      </ul>
    </motion.div>
  );
}
export default Specialization;
