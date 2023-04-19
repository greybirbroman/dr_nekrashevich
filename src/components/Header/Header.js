import Logo from '../Logo/Logo';
import HeaderLink from '../HeaderLink/HeaderLink';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header
      className={`flex justify-between items-center py-5 px-5 md:py-3 sm:py-3 sm:px-3 z-20 shadow-md`}
    >
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
            type: 'spring',
            stiffness: 50,
            dumping: 40,
          }}
          className='flex gap-2 lg:gap-3'
        >
          <li>
            <HeaderLink text={'Обо мне'} link='#about'></HeaderLink>
          </li>

          <li>
            <HeaderLink text={'Записаться'} link='#work'></HeaderLink>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
}
export default Header;
