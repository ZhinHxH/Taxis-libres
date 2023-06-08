import './sect4.css';
import { Swiper, SwiperSlide } from "swiper/react";
import IBM from '../../../src/assets/images/ibm-logo-png.png';
import HUAWEI from '../../../src/assets/images/huawei-logo.png';
import UNIANDES from '../../../src/assets/images/Uniandes.png';
import PLATZI from '../../../src/assets/images/platzi-logo.png';
import EFECTY from '../../../src/assets/images/logo-efecty.png';
import ROSARIO from '../../../src/assets/images/logo-rosario.png';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { Autoplay } from 'swiper';


function Sect4() {
  return (
    <section id='section-4' className='flex flex-col justify-center items-center h-screen gap-10'>
      <h1 className='text-titles font-semibold'>Nuestros patrocinadores</h1>
      <div className='h-72 w-5/6'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={IBM} alt='Logo de las empresas patrocinadoras' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HUAWEI} alt='Logo de las empresas patrocinadoras'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={UNIANDES} alt='Logo de las empresas patrocinadoras' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PLATZI} alt='Logo de las empresas patrocinadoras' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={EFECTY} alt='Logo de las empresas patrocinadoras' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ROSARIO} alt='Logo de las empresas patrocinadoras' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Sect4