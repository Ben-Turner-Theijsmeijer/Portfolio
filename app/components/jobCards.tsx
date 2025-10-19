// this is how Job Experience Cards are generated
import coopWorkExperienceData from "@/data/coopWorkExperience.json";
import Link from "next/link";
import * as motion from "motion/react-client"


export const JobCards = () => {
    return (
        <div className="relative">
            {/* Jobs */}
            {coopWorkExperienceData.slice(0, 3).map((workExperience) => (
                <div key={workExperience.slug} className="">
                    <Link href={`/experience/${workExperience.slug}`} className="relative w-[100%] flex justify-center group">
                        <motion.div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-[auto_auto] m-2 w-[90%] work-experience h-[330px] sm:h-[400px] md:h-[265px] bg-[var(--midground)] border-3 border-[var(--accent5)] ease-out duration-200 group-hover:bg-[var(--background)] group-hover:-translate-x-1 group-hover:-translate-y-1 z-6"
                            whileTap={{ x: -10, y: -10 }}
                            transition={{duration: 0.2}}
                        >
                            {/* Company Logo */}
                            <div className="grid place-items-center h-full w-full overflow-hidden">
                                <img className="p-5 object-contain max-h-full" src={workExperience.cardImg} alt={workExperience.cardImgAlt} />
                            </div>  
                            {/* Description */}
                            <div className="relative py-0 px-5 md:p-5 overflow-hidden">
                                <div className="absolute max-md:hidden top-1/2 left-1 -translate-x-1/2 -translate-y-1/2 h-[50%] w-px bg-linear-to-b group-hover:from-[var(--background)] from-[var(--midground)] via-[var(--accent)] group-hover:to-[var(--background)] to-[var(--midground)] z-10" />
                                <h2 className="text-[var(--accent6)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-shadow-sm">{workExperience.company}</h2>
                                <h3 className="text-[var(--p2)] text-base sm:text-lg text-shadow-xs">{workExperience.jobTitle}</h3>
                                <div className="max-md:text-right overflow-y-auto h-[70%] pr-2">
                                    <p className="text-[var(--p3)] text-base/6 max-md:hidden mt-4">{workExperience.cardSummary}</p>
                                    <p className="text-[var(--p2)] text-base/6 md:hidden mt-4">Learn More  &gt; </p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="absolute m-2 w-[90%] h-[330px] sm:h-[400px] md:h-[265px] bg-[var(--accent5)] ease-out duration-200 group-hover:translate-x-2 group-hover:translate-y-2"/>
                    </Link>
                </div>
            ))}
        </div>
    );
}