import {motion, easeOut} from "framer-motion";
import Link from '../Link/Link'

function SocialLinksBar() {
    return (
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
            delay: 1,
            ease: easeOut,
          }}
          className='hover:transition-all flex justify-center bg-gray-200 w-full py-1 sticky top-0 z-50'
        >
          <li className='rounded landing__link mr-5 landing__link_gmail transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
            <Link href='mailto:m.nekrashevich@denteria.ru' title='Gmail' />
          </li>
          <li className='landing__link mr-5 landing__link_telegram transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
            <Link href='https://t.me/MarinaNekrashevich' title='Telegram' />
          </li>
          <li className='landing__link landing__link_vk transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
            <Link href='https://m.vk.com/meowwzilla' title='VKontakte' />
          </li>
        </motion.ul>
    )
}
export default SocialLinksBar;