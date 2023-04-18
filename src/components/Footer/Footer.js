import { useLocation } from "react-router-dom";
function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation()

  return (
    <footer className={`flex flex-col items-center z-10 ${location.pathname === '/' ? '' : 'bg-slate-100'}`}>
      <a target="_blank" href="https://icons8.com" rel="noreferrer" className="text-gray-700 text-xs">Icons by icon8</a>
      <div className='flex items-center justify-center'>
        <a
          className='text-gray-700 text-xs'
          href='https://github.com/greybirbroman'
          target='_blank'
          rel='noreferrer'
        >
          RomanFedorov
        </a>
        <p className='text-gray-700 text-xs mr-1'>&#169;{year}</p>
      </div>
    </footer>
  );
}
export default Footer;
