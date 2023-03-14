import {motion} from "framer-motion";

function HeaderLink({href, text}) {
  return (
    <motion.a
      className='w-auto py-2 px-2 sm:py-2 sm:px-2 sm:w-fit sm:font-medium font-semibold z-20 rounded-xl bg-cyan-700 text-white text-center hover:border-cyan-700 ml-3'
      href={href}
      whileHover={{
        scale: 1.1,
        color: "rgb(6, 182, 212)",
        backgroundColor: "rgb(255, 255, 255)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {text}
    </motion.a>
  );
}
export default HeaderLink;
