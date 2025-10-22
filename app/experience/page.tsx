import Link from "next/link";
import workExperienceData from "@/data/coopWorkExperience.json";
import * as motion from "motion/react-client"

export default function Experiences() {
    return (
        <div>
            <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 justify-items-center overflow-hidden">
                <div className="py-25 lg:px-15 xl:px-25 w-[70%] p-8 overflow-hidden">
                    {/* Full & Part Time Experience */}
                    <div>
                        <h1 className="text-[var(--p0)] text-4xl font-bold mb-6">Work Experiences</h1>
                        <ul className="space-y-4 my-10">
                            <li>
                                <div className="border-4 flex p-5">
                                    <div className="bg-[var(--accent5)]">

                                    </div>
                                    <div>
                                        <h2>WORK IN PROGRESS</h2>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Coop Work Term Experience */}
                    <div>
                        <h1 className="text-[var(--p0)] text-4xl font-bold mb-6">Co-Op Work Term Reports</h1>
                        <ul className="space-y-4">
                            {workExperienceData.map((workExperience) => (
                            <li key={workExperience.slug} className="">
                                <Link href={`/experience/${workExperience.slug}`} className="">
                                    <motion.div className="border-r-20 border-l-10 border-[var(--accent4)] p-5 bg-[var(--accent3)] flex"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <div className=" max-w-40 p-1 mr-3">
                                            <img src={workExperience.cardImg} alt={workExperience.cardImgAlt} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-semibold">{workExperience.company}</h2>
                                            <p className="text-[var(--p0)] font-semibold">{workExperience.jobTitle}</p>
                                            <p className="text-[var(--p1)]">{workExperience.cardSummary}</p>
                                        </div>
                                    </motion.div>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="md:w-2/5 flex justify-center mt-8 md:mt-0 relative">
                    {/* Stripe section */}
                    <div className="Stripe absolute inset-0 flex justify-center items-center -z-10">
                        <motion.div className="absolute rotate-[260deg] bg-[var(--accent1)] h-500 w-1/15 translate-y-[-30.5%]"
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
                        <motion.div className="absolute rotate-[260deg] bg-[var(--accent0)] h-500 w-1/15 translate-y-[-31%]"
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

                        <motion.div className="absolute rotate-[260deg] bg-[var(--accent1)] h-500 w-2/5 translate-y-[-15%]"
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
                        <motion.div className="absolute rotate-[260deg] bg-[var(--accent0)] h-500 w-2/5 translate-y-[-17%]"
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
                </div>
            </div>
        </div>
    );
}

const stripeVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};