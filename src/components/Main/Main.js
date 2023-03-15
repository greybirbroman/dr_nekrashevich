import { motion } from "framer-motion";
import Landing from "../Landing/Landing";
import SocialLinksBar from "../SocialLinksBar/SocialLinksBar";
import Education from "./Education/Education";
import Specialization from "./Specialization/Specialization";
import Instruments from "./Instruments/Instruments";
import Work from "../Work/Work";
import "./Main.css";

function Main() {
  return (
    <main className='flex-col flex-1' id="#t3">
      <Landing />
      <SocialLinksBar
        className={
          "flex justify-center bg-white w-full py-2 sm:py-1 sticky top-0 z-50 backdrop-blur-[3px] bg-opacity-50"
        }
      />
      <section
        id='t1'
        className='grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 gap-4 px-4 md:px-3 sm:px-2 mt-7 mb-7'
        style={{}}
      >
        <Education />
        <Specialization />
        <Instruments />
      </section>
    </main>
  );
}
export default Main;
