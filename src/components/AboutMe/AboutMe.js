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
      className='flex mt-10 mb-10 px-4 md:px-3 sm:px-2 sm:flex-col md:flex-col'
    >
      <Education />
      <Specialization />
      <Instruments />
    </motion.section>
  );
}
export default AboutMe;
