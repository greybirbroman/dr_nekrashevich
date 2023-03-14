import SocialLinksBar from "../SocialLinksBar/SocialLinksBar";
import Work from "../Work/Work";
import bgImage from "../../images/footer-image.jpg";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id='t2'
      className='pt-4 px-4 bg-opacity-10 relative'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Work />
      <SocialLinksBar className={"flex justify-center w-full py-2 sm:py-1"} />
      <div className='flex flex-col items-center justify-center'>
        <span className='text-cyan-700 text-sm'>icons by icons8</span>
        <a
          className='text-gray-700 text-sm'
          href='https://github.com/greybirbroman'
          target='_blank'
          rel='noreferrer'
        >
          Created by RomanFedorov
        </a>
        <p className='text-gray-700 text-sm mr-1'>&#169;{year}</p>
      </div>
    </footer>
  );
}
export default Footer;
