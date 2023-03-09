import { motion } from "framer-motion";
import Education from "./Education/Education";
import Specialization from "./Specialization/Specialization";
import Instruments from "./Instruments/Instruments";
import "./AboutMe.css";

function AboutMe() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      id='t1'
      className='flex mt-28 mb-28 md:mt-14 md:mb-14 sm:mt-10 sm:mb-10 px-4 md:px-3 sm:px-2 sm:flex-col md:flex-col'
    >
      <Education />
      <Specialization />
      <Instruments />
    </motion.section>
  );
}
export default AboutMe;
