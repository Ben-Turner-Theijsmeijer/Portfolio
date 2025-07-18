import { MapPin } from "lucide-react";
import { animate } from "motion";
import * as motion from "motion/react-client"

export default function AboutMe() {
  
    return (
        <div className="w-full max-w-[1600px] mx-auto bg-[var(--background)]">
            <div className="py-25 lg:px-15 xl:px-25 flex flex-col md:flex-row items-center justify-around -z-5 p-8 overflow-hidden">
                <div className="md:w-3/5">
                    <h1 className="text-5xl sm:text-7xl font-bold mb-2">Hi, <span className="text-[var(--accent2)]">I’m Ben</span></h1>
                    <h2 className="text-2xl sm:text-3xl text-gray-400 mb-4">Creator, Artist, Software Developer</h2>
                    <p className="text-base sm:text-lg mb-4 text-gray-700">
                    I am a recent graduate from the University of Guelph with a bachelor's degree
                    in software engineering.
                    </p>
                    <p className="text-base sm:text-lg mb-6 text-gray-700">
                    Regardless of the medium, creation is my passion—through code, art,
                    games, or otherwise I love to dive in and get my hands dirty.
                    </p>
                    <div className="flex items-center gap-2 text-gray-800">
                    <MapPin size={20} />
                    <span>Guelph ON, Canada</span>
                    </div> 
                </div>

                <div className="md:w-2/5 flex justify-center mt-8 md:mt-0 relative">
                    {/* Stripe section */}
                    <div className="Stripe absolute inset-0 flex justify-center items-center">
                        <motion.div className="absolute rotate-[260deg] md:rotate-[12deg] bg-[var(--accent3)] h-500 w-1/15 translate-y-[-3.5%] md:translate-y-[-18%]"
                            variants={stripeVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4,
                            }} />
                        <motion.div className="absolute rotate-[260deg] md:rotate-[12deg] bg-[var(--accent1)] h-500 w-1/15 translate-y-[-4%] md:translate-y-[-23%]"
                            variants={stripeVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4,
                            }} />

                        <motion.div className="absolute rotate-[260deg] md:rotate-[12deg] bg-[var(--accent3)] h-500 w-2/5 translate-y-[2%] md:translate-y-[25%]"
                            variants={stripeVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 80,
                                damping: 10,
                                delay: 0.4,
                            }}  />
                        <motion.div className="absolute rotate-[260deg] md:rotate-[12deg] bg-[var(--accent2)] h-500 w-2/5 translate-y-[1%] md:translate-y-[20%]"
                            variants={stripeVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 80,
                                damping: 10,
                                delay: 0.4,
                            }}  />
                    </div>

                    {/* Circle around portrait */}
                    <motion.div className="max-sm:hidden absolute inset-0 flex justify-center items-center"
                        variants={circleVariant}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 1,
                                delay: 0,
                            }}  >
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent5)] mask-conic-from-40% mask-conic-to-40% rotate-[-50deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-40% mask-conic-to-40% rotate-[-50deg]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent5)] mask-conic-from-10% mask-conic-to-10% rotate-[105deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-10% mask-conic-to-10% rotate-[105deg]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent5)] mask-conic-from-5% mask-conic-to-5% rotate-[152deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-5% mask-conic-to-5% rotate-[152deg]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent5)] mask-conic-from-2% mask-conic-to-2% rotate-[177deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-2% mask-conic-to-2% rotate-[177deg]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent5)] mask-conic-from-2% mask-conic-to-2% rotate-[190deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-2% mask-conic-to-2% rotate-[190deg]"/>
                    </motion.div>

                    {/* Portrait Section */}
                    <div className="relative size-60 sm:size-65 md:size-70 rounded-full overflow-hidden border-r-8 border-b-8 black shadow-lg">
                    <img
                        src="images/Ben PFP.jpg"
                        alt="Ben"
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>  
            </div>
            <div className=" w-screen bg-[var(--accent3)] h-10 rotate-[2deg]">
            
            </div>
        </div>

        
    );  
}

const stripeVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};
  
const circleVariant = {
    hidden: { opacity: 0, rotate: 0},
    visible: { opacity: 1, rotate: 10 },
};