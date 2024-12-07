import ServiceSlider from '../../components/Opensource';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Opensource = () => {
    return (
        <div className='h-full bg-primary/30 py-36 flex items-center'>
        <Circles />
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-8 items-center'>
            {/* Title */}
            <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 text-center'>
                My OpenSource Contributions<span className='text-accent'>.</span>
            </motion.h2>
            {/* Slider */}
            <motion.div
                variants={fadeIn('down', 0.6)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='w-full'>
                <ServiceSlider />
            </motion.div>
            </div>
        </div>
        <Bulb />
        </div>
    );
};

export default Opensource;