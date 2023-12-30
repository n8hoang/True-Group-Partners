// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation , Autoplay} from 'swiper/modules';
import natureImg from '../assets/nature.webp'
import workImg from '../assets/work.webp'
import financeImg from '../assets/finance.webp'
import officeImg from '../assets/office.webp'
import stocksImg from '../assets/stocks.webp'

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
        speed={1400}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation, Autoplay]}
        className="mySwiper sm:h-[250px] md:h-[300px] lg:h-[400px]"
    >
        <SwiperSlide>
            <div className="title mt-5 ml-20 z-10 relative text-3xl w-[150px] h-[100px] md:w-[200px] flex text-center bg-white/50 text-black rounded-xl md:mt-10" data-swiper-parallax="-300">
               <p className=' pt-3'>Finance & Accouting</p> 
            </div>

            <img src={natureImg} className='absolute z-0 left-0 -top-10 sm:-top-20 h-auto w-auto bg-cover bg-center lg:-top-48 xl:-top-72'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title z-10 relative mt-20 ml-auto mr-16 text-3xl w-[150px] h-[100px] md:w-[250px] flex items-center justify-center bg-white/50 text-black rounded-xl md:mt-36 lg:mt-60 " data-swiper-parallax="-300">
               <p>HR & Payroll</p> 
            </div>

            <img src={workImg} className='absolute z-0 left-0 -top-10 sm:-top-20 h-auto w-auto bg-cover bg-center'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title mt-5 ml-20 z-10 relative text-3xl  w-[150px] h-[100px] md:w-[250px] flex items-center justify-center bg-white/50 rounded-xl text-black" data-swiper-parallax="-300">
               <p>Taxes</p> 
            </div>

            <img src={financeImg} className='absolute z-0 left-0 top-0 h-auto w-auto bg-cover bg-center'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title z-10 relative mt-20 mb-8 ml-auto mr-16 text-3xl  w-[150px] h-[100px] md:w-[250px] flex items-center justify-center bg-white/50 rounded-xl text-black md:mt-36 lg:mt-60" data-swiper-parallax="-300">
               <p>Insurance</p> 
            </div>

            <img src={stocksImg} className='absolute z-0 left-0 -top-10 h-auto w-auto bg-cover bg-center xl:-top-80'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title mt-5 ml-20 z-10 relative text-3xl  w-[150px] h-[100px] md:w-[250px] flex items-center justify-center bg-white/50 rounded-xl text-black" data-swiper-parallax="-300">
               <p >Call Center</p> 
            </div>

            <img src={officeImg} className='absolute z-0 left-0 -top-10 sm:-top-20 h-auto w-auto bg-cover bg-center lg:-top-60 2xl:-top-[550px]'/>
        </SwiperSlide>
    </Swiper>
  </div>
  );
};