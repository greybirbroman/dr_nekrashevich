import "./Landing.css";
import { motion, AnimatePresence } from "framer-motion";
import LandingImage from "../../images/main-image.jpg";
import SocialLinksBar from "../SocialLinksBar/SocialLinksBar";

function Landing() {
  const experience = new Date().getFullYear() - 2013;

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className='flex flex-col justify-center lg:items-end px-5 space-y-3 lg:space-y-5 text-center pb-20'
      >
        <img
          src={LandingImage}
          className='absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover w-[100%] h-screen'
          alt='Главное изображение'
        />
        <div className='space-y-2 lg:space-y-4'>
          <motion.h1
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className='text-gray-700 font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
          >
            Некрашевич <br /> Марина Сергеевна
          </motion.h1>
          <motion.h2
            initial={{
              x: -250,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className='font-light lg:font-normal text-gray-500 leading-4 lg:leading-5 text-sm lg:text-lg'
          >
            Врач-стоматолог-терапевт /<br /> врач-стоматолог детский
            <br />
            <span className='font-mono text-cyan-700'>
              Стаж {experience} лет
            </span>
          </motion.h2>
          <SocialLinksBar
            className={"flex justify-center w-full lg:justify-center"}
          />
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
export default Landing;
