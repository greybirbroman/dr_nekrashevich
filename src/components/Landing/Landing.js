import "./Landing.css";
import { easeOut, motion } from "framer-motion";
import Link from "../Link/Link";

function Landing(options) {
  const experience = new Date().getFullYear() - 2013;

  const textByXAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
      },
    }),
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      className='landing flex  flex-col items-center justify-around bg-gradient-to-t from-gray-200 to-cyan-500'
    >
      <div className='flex flex-col justify-center bio z-20 px-2'>
        <motion.h1
          custom={1}
          variants={textByXAnimation}
          className='landing__text text-gray-800 text-5xl sm:text-4xl py-5 font-semibold text-center'
        >
          Некрашевич Марина Сергеевна
        </motion.h1>
        <motion.p
          custom={2}
          variants={textByXAnimation}
          className='landing__subtext text-center text-l sm:text-sm font-semibold text-gray-500 pb-5'
        >
          Врач-стоматолог-терапевт / врач-стоматолог детский
          <br />
          Стаж {experience} лет
        </motion.p>

        
      </div>

      {/* <motion.div
        className='figure bg-gradient-to-r from-gray-200 to-cyan-500 z-0 rounded absolute'
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      ></motion.div> */}
    </motion.section>
  );
}
export default Landing;
