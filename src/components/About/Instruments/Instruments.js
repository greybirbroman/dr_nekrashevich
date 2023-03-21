import icon from "../../../images/list-icon.png";
import CardTitle from "../../CardTitle/CardTitle";
import { sectionListVariants, sectionColsVariants } from "../../../utils/animations";
import { motion } from "framer-motion";

function Instruments() {
  return (
    <motion.div 
    variants={sectionColsVariants}
    initial='hidden'
    animate='visible'
    custom={2}
    className='py-2 px-2 bg-transparent w-full h-full'>
      <div className='z-10 relative py-4 px-4 flex-col w-full h-full'>
        <CardTitle title='Инструменты' />
        <div className='absolute -z-10 w-full opacity-70 top-0 bottom-0 left-0 right-0 via-green-600 bg-gradient-to-r from-transparent to-green-700 rounded-2xl'></div>
        <div className='flex flex-col items-center'></div>
        <ul className='flex flex-col font-normal text-white space-y-3'>
          <motion.li 
          variants={sectionListVariants}
          initial='hidden'
          animate='visible'
          custom={2.5}
          className='flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <p className='pl-2'>
              Дентальный микроскоп OPMI pico MORA{" "}
              <span className='text-cyan-300 font-mono'>
                (Carl Zeiss, Германия)
              </span>
            </p>
          </motion.li>
          <motion.li 
          variants={sectionListVariants}
          initial='hidden'
          animate='visible'
          custom={3}
          className='flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <p className='pl-2'>
              Диодный лазер Doctor Smile{" "}
              <span className='text-cyan-300 font-mono'>
                (Lambda S.p.A., Италия)
              </span>
            </p>
          </motion.li>
          <motion.li 
          variants={sectionListVariants}
          initial='hidden'
          animate='visible'
          custom={3.5}
          className='flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <p className='pl-2'>
              CAD/CAM система CEREC MC XL Premium Package{" "}
              <span className='text-cyan-300 font-mono'>
                (Dentsply Sirona, Германия)
              </span>
            </p>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
}
export default Instruments;
