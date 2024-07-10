import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, EffectFade, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

export interface SlideProp {
  src: string;
  alt: string;
}

export default function Carousel({ slides }: { slides: SlideProp[] }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          // pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        loop={true}
        effect={'fade'}
        // pagination={{
        //   clickable: true,
        // }}
        mousewheel={{
          forceToAxis: true,
        }}
        scrollbar={{ draggable: false }}
        modules={[Autoplay, Mousewheel, EffectFade, Scrollbar]}
        className="mySwiper mb-8 h-[15.625rem] sm:h-[40.75rem]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <img src={slide.src} className="h-full w-full object-cover " alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
