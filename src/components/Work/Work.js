import { useState } from "react";
import "./Work.css";
import { motion, AnimatePresence } from "framer-motion";
import { container, item } from "../../utils/animations";
import workImage from "../../images/work-image.jpg";

function Work() {
  const [openMap, setOpenMap] = useState(false);

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className='w-full h-full flex items-center justify-center pb-28 px-2 md:px-10 lg:px-10'
      >
        <img
          src={workImage}
          className='absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover w-[100%] h-screen'
          alt='Изображение зубной щетки'
        />
        <div className='flex flex-col w-full'>
          <button
            onClick={() => setOpenMap(!openMap)}
            type='button'
            className='bg-red-600 bg-opacity-80 w-fit rounded-full text-white font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 px-1 py-1 self-end mb-2'
          >
            {openMap ? "Закрыть" : "Я.Карта"}
          </button>
          {openMap ? (
            <div className='work__map'>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <a
                  href='https://yandex.ru/maps/org/denteriya/149051823874/?utm_medium=mapframe&utm_source=maps'
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "0px",
                  }}
                >
                  Дентерия
                </a>
                <a
                  href='https://yandex.ru/maps/2/saint-petersburg/category/dental_clinics/184106132/?utm_medium=mapframe&utm_source=maps'
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "14px",
                  }}
                >
                  Стоматологическая клиника в Санкт‑Петербурге
                </a>
                <iframe
                  className='w-full h-[400px]'
                  src='https://yandex.ru/map-widget/v1/?ll=30.294515%2C59.955947&mode=poi&poi%5Bpoint%5D=30.294308%2C59.955976&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D149051823874&z=19.05'
                  frameBorder='1'
                  allowFullScreen='true'
                  style={{ position: "relative" }}
                  title='map'
                ></iframe>
              </div>
            </div>
          ) : (
            <motion.ul
              variants={container}
              initial='hidden'
              animate='show'
              className='space-y-2 flex flex-col'
            >
              <motion.li variants={item}>
                <div className='flex items-center'>
                  <h3 className='font-semibold w-fit mr-3 text-cyan-700'>
                    Адрес
                  </h3>
                </div>

                <p className='font-mono text-gray-800'>
                  197198, Санкт-Петербург, ул. Пионерская, д. 8
                </p>
              </motion.li>
              <motion.li variants={item} className='work__item'>
                <h3 className='font-semibold w-fit text-cyan-700'>E-mail</h3>
                <p className='font-mono text-gray-800'>clinic@denteria.ru</p>
              </motion.li>
              <motion.li variants={item} className='work__item'>
                <h3 className='font-semibold w-fit text-cyan-700'>Телефон</h3>
                <p className='font-mono text-gray-800'>+7(812)209-1607</p>
              </motion.li>
              <motion.li variants={item} className='work__item'>
                <h3 className='font-semibold w-fit text-cyan-700'>
                  Режим работы
                </h3>
                <p className='font-mono text-gray-800'>Пн-Вс 09:00-21:00</p>
              </motion.li>
              <motion.li variants={item} className='work__item'>
                <h3 className='font-semibold text-gray-800'>
                  Связаться с администратором
                </h3>
                <div className='flex'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://api.whatsapp.com/send?phone=79215863777'
                    className='work__item-link work__item-link_whatsapp transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
                  >
                    {""}
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://t.me/+79215863777'
                    className='work__item-link work__item-link_telegram transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
                  >
                    {""}
                  </a>
                </div>
              </motion.li>
            </motion.ul>
          )}
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
export default Work;
