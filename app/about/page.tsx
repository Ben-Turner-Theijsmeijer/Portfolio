import { MapPin } from "lucide-react";
// import { motion } from "motion/react"
import * as motion from "motion/react-client"

export default function AboutMe() {
    return (

        <div className="lg:p-15 xl:p-25 flex flex-col md:flex-row items-center justify-between -z-5 p-8 bg-[#f0f5ef] overflow-hidden">
            <div className="md:w-3/5">
                <h1 className="text-5xl font-bold mb-2">Hi, I’m Ben</h1>
                <h2 className="text-gray-400 text-xl mb-4">Creator, Artist, Software Developer</h2>
                <p className="mb-4 text-gray-700">
                I recently graduated from the University of Guelph after completing my
                bachelors in software engineering.
                </p>
                <p className="mb-6 text-gray-700">
                Regardless of the medium, creation is my passion—through code, art,
                games, or otherwise I love to dive in and get my hands dirty.
                </p>
                <div className="flex items-center gap-2 text-gray-800">
                <MapPin size={20} />
                <span>Guelph ON, Canada</span>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0, x:50 }}
                animate={{ opacity: 1, x:0 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 10, // bounce control
                    delay: 0.2,
                }}
                className="md:w-2/5 flex justify-center mt-8 md:mt-0 relative">
                    
                <div className="absolute p-0 md:p-5 w-screen md:-left-70 lg:-left-110 xl:-left-140 2xl:-left-160 rotate-282 accent3">
                </div>
                <div className="absolute p-0 md:p-5 w-screen md:-left-74 lg:-left-114 xl:-left-144 2xl:-left-164 rotate-282 accent1">
                </div>
                <div className="absolute p-0 md:p-10 lg:p-20 xl:p-25 w-screen md:-left-45 lg:-left-75 xl:-left-95 2xl:-left-115 rotate-282 accent3">
                </div>
                <div className="absolute p-0 md:p-10 lg:p-20 xl:p-25 w-screen md:-left-50 lg:-left-80 xl:-left-105 2xl:-left-125 rotate-282 accent2">
                </div>
                <div className="relative w-70 h-70 rounded-full overflow-hidden border-r-8 border-b-8 black shadow-lg">
                <img
                    src="images/Ben PFP.jpg"
                    alt="Ben"
                    className="w-full h-full object-cover"
                />
                </div>
            </motion.div>            
        </div>
    );  
}