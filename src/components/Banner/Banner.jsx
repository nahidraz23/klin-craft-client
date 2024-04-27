// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full lg:h-[calc(100vh-86px)]">
                        <img src="https://i.postimg.cc/kMp9vnpW/4.jpg" alt="" className="w-full lg:h-[calc(100vh-86px)]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full lg:h-[calc(100vh-86px)]">
                        <img src="https://i.postimg.cc/gjPVC9Ms/2.jpg" alt="" className="w-full lg:h-[calc(100vh-86px)]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full lg:h-[calc(100vh-86px)]">
                        <img src="https://i.postimg.cc/QtSN31mz/3.jpg" alt="" className="w-full lg:h-[calc(100vh-86px)]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full lg:h-[calc(100vh-86px)]">
                        <img src="https://i.postimg.cc/sgSV2tK7/5.jpg" alt="" className="w-full lg:h-[calc(100vh-86px)]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full lg:h-[calc(100vh-86px)]">
                        <img src="https://i.postimg.cc/q7x4syP7/1.jpg" alt="" className="w-full lg:h-[calc(100vh-86px)]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full lg:h-[calc(100vh-86px)]">
                        <img src="https://i.postimg.cc/9MXVJz2Y/6.jpg" alt="" className="w-full lg:h-[calc(100vh-86px)]" />
                    </div>
                </SwiperSlide>
            </Swiper>






        </div>
    );
};

export default Banner;