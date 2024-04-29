import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, EffectFade, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

const slides = [
  {
    src: 'https://incessantrain.com/public/storage/sliders/GVN101_065 (2)_1680001276.jpg',
    alt: 'test',
  },
  {
    src: 'https://incessantrain.com/public/storage/sliders/JKRY_001_1676014385.jpg',
    alt: 'test',
  },
  {
    src: 'https://images.unsplash.com/photo-1515133997814-e6460be24073?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'test',
  },
  {
    src: 'https://images.unsplash.com/photo-1514900065139-77d4e95afc1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'test',
  },
  {
    src: 'https://incessantrain.com/public/storage/sliders/StrangerThings_001_1676014364.jpg',
    alt: 'test',
  },
  {
    src: 'https://incessantrain.com/public/storage/sliders/HOuse of the dragon_001_1675936310.jpeg',
    alt: 'test',
  },
  {
    src: 'https://images.unsplash.com/photo-1515133997814-e6460be24073?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'test',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png',
    alt: 'test',
  },
  {
    src: 'https://images.unsplash.com/photo-1514900065139-77d4e95afc1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'test',
  },
];

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false,
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
        {slides.map((slide) => (
          <SwiperSlide>
            <img src={slide.src} className="h-full w-full object-cover " alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
