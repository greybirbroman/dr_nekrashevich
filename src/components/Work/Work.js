import './Work.css';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { container, item } from '../../utils/animations';
import { adressList } from '../../utils/const';
import SocialLinksBar from '../SocialLinksBar/SocialLinksBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#06b6d4',
    },
    secondary: {
      main: '#11cb5f',
    },
    maps: {
      main: '#b00000'
    }
  },
});

function Work() {

  const [openMap, setOpenMap] = useState(false)

  function toggleMap() {
    setOpenMap(!openMap)
  }

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className='w-full flex-1 px-10 py-10 md:px-5 sm:px-3 md:py-10 sm:py-5 bg-slate-100 relative z-10'
      >
        <div
          
          className='max-w-xl bg-white py-2 px-2 rounded-xl shadow-xl'
        >
          <h3 className='text-gray-700 font-black text-[30px]'>Записаться.</h3>
          <p className='text-[18px] sm:text-[16px] font-normal text-gray-700'>
            {' '}
            Для записи на консультацию по всем интересующим вопросам напишите
            сообщение в любой удобной для вас социальной сети
          </p>
          <SocialLinksBar className='flex justify-end' />
        </div>

        <div className='flex flex-col gap-3 w-full'>
          <motion.ul
            variants={container}
            initial='hidden'
            animate='show'
            className='space-y-2 flex flex-col self-end w-full lg:w-fit mt-3'
          >
            {adressList.map((listItem) => (
              <motion.li variants={item} key={listItem.id}>
                <h3 className='font-bold italic w-fit text-[18px] text-gray-700'>
                  {listItem.title}
                </h3>
                <p className='font-sans text-gray-700'>{listItem.text}</p>
              </motion.li>
            ))}
            <div className='flex gap-2'>
              <ThemeProvider theme={theme}>
              <Button
                target='_blank'
                rel='noreferrer'
                href='https://api.whatsapp.com/send?phone=79215863777'
                className=''
                variant="outlined"
                color='secondary'
              >
                whatsapp
              </Button>
              <Button
                target='_blank'
                rel='noreferrer'
                href='https://t.me/+79215863777'
                className=''
                variant="outlined"
              >
                Telegram
              </Button>
              <Button
                className=''
                variant="outlined"
                color='maps'
                onClick={toggleMap}
              >
                Яндекс.Карта
              </Button>
              </ThemeProvider>
            </div>
          </motion.ul>
          {openMap &&
          <div className='work__map'>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <a
                href='https://yandex.ru/maps/org/denteriya/149051823874/?utm_medium=mapframe&utm_source=maps'
                style={{
                  color: '#eee',
                  fontSize: '12px',
                  position: 'absolute',
                  top: '0px',
                }}
              >
                Дентерия
              </a>
              <a
                href='https://yandex.ru/maps/2/saint-petersburg/category/dental_clinics/184106132/?utm_medium=mapframe&utm_source=maps'
                style={{
                  color: '#eee',
                  fontSize: '12px',
                  position: 'absolute',
                  top: '14px',
                }}
              >
                Стоматологическая клиника в Санкт‑Петербурге
              </a>
              <iframe
                className='rounded-xl h-[310px] w-full'
                src='https://yandex.ru/map-widget/v1/?ll=30.294515%2C59.955947&mode=poi&poi%5Bpoint%5D=30.294308%2C59.955976&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D149051823874&z=19.05'
                frameBorder='1'
                allowFullScreen='true'
                style={{ position: 'relative' }}
                title='map'
              ></iframe>
            </div>
          </div>
        }
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
export default Work;
