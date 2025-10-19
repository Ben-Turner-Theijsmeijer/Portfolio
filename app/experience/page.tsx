import { ComingSoon } from "./../components/comingSoon";
import Link from "next/link";
import workExperienceData from "@/data/coopWorkExperience.json";
import * as motion from "motion/react-client"


export default function Experiences() {
    return (
        <div>
            <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 justify-items-center">
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
            </div>
        </div>
    );
}