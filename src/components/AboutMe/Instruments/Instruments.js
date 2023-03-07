import icon from "../../../images/list-icon.png";
import { textByYAnimation } from "../../../utils/const";
import { motion } from "framer-motion";
function Instruments() {
    return (
        <motion.div
        variants={textByYAnimation}
        custom={3}
        className='container z-10 py-4 px-4 md:py-3 md:px-3 sm:py-2 sm:mr-0 sm:mb-2 bg-gradient-to-r from-white to-gray-200 text-gray-700'
      >
        <div className='section__container flex flex-col items-center>'>
          <h2 className='text-2xl uppercase tracking-wider text-center'>
            Оборудование
          </h2>
          <div className='instruments__icon mb-3'></div>
        </div>
        <ul className='flex-col sm:text-md text-lg'>

          <li className='skills__list-item py-1 flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <p className='pl-2'>
              Дентальный микроскоп OPMI pico MORA <span className="text-cyan-500">(Carl Zeiss, Германия)</span>
            </p>
          </li>
          <li className='skills__list-item py-1 flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <p className='pl-2'>
              Диодный лазер Doctor Smile <span className="text-cyan-500">(Lambda S.p.A., Италия)</span>
            </p>
          </li>
          <li className='skills__list-item py-1 flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <p className='pl-2'>
              CAD/CAM система CEREC MC XL Premium Package <span className="text-cyan-500">(Dentsply Sirona,
              Германия)</span>
            </p>
          </li>
        </ul>
      </motion.div>
    )
}
export default Instruments