import { motion } from "framer-motion";
import SocialLink from "../SocialLink/SocialLink";

function SocialLinksBar({ className }) {
  return (
    <>
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
        duration: 1
      }}
      className={`${className}`}
    >
      <li className='rounded landing__link link_gmail transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 hover:cursor-pointer'>
        <SocialLink link='mailto:m.nekrashevich@denteria.ru' title='Gmail'/>
      </li>
      <li className='rounded landing__link link_telegram transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 hover:cursor-pointer'>
        <SocialLink link='https://t.me/MarinaNekrashevich' title='Telegram' />
      </li>
      <li className='rounded landing__link link_vk transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 hover:cursor-pointer'>
        <SocialLink link='https://m.vk.com/meowwzilla' title='VKontakte' />
      </li>
    </motion.ul>
    </>
  );
}
export default SocialLinksBar;
