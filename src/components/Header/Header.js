import Logo from "../Logo/Logo";
import HeaderLink from "../HeaderLink/HeaderLink";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const location = useLocation();
  return (
    <header className='flex justify-between items-center py-2 px-5 md:px-10 lg:px-10 relative z-20'>
      <Logo />
      <nav>
        <motion.ul
          initial={{
            x: -500,
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
          className='flex space-x-2'
        >
          {location.pathname !== "/" ? (
            <li>
              <Link
                to='/'
                className='inline-flex text-white text-normal lg:text-lg font-normal lg:font-medium py-3 px-3 bg-cyan-700 rounded-full'
              >
                Главная
              </Link>
            </li>
          ) : null}
          {location.pathname !== "/about" ? (
            <li>
              <Link
                to='/about'
                className='inline-flex text-white text-normal lg:text-lg font-normal lg:font-medium py-3 px-3 bg-cyan-700 rounded-full'
              >
                Обо мне
              </Link>
            </li>
          ) : null}
          {location.pathname !== "/work" ? (
            <li>
              <Link
                to='/work'
                className='inline-flex text-white text-normal lg:text-lg font-normal lg:font-medium py-3 px-3 bg-cyan-700 rounded-full'
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
