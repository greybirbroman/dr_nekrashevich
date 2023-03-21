
import { motion } from "framer-motion";

function HeaderLink({ text }) {
  
  return (
    <motion.a
      className='text-white font-normal text-lg lg:text-xl lg:font-medium py-2 px-2 bg-cyan-700 rounded-full'
      whileHover={{
        scale: 1.1,
        color: "rgb(6, 182, 212)",
        backgroundColor: "rgb(255, 255, 255)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20, duration: 1 }}
      whileTap={{scale: 0.9}}
      href={''}
      rel='noreferrer'
    >
      {text}
    </motion.a>
  );
}
export default HeaderLink;
