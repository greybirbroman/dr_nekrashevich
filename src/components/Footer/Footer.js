import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer flex flex-col items-center flex-0 bg-gray-200 pt-5 mt-5'>
      <ul className=' flex footer__links hover:transition-all pb-5'>
        <li className='rounded landing__link landing__link_gmail mr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
          <a href='#' className='link'></a>
        </li>
        <li className='rounded landing__link landing__link_telegram mr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
            <a href='https://t.me/MarinaNekrashevich' className='link' target='_blank' rel="noreferrer" title="Telegram"> </a>
          </li>
        <li className='rounded landing__link landing__link_vk transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
          <a href='#' className='link'></a>
        </li>
      </ul>
      <a className='footer__author text-gray-500 text-sm' href='#'>
        RFedorov
      </a>
      <p className='footer__copyright text-gray-700 text-sm'>&#169;{year}</p>
    </footer>
  );
}
export default Footer;
