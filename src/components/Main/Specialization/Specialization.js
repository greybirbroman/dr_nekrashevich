import icon from "../../../images/list-icon.png";
import CardTitle from "../../CardTitle/CardTitle";
import specializationImage from "../../../images/specialization-image.jpg";
import { motion } from "framer-motion";

function Specialization() {
  return (
    <div className='py-2 px-2 bg-white shadow6 flex mb-10 md:mb-5 sm:mb-3'>
      <motion.div
        className='z-10 relative py-4 px-4 flex-col w-full h-full'
        style={{
          backgroundImage: `url(${specializationImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CardTitle title='Специализация' />
        <div className='absolute -z-10 w-full opacity-60 top-0 bottom-0 left-0 right-0 bg-black'></div>
        {/* <div className='bg-gradient-to-r from-white to-cyan-700 opacity-20 h-full w-full -rotate-12 absolute top-0 right-0 left-0 bottom-0 -z-10'></div> */}
        <div className='flex flex-col items-center'>
          {/* <div className='skills__icon mb-3'></div> */}
        </div>
        <ul className='flex-col font-medium text-white space-y-3'>
          <li className='flex items-center'>
            <img className='icon' src={icon} alt='Иконка' />
            <span className='pl-2'>Лечение детей</span>
          </li>
          <li className='flex items-center'>
            <img className='icon' src={icon} alt='Иконка' />
            <span className='pl-2'>Лечение кариеса зубов</span>
          </li>
          <li className='flex items-center'>
            <img className='icon' src={icon} alt='Иконка' />
            <span className='pl-2'>Лечение корневых каналов</span>
          </li>
          <li className='flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <span className='pl-2'>
              Повторное эндодонтическое лечение, извлечение отломков
              инструментов из корневого канала под микроскопом
            </span>
          </li>
          <li className='flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <span className='pl-2'>
              Эстетические реставрации, композитные виниры, лазерное отбеливание
              зубов, внутрикоронковое отбеливание
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
export default Specialization;
