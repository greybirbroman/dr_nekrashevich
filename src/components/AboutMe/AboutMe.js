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
      className='bg-white flex mb-28 mt-28 px-4 md:px-3 sm:px-2 sm:flex-col sm:mt-10 sm:mb-10 md:flex-col md:mb-14 md:mt-14'
    >
      <Education />
      <Specialization />
      <Instruments />
    </motion.section>
  );
}
export default AboutMe;
