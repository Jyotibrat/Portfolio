// icons
import {RxArrowTopRight} from "react-icons/rx";

// data
const CertificateData = [
    {
        title: 'Fundamentals of Machine Learning and Artificial Intelligence',
        img: '/AWS_Certification_on_Fundamentals_of_AI_and_ML.png',
        link: 'https://www.linkedin.com/in/bindupautra-jyotibrat-a65693289/details/certifications/1718472439026/single-media-viewer/?profileId=ACoAAEYLyy0BAfljEsrWtQM_6WXPdyr3qIRneoQ',
    },
    {
        title: 'IBM Blockchain Developer',
        img: '/IBM BlockChain Certification.jpg',
        link: 'https://courses.vit.skillsnetwork.site/certificates/14bcd4509866421abd78c5a8c93d31a9',
    },
    {
        title: 'Foundations of Cybersecurity',
        img: '/Coursera_Foundations_of_Cybersecurity_by_Google.png',
        link: 'https://www.coursera.org/account/accomplishments/verify/XRRUN7FCMGC4',
    },
    {
        title: 'Introduction to Software Engineering',
        img: '/Coursera_Introduction_to_Software_Engineering_by_IBM.png',
        link: 'https://www.coursera.org/account/accomplishments/verify/PA53HKYY9664',
    },
    {
        title: 'Generative AI: Introduction and Applications',
        img: '/Generative_AI_Introduction_and_Applications.png',
        link: 'https://www.coursera.org/account/accomplishments/verify/4OPQVOI0OSQB',
    },
    {
        title: 'Cloud Computing',
        img: '/Cloud Computing.jpg',
        link: 'https://archive.nptel.ac.in/noc/transcript_verify/?val=D074E5BA90E6EB8E45CA01FB5003434358C6F480C7C0A755CD6AAD9EA7ECDF89',
    },
    {
        title: 'Operating Systems and Systems Programming',
        img: '/Operating System Certification.jpg',
        link: 'https://cursa.app/en/my-certificate/certf131fabbcd17f91ece4150db28f55781/ok',
    },
    {
        title: 'Generative AI: Prompt Engineering Basics',
        img: '/Generative AI Prompt Engineering Basics.jpg',
        link: 'https://www.coursera.org/account/accomplishments/verify/N2MNEP1QSOYO',
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
import Image from 'next/image';

const CertificateSlider = () => {
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
            className='h-[340px] sm:h-[500px]'
        >
            {CertificateData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='bg-[rgba(65,47,123,0.15)] h-[400px] sm:h-[450px] w-full rounded-lg px-6 py-8 flex flex-col justify-between items-center group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>

                        {/* Image */}
                        <div className='w-full h-[200px] flex justify-center items-center'>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={300}
                                height={200}
                                className='rounded-lg object-contain'
                            />
                        </div>

                        {/* Title */}
                        <div className='text-lg font-semibold text-center'>{item.title}</div>

                        {/* Button */}
                        <div>
                            <a
                                href={item.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-dark transition-all duration-300'
                            >
                                See Credential
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CertificateSlider;