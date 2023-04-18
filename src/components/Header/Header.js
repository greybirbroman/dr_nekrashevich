import Logo from "../Logo/Logo";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const location = useLocation();
  return (
    <header className={`flex justify-between items-center py-5 px-5 sm:py-3 sm:px-3 z-20 ${location.pathname === '/' ? '' : 'shadow-md'}`}>
      <Logo />
      <nav>
        <motion.ul
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            dumping: 40,
          }}
          className='flex gap-2 text-white text-normal font-normal md:text-lg md:font-medium lg:text-lg lg:font-semibold'
        >
          {location.pathname !== "/" ? (
            <li>
              <Link
                to='/'
                className='inline-flex py-3 px-5 sm:px-3 bg-cyan-700 rounded-2xl'
              >
                Главная
              </Link>
            </li>
          ) : null}
          {location.pathname !== "/about" ? (
            <li>
              <Link
                to='/about'
                className='inline-flex py-3 px-5 sm:px-3 bg-cyan-700 rounded-2xl'
              >
                Обо мне
              </Link>
            </li>
          ) : null}
          {location.pathname !== "/work" ? (
            <li>
              <Link
                to='/work'
                className='inline-flex py-3 px-5 sm:px-3 bg-cyan-700 rounded-2xl'
                >
                  Записаться
              </Link>
            </li>
          ) : null}
        </motion.ul>
      </nav>
    </header>
  );
}
export default Header;
