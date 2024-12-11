// icons
import { GrCertificate } from "react-icons/gr";

import { RiOpenSourceLine } from "react-icons/ri";

import { FaTools } from "react-icons/fa";

import { TbTargetArrow } from "react-icons/tb";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxArrowTopRight
} from "react-icons/rx";


// data
const AchievementsData = [
  {
    icon: <GrCertificate />,
    title: 'Certifications',
    description: 'Recognized achievements in technical fields.',
    link: '/Certifications'
  },
  {
    icon: <RiOpenSourceLine />,
    title: 'Open-Source',
    description: 'Contributions to open-source projects globally.',
    link: '/OpenSource'
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building diverse projects across technologies.',
    link: '/projects'
  },
  {
    icon: <FaTools />,
    title: 'Technical-Roles',
    description: 'Experience in various technical leadership roles.',
    link: '/TechnicalRoles'
  },
  {
    icon: <TbTargetArrow />,
    title: 'Milestones',
    description: 'Key moments of success and growth.',
    link: '/Milestones'
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// next link
import Link from "next/link";

const AchievementsSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {AchievementsData.map((item, index) => {
        const SlideContent = (
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex flex-col gap-4 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icons */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* title & desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        );

        return (
          <SwiperSlide key={index}>
            {item.link ? (
              <Link href={item.link}>{SlideContent}</Link>
            ) : (
              SlideContent
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AchievementsSlider;