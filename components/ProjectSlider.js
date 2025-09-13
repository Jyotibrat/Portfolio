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
          title: 'GSOC Innovators Club Official Website',
          path: '/GSOC.png',
          link: 'https://gsoc-innovators.netlify.app/',
        },
        {
          title: 'Threads of Heritage Event Website',
          path: '/TOH.png',
          link: 'https://threadsofheritage.netlify.app/',
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