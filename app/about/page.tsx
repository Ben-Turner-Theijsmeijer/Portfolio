import { MapPin } from "lucide-react";
import * as motion from "motion/react-client"
import { JobCards } from "../components/jobCards";
import Link from "next/link";

export default function AboutMe() {
  
    return (
        <div className="w-full max-w-[1600px] mx-auto relative">
            {/* Hero Section */}
            <div className="py-25 lg:px-15 xl:px-25 flex flex-col md:flex-row items-center justify-around -z-5 p-8 overflow-hidden">
                <div className="md:w-3/5">
                    <h1 className="text-[var(--p0)] text-5xl sm:text-6xl font-bold mb-2 duration-700">Hi, I’m <span className="text-[var(--accent3)] duration-700 hover:text-[var(--accent4)]">Ben Turner-Theijsmeijer</span></h1>
                    <h2 className="text-[var(--p5)] text-2xl sm:text-3xl mb-4">Creator, Artist, Software Developer</h2>
                    <p className="text-[var(--p2)] text-base sm:text-lg mb-4">
                        I am a recent graduate from the University of Guelph with a bachelor's degree
                        in software engineering.
                    </p>
                    <p className="text-[var(--p2)] text-base sm:text-lg mb-6">
                        Regardless of the medium, creation is my passion—through code, art,
                        games, or otherwise I love to dive in and get my hands dirty.
                    </p>
                    <div className="text-[var(--p1)] flex items-center gap-2">
                        <MapPin size={20} className="text-[var(--accent4)]"/>
                        <span>Guelph ON, Canada</span>
                    </div> 

                    {/* Social Links */}
                    <div className="links max-sm:h-8">
                        <ul className="grid grid-cols-3 justify-items-center w-40 h-1">
                            <li className="link-icon">
                                <a href="https://www.linkedin.com/in/ben-turner-theijsmeijer-21a442262/">
                                    <svg role="img" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                </a>
                            </li>
                            <li className="link-icon">
                                <a href="https://github.com/Ben-Turner-Theijsmeijer">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                </a>
                            </li>
                            <li className="link-icon">
                                <a href="mailto:benturnertheijsmeijer@gmail.com">
                                    <svg role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:w-2/5 flex justify-center mt-8 md:mt-0 relative">
                    {/* Stripe section */}
                    <div className="Stripe absolute inset-0 flex justify-center items-center">
                        <motion.div className="absolute rotate-[260deg] md:rotate-[12deg] bg-[var(--accent4)] h-500 w-1/15 translate-y-[-3.5%] md:translate-y-[-18%]"
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
                        <motion.div className="absolute rotate-[260deg] md:rotate-[12deg] bg-[var(--accent3)] h-500 w-1/15 translate-y-[-4%] md:translate-y-[-23%]"
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

                        <motion.div className="absolute rotate-[260deg] md:rotate-[12deg] bg-[var(--accent4)] h-500 w-2/5 translate-y-[2%] md:translate-y-[25%]"
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
                        <motion.div className="absolute rotate-[260deg] md:rotate-[12deg] bg-[var(--accent3)] h-500 w-2/5 translate-y-[1%] md:translate-y-[20%]"
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
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent1)] mask-conic-from-40% mask-conic-to-40% rotate-[-50deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-40% mask-conic-to-40% rotate-[-50deg]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent1)] mask-conic-from-10% mask-conic-to-10% rotate-[105deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-10% mask-conic-to-10% rotate-[105deg]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent1)] mask-conic-from-5% mask-conic-to-5% rotate-[152deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-5% mask-conic-to-5% rotate-[152deg]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent1)] mask-conic-from-2% mask-conic-to-2% rotate-[177deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-2% mask-conic-to-2% rotate-[177deg]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent1)] mask-conic-from-2% mask-conic-to-2% rotate-[190deg] translate-y-[2%] translate-x-[2%]"/>
                            <div className="absolute size-80 md:size-90 rounded-full border-15 border-[var(--accent)] mask-conic-from-2% mask-conic-to-2% rotate-[190deg]"/>
                    </motion.div>

                    {/* Portrait Section */}
                    <div className="relative size-60 sm:size-65 md:size-70 rounded-full overflow-hidden border-r-8 border-b-8 black shadow-lg">
                        <img
                            src="images/Ben_PFP.jpg"
                            alt="Ben"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>  
            </div>

            {/* hero body separator */}
            <div className="grid grid-row-2">
                <div className="w-auto bg-[var(--accent4)] justify-center h-2" />
                <div className="w-auto bg-[var(--accent5)] justify-center h-2" />
            </div>

            {/* Work Experience Section */}
            <div className="w-full h-auto flex justify-center bg-[var(--midground)]">
                <div className="my-25 p-10 w-[60%] min-w-[400px] grid justify-center bg-[var(--accent3)] z-5">
                    <div className="text-center">
                        <h1 className="text-[var(--p0)] text-4xl sm:text-5xl font-bold duration-700">Experience</h1>
                        <p className="text-base sm:text-lg font-extralight mb-2 duration-700">Software Development & IT</p>
                    </div>

                    {/* Display for three most recent Jobs from the experience JSON */}
                    <JobCards />

                    <div className="text-center mt-5">
                        <Link href="/experience" className="text-[var(--p0)] duration-200 hover:text-[var(--accent2)]">
                            <h2 className="text-2xl sm:text-3xl font-light">See More 🢂</h2>
                        </Link>
                    </div>
                </div>

                {/* Work Experience BG Divs */}
                <motion.div className="absolute mt-25 p-10 w-[60%] min-w-[400px] sm:h-[400px] md:h-[1060px] bg-[var(--accent5)]"
                    initial={{rotate: 0}}
                    whileInView={{rotate: 8}}
                    viewport={{ amount: 0.5 }}
                    transition={{
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.8,
                    }} 
                />
                <motion.div className="absolute mt-25 p-10 w-[60%] min-w-[400px] sm:h-[400px] md:h-[1060px] bg-[var(--accent4)]"
                    initial={{rotate: 0}}
                    whileInView={{rotate: 4}}
                    viewport={{ amount: 0.5 }}
                    transition={{
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.6,
                    }}
                />
            </div>
            
            <div className="h-100">
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