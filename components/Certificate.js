import { motion } from 'framer-motion';
import Image from 'next/image';

// data
const CertificateData = [
  {
    title: 'Fundamentals of Machine Learning and Artificial Intelligence',
    img: '/AWS_Certification_on_Fundamentals_of_AI_and_ML.png',
    link: 'https://www.linkedin.com/in/bindupautra-jyotibrat-a65693289/details/certifications/1718472439026/single-media-viewer/?profileId=ACoAAEYLyy0BAfljEsrWtQM_6WXPdyr3qIRneoQ',
    issuer: 'AWS',
    date: 'March 2024'
  },
  {
    title: 'Foundations of Cybersecurity',
    img: '/Coursera_Foundations_of_Cybersecurity_by_Google.png',
    link: 'https://www.coursera.org/account/accomplishments/verify/XRRUN7FCMGC4',
    issuer: 'Google via Coursera',
    date: 'February 2024'
  },
  {
    title: 'Introduction to Software Engineering',
    img: '/Coursera_Introduction_to_Software_Engineering_by_IBM.png',
    link: 'https://www.coursera.org/account/accomplishments/verify/PA53HKYY9664',
    issuer: 'IBM via Coursera',
    date: 'January 2024'
  },
  {
    title: 'Generative AI: Introduction and Applications',
    img: '/Generative_AI_Introduction_and_Applications.png',
    link: 'https://www.coursera.org/account/accomplishments/verify/4OPQVOI0OSQB',
    issuer: 'Coursera',
    date: 'December 2023'
  },
  {
    title: 'Learn Java',
    img: '/bjyotibrat_Learn_Java.png',
    link: 'https://www.codechef.com/certificates/public/d6a4d6f',
    issuer: 'CodeChef',
    date: 'November 2023'
  },
  {
    title: 'Learn C++',
    img: '/bjyotibrat_Learn_Cpp_1.png',
    link: 'https://www.codechef.com/certificates/public/1154e00',
    issuer: 'CodeChef',
    date: 'October 2023'
  },
  {
    title: 'Learn Python',
    img: '/bjyotibrat_Learn_Python_1.png',
    link: 'https://www.codechef.com/certificates/public/9437588',
    issuer: 'CodeChef',
    date: 'September 2023'
  },
];

const CertificateSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {CertificateData.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-[rgba(65,47,123,0.15)] rounded-xl overflow-hidden hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
        >
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative h-48 w-full">
              <Image
                src={cert.img}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="bg-accent hover:bg-accent/80 text-white px-6 py-2 rounded-full transition-all duration-300">
                  View Certificate
                </button>
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default CertificateSlider;