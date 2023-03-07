import "./Work.css";
import denteriaLogo from '../../images/Denteria_logo_horizont.png';

function Work() {

  return (
    <section id='t2' className='work bg-gradient-to-r from-white to-cyan-500 py-4 px-4'>
      <h2 className='work__title text-center text-2xl font-semibold uppercase tracking-wider text-white'>Записаться на прием</h2>
      <div className='work__container flex flex-col'>
        <div className='work__column'>
          <ul className='work__list'>
            <li className='work__item'>
              <h3 className='work__item text-cyan-500 sm: text-lg py-2 font-semibold'>Адресс</h3>
              <p className='work__item-text text-gray-700'>
                197198, Санкт-Петербург, ул. Пионерская, д. 8
              </p>
            </li>
            <li className='work__item'>
              <h3 className='work__item text-cyan-500 sm: text-lg py-2 font-semibold'>E-mail</h3>
              <p className='work__item-text text-gray-700'>clinic@denteria.ru</p>
            </li>
            <li className='work__item'>
              <h3 className='work__item text-cyan-500 sm: text-lg py-2 font-semibold'>Телефон</h3>
              <p className='work__item-text text-gray-700'>+7(812)209-1607</p>
            </li>
            <li className='work__item'>
              <h3 className='work__item text-cyan-500 sm: text-lg py-2 font-semibold'>Режим работы</h3>
              <p className='work__item-text text-gray-700'>Пн-Вс 09:00-21:00</p>
            </li>
            <li className='work__item'>
              <h3 className='work__item text-cyan-500 sm: text-lg py-2 font-semibold'>Связаться с администратором</h3>
              <div className="work__item-container flex pb-4">
              <a href='#' className='work__item-link work__item-link_whatsapp mr-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'></a>
              <a href='#' className='work__item-link work__item-link_telegram transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'></a>
              </div>
            </li>
          </ul>
        </div>
        <div className='work__map'>
          <div style={{position:'relative', overflow:'hidden'}}>
            <a
              href='https://yandex.ru/maps/org/denteriya/149051823874/?utm_medium=mapframe&utm_source=maps'
              style={{color:'#eee', fontSize:'12px', position:'absolute', top:'0px'}}
            >
              Дентерия
            </a>
            <a
              href='https://yandex.ru/maps/2/saint-petersburg/category/dental_clinics/184106132/?utm_medium=mapframe&utm_source=maps'
              style={{color:'#eee', fontSize:'12px', position:'absolute',top:'14px'}}
            >
              Стоматологическая клиника в Санкт‑Петербурге
            </a>
            <iframe
              src='https://yandex.ru/map-widget/v1/?ll=30.294515%2C59.955947&mode=poi&poi%5Bpoint%5D=30.294308%2C59.955976&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D149051823874&z=19.05'
              maxWidth='600'
              width='100%'
              height='400'
              frameBorder='1'
              allowFullScreen='true'
              style={{position:'relative'}}
              title='map'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Work;
