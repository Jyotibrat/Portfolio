//icons
import { BsArrowRight } from 'react-icons/bs';

//next image
import Image from 'next/image';

//next link
import Link from 'next/link';

// data
const ProjectSlides = {
  slides: [
    {
      images: [
        {
          title: 'Simulation of OS algorithms',
          path: '/SimuOSProject.png',
          link: '',
        },
        {
          title: 'School App using Java',
          path: '/Simple_School_App.png',
          link: 'https://github.com/Jyotibrat/Simple-School-App',
        },
        {
          title: 'Simple Bank System GUI using Python Tkinter',
          path: '/Bank_Project.png',
          link: 'https://github.com/Adityesh1962/Bank_gui',
        },
        {
          title: 'Birthday Invitation Website',
          path: '/Bday_Project.png',
          link: 'https://github.com/Jyotibrat/Birthday-Invite-Website-Project',
        },
      ],
    },
    {
      images: [
        {
          title: 'Hand Cricket Game using Java',
          path: '/Hand_Cricket_Game.png',
          link: 'https://github.com/Jyotibrat/Hand-Cricket-Simulator',
        },
        {
          title: 'Urban Planning Generative AI',
          path: '/Urban_Planning_GenAI.png',
          link: 'https://github.com/Jyotibrat/Urban-Planning-Gen-AI',
        },
        {
          title: 'Image Generation Website Front',
          path: '/Gen_AI_Front_end.png',
          link: '',
        },
        {
          title: 'Calculator using Python',
          path: '/Calculator_Project.png',
          link: 'https://github.com/Jyotibrat/Calculator',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const ProjectSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {ProjectSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <Link href={image.link} key={index}>  
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                    >
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* Image */}
                        <Image src={image.path} width={500} height={300} alt='' />
                        {/* Overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>
                              SEE
                            </div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectSlider;