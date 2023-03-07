
import Link from "../Link/Link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-cyan-500 flex flex-col items-center flex-0'>
      <ul className=' flex footer__links hover:transition-all pt-5 pb-3'>
        <li className='rounded landing__link landing__link_gmail mr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
          <Link href='mailto:m.nekrashevich@denteria.ru' title='Gmail' />
        </li>
        <li className='rounded landing__link landing__link_telegram mr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
          <Link href='https://t.me/MarinaNekrashevich' title='Telegram' />
        </li>
        <li className='rounded landing__link landing__link_vk transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
          <Link href='https://m.vk.com/meowwzilla' title='VK' />
        </li>
      </ul>
      <span className='text-cyan-700 text-sm'>icons by icons8</span>
      <div className='flex'>
        <p className='footer__copyright text-gray-700 text-sm mr-1'>
          &#169;{year}
        </p>
        <a
          className='footer__author text-gray-700 text-sm'
          href='https://github.com/greybirbroman'
          target='_blank'
          rel='noreferrer'
        >
          RomanFedorov
        </a>
      </div>
    </footer>
  );
}
export default Footer;
