import { motion } from "framer-motion";
import {
  educationText,
  educationText2,
  textByYAnimation,
} from "../../../utils/const";

function Education() {
  return (
    <motion.div
      variants={textByYAnimation}
      custom={1}
      className='container z-10 py-4 px-4 md:py-3 md:px-3 sm:py-2 sm:px-2 mr-5 md:mb-3 md:mr-0 sm:mr-0 sm:mb-3 flex-col bg-gradient-to-r from-white to-gray-200 text-gray-700'
    >
      <div className='flex flex-col items-center'>
        <h2 className='education text-2xl uppercase tracking-wider'>
          Образование
        </h2>
        <div className='education__icon mb-3'></div>
      </div>
      <ul className='flex-col text-md'>
        <li>
          <div className='w-20 rounded bg-cyan-500 text-center font-semibold py-2 px-2 text-white'>
            2012
          </div>
          <p className='list-item__tex text-gray-700 py-3'>
            {educationText}
          </p>
          <span className='text-cyan-500'>
            Базовое образование
          </span>
        </li>
        <li className='pt-5'>
          <div className='w-20 rounded bg-cyan-500 text-center font-semibold py-2 px-2 text-white'>
            2013
          </div>
          <p className='text-gray-700 py-3'>
            {educationText2}
          </p>
          <span className='text-cyan-500'>
            Интернатура
          </span>
        </li>
      </ul>
    </motion.div>
  );
}
export default Education;
