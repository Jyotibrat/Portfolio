import TechnicalRoles from '../../components/TechnicalRoles';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const TechRoles = () => {
    return (
        <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
            <div className="flex flex-col gap-y-4 items-center">
            {/* Title */}
            <motion.h2
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 text-center"
            >
                Technical Roles<span className="text-accent">.</span>
            </motion.h2>
            {/* Introductory Sentence */}
            <motion.p
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-white/70 text-center max-w-md"
            >
                A summary of my journey in technical roles and contributions.
            </motion.p>
            {/* Roles Section */}
            <motion.div
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full"
            >
                <TechnicalRoles />
            </motion.div>
            </div>
        </div>
        <Bulb />
        </div>
    );
};

export default TechRoles;
