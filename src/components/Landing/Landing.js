import { useRef } from "react";
import mainImage from "../../images/main-image.jpg";
import "./Landing.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Landing() {
  const experience = new Date().getFullYear() - 2013;
  let ref = useRef();
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
      ref={ref}
      initial='hidden'
      whileInView='visible'
      className='landing flex flex-col min-h-[570px]'
      style={{
        backgroundImage: `url(${mainImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity,
      }}
    >
      <motion.div
        style={{ y }}
        className='flex flex-col items-end z-20 px-3 pt-32'
      >
        <motion.h1
          custom={1}
          variants={textByXAnimation}
          className='landing__text text-gray-700 text-5xl md:text-4xl sm:text-3xl pb-5 font-semibold text-right text'
        >
          Некрашевич <br /> Марина Сергеевна
        </motion.h1>
        <motion.h2
          custom={2}
          variants={textByXAnimation}
          className='landing__subtext text-center font-medium text-cyan-700 text-md sm:text-sm w-60'
        >
          Врач-стоматолог-терапевт / врач-стоматолог детский
          <br />
          Стаж {experience} лет
        </motion.h2>
      </motion.div>
    </motion.section>
  );
}
export default Landing;
