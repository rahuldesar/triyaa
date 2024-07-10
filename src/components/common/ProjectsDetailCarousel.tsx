import { useRef, useState } from 'react';

import { Autoplay, Mousewheel, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// TODO: @Rahul - add Project Cover/Thumbnail
interface ProjectData {
  id: number;
  projectInfo: {
    name: string;
    image: {
      src: string;
    };
    heading: string;
    description: string;
    video: {
      src: string;
    };
  };
}

let projectDetails: ProjectData[] = [
  {
    id: 1,
    projectInfo: {
      name: 'Project 1',
      image: {
        src: 'https://dummyimage.com/1200x500',
      },
      heading: '',
      description: 'Some Sweet short description1',
      video: {
        src: 'dQw4w9WgXcQ',
      },
    },
  },

  {
    id: 2,
    projectInfo: {
      name: 'Project 2',
      image: {
        src: 'https://dummyimage.com/1000x500',
      },
      heading: '',
      description: 'Some Sweet short description2',
      video: {
        src: 'Sfz9jQ3KI5k',
      },
    },
  },

  {
    id: 3,
    projectInfo: {
      name: 'Project 3',
      image: {
        src: 'https://dummyimage.com/800x400',
      },
      heading: '',
      description: 'Some Sweet short description3',
      video: {
        src: 'Z5NoQg8LdDk',
      },
    },
  },

  {
    id: 4,
    projectInfo: {
      name: 'Project 4',
      image: {
        src: 'https://dummyimage.com/1200x600',
      },
      heading: '',
      description: 'Some Sweet short description5',
      video: {
        src: 'u5CVsCnxyXg',
      },
    },
  },

  {
    id: 5,
    projectInfo: {
      name: 'Project 5',
      image: {
        src: 'https://dummyimage.com/1000x500',
      },
      heading: '',
      description: 'Some Sweet short description5',
      video: {
        src: 'Sfz9jQ3KI5k',
      },
    },
  },
];

const scrollToTargetAdjusted = (element) => {
  const headerOffset = 110;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

const ProjectsDetailCarousel = () => {
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
        <div className="px-4 py-12 flex flex-col ring-1 rounded-md">
          <div className="lg:w-5/6 mx-auto">
            <div className="flex flex-col sm:flex-row my-">
              <div className="sm:w-1/3 text-center px-8">
                <img
                  alt="project-thumbnail"
                  className="object-cover object-center h-full w-full"
                  src={currentProject.projectInfo.image.src}
                />
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">{currentProject.projectInfo.description}</p>
              </div>
            </div>
            <div className="rounded-lg h-96 overflow-hidden my-8">
              <div className="relative w-full h-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${currentProject.projectInfo.video.src}`}
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
            className={`h-[11.625rem] overflow-hidden border-2 border-slate-200 active:border-red-800 ${index === currentActiveSlideIndex ? 'border-accent border-4' : ''}`}
            key={`thumb-${item.projectInfo.image.src}-${index}`}
          >
            <img
              src={item.projectInfo.image.src}
              alt={item.projectInfo.image.src}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsDetailCarousel;
