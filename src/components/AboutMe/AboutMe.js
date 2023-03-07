import { educationText, educationText2 } from "../../utils/const";
import { motion } from "framer-motion";
import icon from "../../images/list-icon.png";
import photo from "../../images/photo.jpg";
import "./AboutMe.css";

function AboutMe() {
  
  const textByYAnimation = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        
      }
    }),
  }
  return (
    <motion.section initial='hidden' whileInView='visible' id='t1' className='bg-white about flex sm:flex-col'>
      <motion.div
      variants={textByYAnimation} 
      custom={1}
      className='container z-10 pt-4 px-4 sm:mr-0 sm: mb-2 lg:mr-5 flex-col bg-gradient-to-r from-white to-gray-200 mr-2'>
        <div className='section__container flex flex-col items-center'>
          <motion.div 
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            repeat: Infinity,
            duration: 1.5,
          }}
          className='education__icon mb-3'></motion.div>
          <h2 className='education text-2xl font-medium text-gray-700 uppercase tracking-wider'>
            Образование
          </h2>
        </div>
        <ul className='education__list flex-col'>
          <li className='education__list-item'>
            <div className='list-item__year rounded bg-cyan-500 text-center font-semibold py-2 px-2 text-white'>
              2012
            </div>
            <p className='list-item__tex text-xl font-medium text-gray-700 py-3'>
              {educationText}
            </p>
            <span className='list-item__span text-m text-gray-700'>
              Базовое образование
            </span>
          </li>
          <li className='education__list-item pt-5'>
            <div className='list-item__year rounded bg-cyan-500 text-center font-semibold py-2 px-2 text-white'>
              2013
            </div>
            <p className='list-item__text text-gray-700 text-xl font-medium py-3'>
              {educationText2}
            </p>
            <span className='list-item__span text-m text-gray-700'>
              Интернатура
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.div variants={textByYAnimation} 
      custom={2} className='container z-10 sm:mr-0 sm: mb-2 lg:mr-5 pt-4 px-4 '>
        <div className='section__container flex flex-col items-center'>
          <h2 className='skills text-2xl font-medium uppercase tracking-wider'>
            Специализация
          </h2>
          <div className='skills__icon mt-3'></div>
        </div>
        <ul className='skills__list flex-colborder-cyan-500'>
          <li className='skills__list-item py-1 flex items-center'>
            <img className='skills__list-icon' src={icon} alt='Иконка' />
            <span className='skills__list-item-text text-xl font-medium text-gray-700 pl-2'>
              Лечение детей
            </span>
          </li>
          <li className='skills__list-item py-1 flex items-center'>
            <img className='skills__list-icon' src={icon} alt='Иконка' />
            <span className='skills__list-item-text text-xl font-medium text-gray-700 pl-2'>
              Лечение кариеса зубов
            </span>
          </li>
          <li className='skills__list-item py-1 flex items-center'>
            <img className='skills__list-icon' src={icon} alt='Иконка' />
            <span className='skills__list-item-text text-xl font-medium text-gray-700 pl-2'>
              Лечение корневых каналов
            </span>
          </li>
          <li className='skills__list-item py-1 flex items-baseline'>
            <img className='skills__list-icon' src={icon} alt='Иконка' />
            <span className='skills__list-item-text text-xl font-medium text-gray-700 pl-2'>
              Повторное эндодонтическое лечение, извлечение отломков
              инструментов из корневого канала под микроскопом
            </span>
          </li>
          <li className='skills__list-item py-1 flex items-baseline'>
            <img className='skills__list-icon' src={icon} alt='Иконка' />
            <span className='skills__list-item-text text-xl font-medium text-gray-700 pl-2'>
              Эстетические реставрации, композитные виниры, лазерное отбеливание
              зубов, внутрикоронковое отбеливание
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.div 
      variants={textByYAnimation} 
      custom={3}
      className='container z-10 pt-4 px-4 sm:mr-0 sm: mb-2 lg:mr-2 bg-gradient-to-r from-white to-gray-200'>
        <div className='section__container flex flex-col items-center>'>
          <h2 className='instruments text-2xl font-medium uppercase tracking-wider text-center'>
            Оборудование
          </h2>
          <div className='instruments__icon mt-3'></div>
        </div>
        <ul className='instruments__list flex-col>'>
          {/* <li className='instruments__list__photo'>
            <img src={photo} className='instruments__photo rounded' />
          </li> */}
          <li className='skills__list-item py-1 flex items-baseline'>
            <img className='skills__list-icon' src={icon} alt='Иконка' />
            <span className='skills__list-item-text text-xl font-medium text-gray-700 pl-2'>
              Дентальный микроскоп OPMI pico MORA (Carl Zeiss, Германия)
            </span>
          </li>
          <li className='skills__list-item py-1 flex items-baseline'>
            <img className='skills__list-icon' src={icon} alt='Иконка' />
            <span className='skills__list-item-text text-xl font-medium text-gray-700 pl-2'>
              Диодный лазер Doctor Smile (Lambda S.p.A., Италия)
            </span>
          </li>
          <li className='skills__list-item py-1 flex items-baseline'>
            <img className='skills__list-icon' src={icon} alt='Иконка' />
            <span className='skills__list-item-text text-xl font-medium text-gray-700 pl-2'>
              CAD/CAM система CEREC MC XL Premium Package (Dentsply Sirona,
              Германия)
            </span>
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
export default AboutMe;
