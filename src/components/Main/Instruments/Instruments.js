import icon from "../../../images/list-icon.png";
import CardTitle from "../../CardTitle/CardTitle";
import instumentsImage from "../../../images/instruments-image.jpg";
import { motion } from "framer-motion";
function Instruments() {
  return (
    <div className='py-2 px-2 bg-white shadow6 mb-10 md:mb-5 sm:mb-3'>
      <motion.div
        className='z-10 relative py-4 px-4 flex-col h-full w-full'
        style={{
          backgroundImage: `url(${instumentsImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CardTitle title='Инструменты' />
        <div className='absolute -z-10 w-full opacity-50 top-0 bottom-0 left-0 right-0 bg-black'></div>
        <div className='flex flex-col items-center'></div>
        <ul className='flex-col font-normal text-white space-y-3'>
          <li className='flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <p className='pl-2'>
              Дентальный микроскоп OPMI pico MORA{" "}
              <span className='text-cyan-500 font-mono'>(Carl Zeiss, Германия)</span>
            </p>
          </li>
          <li className='flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <p className='pl-2'>
              Диодный лазер Doctor Smile{" "}
              <span className='text-cyan-500 font-mono'>(Lambda S.p.A., Италия)</span>
            </p>
          </li>
          <li className='flex items-baseline'>
            <img className='icon' src={icon} alt='Иконка' />
            <p className='pl-2'>
              CAD/CAM система CEREC MC XL Premium Package{" "}
              <span className='text-cyan-500 font-mono'>(Dentsply Sirona, Германия)</span>
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
export default Instruments;
