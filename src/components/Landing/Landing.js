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
      className='landing flex  flex-col items-center justify-around bg-gray-200'
    >
      <div className='flex flex-col justify-center bio z-20 '>
        <motion.h1
          custom={1}
          variants={textByXAnimation}
          className='landing__text text-5xl py-5 font-semibold text-center'
        >
          Некрашевич Марина Сергеевна
        </motion.h1>
        <motion.p
          custom={2}
          variants={textByXAnimation}
          className='landing__subtext text-center text-l font-semibold text-gray-500 pb-5'
        >
          Врач-стоматолог-терапевт / врач-стоматолог детский
          <br />
          Стаж {experience} лет
        </motion.p>

        <motion.ul
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            ease: easeOut,
          }}
          className='hover:transition-all flex justify-center items-end'
        >
          <li className='rounded landing__link landing__link_gmail mr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
            <Link href='mailto:m.nekrashevich@denteria.ru' title='Gmail' />
          </li>
          <li className='rounded landing__link landing__link_telegram mr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
            <Link href='https://t.me/MarinaNekrashevich' title='Telegram' />
          </li>
          <li className='rounded landing__link landing__link_vk transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
            <Link href='https://m.vk.com/meowwzilla' title='VKontakte' />
          </li>
        </motion.ul>
      </div>

      <motion.div
        className='figure bg-gradient-to-r from-gray-200 to-cyan-500 z-10 rounded'
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      ></motion.div>
    </motion.section>
  );
}
export default Landing;
