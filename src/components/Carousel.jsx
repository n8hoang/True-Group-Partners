// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation , Autoplay} from 'swiper/modules';
import natureImg from '../assets/nature.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax'

export default Carousel = () => {
  return (
    <div className=' w-screen'>
        <Swiper
        style={{
        '--swiper-navigation-color': '#6495ED',
        '--swiper-pagination-color': '#6495ED',
        }}
        loop={true}
        speed={600}
        parallax={true}
        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        //   }}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper h-[250px]"
    >
        <SwiperSlide>
            <div className="title mt-5 ml-20 z-10 relative text-3xl w-[250px] h-[100px] flex text-center bg-white/50 text-black" data-swiper-parallax="-300">
               <p className=' pt-3'>Finance & Accouting</p> 
            </div>

            <img src={natureImg} className='absolute z-0 left-0 -top-20 h-auto w-auto bg-cover bg-center'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title z-10 relative  mt-28 ml-auto mr-16 text-3xl w-[250px] h-[100px] flex items-center justify-center bg-white/50 text-black" data-swiper-parallax="-300">
               <p>HR & Payroll</p> 
            </div>

            <img src={natureImg} className='absolute z-0 left-0 -top-20 h-auto w-auto bg-cover bg-center'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title mt-5 ml-20 z-10 relative text-3xl w-[250px] h-[100px] flex items-center justify-center bg-white/50 text-black" data-swiper-parallax="-300">
               <p>Taxes</p> 
            </div>

            <img src={natureImg} className='absolute z-0 left-0 -top-20 h-auto w-auto bg-cover bg-center'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title z-10 relative  mt-28 ml-auto mr-16 text-3xl w-[250px] h-[100px] flex items-center justify-center bg-white/50 text-black" data-swiper-parallax="-300">
               <p>Insurance</p> 
            </div>

            <img src={natureImg} className='absolute z-0 left-0 -top-20 h-auto w-auto bg-cover bg-center'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title mt-5 ml-20 z-10 relative text-3xl w-[250px] h-[100px] flex items-center justify-center bg-white/50 text-black" data-swiper-parallax="-300">
               <p >Call Center</p> 
            </div>

            <img src={natureImg} className='absolute z-0 left-0 -top-20 h-auto w-auto bg-cover bg-center'/>
        </SwiperSlide>
    </Swiper>
  </div>
  );
};