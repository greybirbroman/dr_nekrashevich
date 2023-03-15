import { useState } from "react";
import "./Work.css";

function Work() {
  const [openMap, setOpenMap] = useState(false);

  return (
    <div className='flex-col'>
      <div>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setOpenMap(!openMap)}
              type='button'
              className='absolute left-[80px] top-[18px] bg-red-600 bg-opacity-90 w-fit py-1 px-2 rounded-3xl text-white font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
            >
              {openMap ? "Закрыть" : "Я.Карта"}
            </button>

            <h3 className='py-1 text-gray-700 font-semibold border-b-2 border-gray-100 border-dashed w-fit'>Адрес</h3>

            <p className='text-cyan-700 font-mono'>
              197198, Санкт-Петербург, ул. Пионерская, д. 8
            </p>
          </li>
          <li className='work__item'>
            <h3 className='text-gray-700 py-1 font-semibold border-b-2 border-gray-100 border-dashed w-fit'>E-mail</h3>
            <p className='text-cyan-700 font-mono'>clinic@denteria.ru</p>
          </li>
          <li className='work__item'>
            <h3 className='text-gray-700 py-1 font-semibold border-b-2 border-gray-100 border-dashed w-fit'>Телефон</h3>
            <p className='text-cyan-700 font-mono'>+7(812)209-1607</p>
          </li>
          <li className='work__item'>
            <h3 className='text-gray-700 py-1 font-semibold border-b-2 border-gray-100 border-dashed w-fit'>
              Режим работы
            </h3>
            <p className='text-cyan-700 font-mono'>Пн-Вс 09:00-21:00</p>
          </li>
          <li className='work__item'>
            <div className='work__item-container flex items-center space-y-0'>
              <h3 className='text-gray-700 font-semibold py-1'>
                Связаться с администратором
              </h3>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://api.whatsapp.com/send?phone=79215863777'
                className='work__item-link work__item-link_whatsapp transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-3'
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
          </li>
        </ul>
      </div>
      {openMap && (
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
              src='https://yandex.ru/map-widget/v1/?ll=30.294515%2C59.955947&mode=poi&poi%5Bpoint%5D=30.294308%2C59.955976&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D149051823874&z=19.05'
              width='100%'
              height='400'
              frameBorder='1'
              allowFullScreen='true'
              style={{ position: "relative" }}
              title='map'
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
export default Work;
