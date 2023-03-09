import {motion, easeOut} from "framer-motion";
import Link from '../Link/Link'

function SocialLinksBar({className}) {
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
          className={className}
        >
          <li className='rounded landing__link mr-5 landing__link_gmail transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 hover:cursor-pointer'>
            <Link href='mailto:m.nekrashevich@denteria.ru' title='Gmail' />
          </li>
          <li className='rounded landing__link mr-5 landing__link_telegram transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 hover:cursor-pointer'>
            <Link href='https://t.me/MarinaNekrashevich' title='Telegram' />
          </li>
          <li className='rounded landing__link landing__link_vk transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 hover:cursor-pointer'>
            <Link href='https://m.vk.com/meowwzilla' title='VKontakte' />
          </li>
        </motion.ul>
    )
}
export default SocialLinksBar;