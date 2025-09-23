//icons
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

// data
const ProjectSlides = {
  slides: [
    {
      images: [
        {
          title: 'AI Flow',
          path: '/ai flow.png',
          link: 'https://ai-flow-gssoc.vercel.app/',
        },
        {
          title: 'BotMed',
          path: '/BotMed.png',
          link: 'https://botmed.netlify.app/',
        },
        {
          title: 'Token Trove',
          path: '/Token Trove.png',
          link: 'https://token-trove-blockchain-nft.vercel.app/',
        },
        {
          title: 'Git Pulse',
          path: '/Git Pulse.png',
          link: 'https://github.com/Jyotibrat/Git-Pulse',
        },
      ],
    },
    {
      images: [
        {
          title: 'Docx Sum',
          path: '/Docx.png',
          link: 'https://docxsum.netlify.app/',
        },
        {
          title: 'EzView',
          path: '/EzView.png',
          link: 'https://jyotibrat.github.io/EzView/',
        },
        {
          title: 'TrmSCII',
          path: '/TrmSCII.jpg',
          link: 'https://github.com/Jyotibrat/TrmSCII',
        },
        {
          title: 'Simple Banking Desktop App',
          path: '/Bank_Project.png',
          link: 'https://github.com/Adityesh1962/Bank_gui',
        },
      ],
    },
    {
      images: [
        {
          title: 'Floor Planning Generative AI',
          path: '/Floor Planning Gen AI.png',
          link: 'https://github.com/Jyotibrat/A-State-of-Art-Survey-on-Generative-AI-Techniques-for-Floor-Planning',
        },
        {
          title: 'Hand Cricket Simulator',
          path: '/Hand_Cricket_Simulator.png',
          link: 'https://github.com/Jyotibrat/Hand-Cricket-Simulator',
        },
        {
          title: "Neurathon '25 Project",
          path: '/Neurathon.png',
          link: 'https://github.com/Auth0r-C0dez/Neurathon-25',
        },
        {
          title: 'HackByte 3.0 Project',
          path: '/HackByte.png',
          link: 'https://github.com/Jyotibrat/HackByte-3.0',
        },
      ],
    },
    {
      images: [
        {
          title: 'GSOC Innovators Club Website',
          path: '/GSOC.png',
          link: 'https://gsoc-innovators.netlify.app/',
        },
        {
          title: 'Threads of Heritage Website',
          path: '/TOH.png',
          link: 'https://threadsofheritage.netlify.app/',
        },
        {
          title: 'nEigent',
          path: '/nEigent.png',
          link: 'https://n-eigent.vercel.app/',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const ProjectSlider = () => {
  return (
    <div className="h-[420px] mb-8"> {/* Added fixed height container */}
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true, // Added dynamic bullets for better visibility
          el: '.swiper-pagination', // Custom pagination container
        }}
        modules={[Pagination]}
        className='h-full w-full'
      >
        {ProjectSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 h-[400px] p-4'> {/* Added fixed height and padding */}
                {slide.images.map((image, index) => {
                  return (
                    <Link 
                      href={image.link} 
                      key={index}
                      className='aspect-video h-full w-full'
                    >  
                      <div 
                        className='relative rounded-lg overflow-hidden flex items-center justify-center group h-full w-full'
                      >
                        <div className='flex items-center justify-center relative overflow-hidden group w-full h-full'>
                          {/* Image with object-fit */}
                          <Image 
                            src={image.path} 
                            fill={true}
                            className='object-cover'
                            alt={image.title}
                            priority={index === 0}
                          />
                          {/* Overlay gradient */}
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                          {/* title */}
                          <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 text-white z-10'>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              <div className='delay-100'>VISIT</div>
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                {image.title}
                              </div>
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
        {/* Custom pagination container */}
        <div className="swiper-pagination !bottom-2"></div>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;