import icon from "../../../images/list-icon.png";
import { textByYAnimation } from "../../../utils/const";
import { motion } from "framer-motion";

function Specialization() {
  return (
    <motion.div
      variants={textByYAnimation}
      custom={1}
      className='overflow-hidden relative container py-4 px-4 md:py-3 md:px-3 sm:py-2 sm:px-2 mr-5 md:mb-5 md:mr-0 sm:mr-0 sm:mb-5 flex-col '
      style={{
        boxShadow:
          "2px -2px 5px 0 rgba(0,0,0,.1), -2px -2px 5px 0 rgba(0,0,0,.1), 2px 2px 5px 0 rgba(0,0,0,.1), -2px 2px 5px 0 rgba(0,0,0,.1)",
      }}
    >
      <div className='bg-gradient-to-r from-white to-cyan-500 opacity-20 h-full w-full -rotate-12 absolute top-0 right-0 left-0 bottom-0 -z-10'></div>
      <div className='flex flex-col items-center'>
        <h2 className='education text-2xl uppercase text-gray-700'>
          Специализация{" "}
        </h2>
        <div className='skills__icon mb-3'></div>
      </div>
      <ul className='flex-col sm:text-md text-lg text-gray-700'>
        <li className='py-1 flex items-center'>
          <img className='icon' src={icon} alt='Иконка' />
          <span className='pl-2'>Лечение детей</span>
        </li>
        <li className='py-1 flex items-center'>
          <img className='icon' src={icon} alt='Иконка' />
          <span className='pl-2'>Лечение кариеса зубов</span>
        </li>
        <li className='py-1 flex items-center'>
          <img className='icon' src={icon} alt='Иконка' />
          <span className='pl-2'>Лечение корневых каналов</span>
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
