import Education from './Education/Education';
import Specialization from './Specialization/Specialization';
import Instruments from './Instruments/Instruments';


function About() {
  return (
      <section
        id='about'
        className='px-2 md:px-5 lg:px-10 py-24 md:py-14 sm:py-10'
      >
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-gray-700 text-md md:text-lg lg:text-xl'>
          <Specialization />
          <Instruments />
          <Education />
        </ul>
      </section>
  );
}
export default About;
