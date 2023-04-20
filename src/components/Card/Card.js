import React from 'react';
import CardTitle from '../CardTitle/CardTitle';
import icon from '../../images/list-icon.png';
import { sectionListVariants } from '../../utils/animations';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ title, list, flex }) => {
  return (
    <AnimatePresence>
      <li className='shadow-xl rounded-2xl py-3 px-3 w-full h-full'>
        <CardTitle title={title} />
        <div className='flex flex-col items-center'></div>
        <ul className='flex-col font-normal sm:space-y-2 md:space-y-3 lg:space-y-4 tracking-tight lg:tracking-normal'>
          {list.map((item, index) => (
            <motion.li
              key={item.id}
              variants={sectionListVariants}
              initial='hidden'
              animate='visible'
              custom={index}
              className={flex}
            >
              {item.year && (
                <div className='w-20 rounded-xl bg-cyan-700 text-center font py-2 px-2 text-white'>
                  {item.year}
                </div>
              )}
              {title !== 'Образование' && (
                <img
                  className='w-[20px]'
                  src={icon}
                  alt='Иконка зуба, зуб, стоматолгия'
                />
              )}
              <div className={flex}>
                <p className='pl-2'>
                  {item.text}
                  {item.span && title !== 'Образование' && (
                    <span className='text-cyan-700 font-mono text-sm md:text-md lg:text-lg pl-2'>
                      {item.span}
                    </span>
                  )}
                </p>
                {title === 'Образование' && (
                  <span className='text-cyan-700 font-mono text-sm md:text-md lg:text-lg pl-2'>
                    {item.span}
                  </span>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </li>
    </AnimatePresence>
  );
};

export default Card;
