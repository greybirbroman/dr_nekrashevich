function SocialLink({ link, title }) {
  return (
    <a 
    className='w-[61px] h-[56px] flex justify-center items-center' href={link} target='_blank' rel='noreferrer' title={title}>
      {""}
    </a>
  );
}
export default SocialLink;
