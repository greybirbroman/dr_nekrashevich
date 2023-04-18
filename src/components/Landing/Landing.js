import { AnimatePresence } from 'framer-motion';
import LandingImage from '../../images/main-image.jpg';
import SocialLinksBar from '../SocialLinksBar/SocialLinksBar';
import Footer from '../Footer/Footer';

function Landing() {
  const experience = new Date().getFullYear() - 2013;

  return (
    <>
      <AnimatePresence>
        <main
          className='flex flex-col justify-center lg:items-end px-5 space-y-3 lg:space-y-5 text-center pb-24'
        >
          <img
            src={LandingImage}
            className='absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover m-w-screen w-[100%] h-[100%]'
            alt='Зубные щетки, зубные щетки из дерева, стоматолог'
          />
          <div className='space-y-2 lg:space-y-4'>
            <h1
              className='text-gray-700 text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl'
            >
              Некрашевич <br /> Марина Сергеевна
            </h1>
            <h2
              className='font-light lg:font-normal text-gray-500 leading-4 lg:leading-5 text-sm lg:text-lg'
            >
              Врач-стоматолог-терапевт /<br /> врач-стоматолог детский
              <br />
              <span className='font-mono text-cyan-700'>
                Стаж {experience} лет
              </span>
            </h2>
            <SocialLinksBar
              className={'flex justify-center w-full lg:justify-center'}
            />
          </div>
        </main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
export default Landing;
