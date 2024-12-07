import ServiceSlider from '../../components/Milestone';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Opensource = () => {
    return (
        <div className='h-full bg-primary/30 py-36 flex items-center'>
            <Circles />
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-0 items-center'>
                    {/* Title */}
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center'>
                        Milestones<span className='text-accent'>.</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="text-lg text-gray-400 text-center max-w-xl">
                        Here are some of my personal Milestones that I have achieved.
                    </motion.p>

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
