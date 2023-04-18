import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import Education from "./Education/Education";
import Specialization from "./Specialization/Specialization";
import Instruments from "./Instruments/Instruments";
import { textVariant } from "../../utils/animations";

function About() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className='w-full flex-1 px-10 py-10 md:px-5 sm:px-3 md:py-10 sm:py-5 bg-slate-100 relative z-10'
      >
        {/* <div className="w-[1400px] h-[500px] bg-cyan-700 bg-opacity-50 top-1/6 absolute top-[20%] z-[-1] rotate-12"></div> */}
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 text-gray-700 text-md md:text-lg lg:text-xl'>
          <li className='shadow-xl rounded-2xl bg-white'>
            <Specialization />
          </li>
          <li className='shadow-xl rounded-2xl bg-white'>
            <Instruments />
          </li>
          <li className="shadow-xl rounded-2xl bg-white">
            <Education />
          </li>
        </ul>
      </motion.main>
    </AnimatePresence>
  );
}
export default About;
