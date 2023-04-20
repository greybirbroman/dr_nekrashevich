function SocialLink({ link, title, icon }) {
  return (
    <li
      style={{
        width: '61px',
        height: '56px', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: '40px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
      className={`rounded ${icon} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 hover:cursor-pointer`}
    >
      <a
        className='w-[61px] h-[56px] flex justify-center items-center'
        href={link}
        target='_blank'
        rel='noreferrer'
        title={title}
      >
        {''}
      </a>
    </li>
  );
}
export default SocialLink;
