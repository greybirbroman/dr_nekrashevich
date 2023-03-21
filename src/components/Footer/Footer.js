
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center z-10'>
      <span className='text-cyan-700 text-xs'>icons by icons8</span>
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
