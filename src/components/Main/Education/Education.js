import "./Education.css";
import educationImage from "../../../images/education-image.jpg";
import { educationText, educationText2 } from "../../../utils/const";
import { motion } from "framer-motion";
import CardTitle from "../../CardTitle/CardTitle";

function Education() {
  return (
    <div className='py-2 px-2 bg-white shadow6 mb-10 md:mb-5 sm:mb-3'>
      <motion.div
        className='z-10 relative py-4 px-4 flex-col w-full h-full'
        style={{
          backgroundImage: `url(${educationImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CardTitle title='Образование' />
        <div className='absolute w-full opacity-[0.3] top-0 bottom-0 left-0 right-0 -z-10 bg-black'></div>
        <div className='flex flex-col items-center'></div>
        <ul className='flex-col font-normal'>
          <li>
            <div className='w-20 rounded bg-cyan-700 bg-opacity-80 text-center font-mono py-2 px-2 text-white'>
              2012
            </div>
            <p className='list-item__text py-3 text-white'>{educationText}</p>
            <span className='text-cyan-400 font-medium'>Базовое образование</span>
          </li>
          <li className='pt-5'>
            <div className='w-20 rounded bg-cyan-700 bg-opacity-80 text-center font-mono py-2 px-2 text-white'>
              2013
            </div>
            <p className='py-3 text-white'>{educationText2}</p>
            <span className='text-cyan-400 font-medium'>Интернатура</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
export default Education;
