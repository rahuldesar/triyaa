import { useRef, useState } from 'react';

import { Autoplay, Mousewheel, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export interface SimplifiedProjectData {
  name: string;
  heading: string;
  thumbnailSrc: string;
  alt: string;
  description: string;
  youtubeId: string;
}

// -- :INFO OLDER --
//interface ProjectData {
//  id: number;
//  projectInfo: {
//    name: string;
//    image: {
//      src: string;
//    };
//    heading: string;
//    description: string;
//    video: {
//      src: string;
//    };
//  };
//}

const scrollToTargetAdjusted = (element) => {
  const headerOffset = 110;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

const ProjectsDetailCarousel = ({ projectDetails }: { projectDetails: SimplifiedProjectData[] }) => {
  let [currentActiveSlideIndex, setCurrentActiveSlideIndex] = useState(0);
  let [currentProject, setCurrentProject] = useState(projectDetails[0]);
  const projectContentRef = useRef(null);

  const handleScroll = () => {
    if (projectContentRef.current) {
      scrollToTargetAdjusted(projectContentRef.current);
    }
  };

  return (
    <div className="themes-carousel" ref={projectContentRef}>
      <div>
        <div className="flex flex-col rounded-md px-4 py-12 ring-1">
          <div className="mx-auto lg:w-5/6">
            <div className="my- flex flex-col sm:flex-row">
              <div className="px-8 text-center sm:w-1/3">
                <img
                  alt="project-thumbnail"
                  className="h-full w-full object-cover object-center"
                  src={currentProject.thumbnailSrc}
                />
              </div>
              <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
                <p className="mb-4 text-lg leading-relaxed">{currentProject.description}</p>
              </div>
            </div>
            <div className="my-8 h-96 overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${currentProject.youtubeId}`}
                  title="YouTube Embed Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        breakpoints={{
          // when window width is >= 0px, (also, 640px = sm, from tailwind docs)
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Thumbs, Mousewheel]}
        onClick={(swiper) => {
          setCurrentProject(projectDetails[swiper.clickedIndex]);
          setCurrentActiveSlideIndex(swiper.clickedIndex);
          handleScroll();
        }}
        className="mt-12"
      >
        {projectDetails.map((item, index) => (
          <SwiperSlide
            className={`h-[11.625rem] overflow-hidden ${index === currentActiveSlideIndex ? 'border-4 border-accent' : 'border-2 border-slate-200'}`}
            key={`thumb-${item.thumbnailSrc}-${index}`}
          >
            <img src={item.thumbnailSrc} alt={item.thumbnailSrc} className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsDetailCarousel;
