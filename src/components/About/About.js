import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import Education from "./Education/Education";
import Specialization from "./Specialization/Specialization";
import Instruments from "./Instruments/Instruments";
import aboutImage from "../../images/about-image.jpg";

function About() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className='w-full h-screen lg:flex overflow-x-auto items-center mt-10 mb-10'
      >
        <img
          src={aboutImage}
          className='absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover w-[100%] h-screen'
          alt='Изображение зубной щетки'
        />
        <ul className='grid grid-flow-row md:grid-flow-row lg:grid-flow-col'>
          <li className='mb-4 lg:mb-0'>
            <Specialization />
          </li>
          <li className='mb-4 lg:mb-0'>
            <Instruments />
          </li>
          <li>
            <Education />
          </li>
        </ul>
      </motion.main>
    </AnimatePresence>
  );
}
export default About;
