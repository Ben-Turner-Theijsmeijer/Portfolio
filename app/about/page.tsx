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

            <div className="md:w-2/5 flex justify-center mt-8 md:mt-0 relative">
                    
                {/* <motion.div 
                initial={{ opacity: 0, x:70 }}
                animate={{ opacity: 1, x:0 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2,
                }}
                className="Stripe">
                </motion.div> */}

                <div className="Stripe absolute inset-0 flex justify-center items-center">
                    <div className="absolute rotate-[260deg] md:rotate-[12deg] accent3 h-500 w-1/15 translate-y-[-3.5%] md:translate-y-[-18%]" />
                    <div className="absolute rotate-[260deg] md:rotate-[12deg] accent1 h-500 w-1/15 translate-y-[-4%] md:translate-y-[-23%]" />
                    <div className="absolute rotate-[260deg] md:rotate-[12deg] accent3 h-500 w-2/5 translate-y-[2%] md:translate-y-[25%]" />
                    <div className="absolute rotate-[260deg] md:rotate-[12deg] accent2 h-500 w-2/5 translate-y-[1%] md:translate-y-[20%]" />
                </div>


                <div className="relative w-60 h-60 sm:w-70 sm:h-70 rounded-full overflow-hidden border-r-8 border-b-8 black shadow-lg">
                <img
                    src="images/Ben PFP.jpg"
                    alt="Ben"
                    className="w-full h-full object-cover"
                />
                </div>
            </div>            
        </div>
    );  
}