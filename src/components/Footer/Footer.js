
import Link from "../Link/Link";
import SocialLinksBar from "../SocialLinksBar/SocialLinksBar";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-cyan-500 flex flex-col items-center flex-0'>
      <SocialLinksBar className={'flex justify-center bg-cyan-500 w-full py-2 sm:py-1'}/>
      <span className='text-cyan-700 text-sm'>icons by icons8</span>
      <div className='flex'>
        <a
          className='footer__author text-gray-700 text-sm'
          href='https://github.com/greybirbroman'
          target='_blank'
          rel='noreferrer'
        >
          Created by RomanFedorov
        </a>
      </div>
        <p className='footer__copyright text-gray-700 text-sm mr-1'>
          &#169;{year}
        </p>
    </footer>
  );
}
export default Footer;
