import {motion} from "framer-motion";

function HeaderLink({href, text}) {
  return (
    <motion.a
      className='w-auto py-2 px-2 xs:py-1 xs:px-1 xs:w-fit font-semibold z-20 rounded border-2 border-white bg-cyan-500 text-white hover:border-cyan-900 ml-3'
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
