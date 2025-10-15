import coopWorkExperienceData from "@/data/coopWorkExperience.json";
import { notFound } from "next/navigation";
import { use } from 'react'

// Static generation of routes at build time
export async function generateStaticParams() {
    return coopWorkExperienceData.map((experience) => ({
        slug: experience.slug,
    }));
}

export default function ExperiencePage ({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const experience = coopWorkExperienceData.find((e) => e.slug === slug);

    if (!experience) {
        notFound();
    }

    return (
        <div>
            <div className="w-full max-w-[1600px] mx-auto whitespace-pre-line grid grid-cols-1 justify-items-center">
                {/* breadcrumb trail */}
                <div className="w-[70%] flex mt-10">
                    <div className="bg-[var(--accent5)] px-2 text-[var(--nav-foreground)]">Experience</div>
                    <div className="bg-[var(--accent3)] border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent5)]"></div>
                    <div className="bg-[var(--accent3)] px-2">{experience.slug}</div>
                    <div className="border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent3)]"></div>
                </div>
                {/* Article Body */}
                <div className="my-10 w-[70%] p-4 grid grid-cols-1 justify-items-center bg-[var(--accent2)]">
                <div className="my-5 py-25 lg:px-15 xl:px-25 w-[95%] p-8 overflow-hidden border-[var(--accent3)] border-2">
                    {/* Header */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{experience.articleTitle}</h1>
                        <p className="text-gray-700">{experience.company}</p>
                        <p className="text-gray-500">{experience.jobTitle}</p>
                    </div>
                    {/* Introduction */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Introduction</h2>
                        <p className="text-gray-500">{experience.introduction}</p>
                    </div>
                    {/* About the Employer */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">About the Employer</h2>
                        <p className="text-gray-700">{experience.aboutTheEmployer}</p>
                    </div>
                    {/* Image 1*/}
                    <div>
                        <img className="h-auto w-auto" src={experience.articleImg1} alt={experience.articleImg1Alt} />
                        <p className="text-center font-light text-sm text-gray-400">{experience.articleImg1Desc}</p>
                    </div>
                    {/* Work term Goals */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Workterm Goals</h2>
                        {/* Goal 1 */}
                        <div className="my-4">
                            <span className="font-bold text-gray-700">{experience.goalType1}</span>
                            <span className="text-gray-600">{experience.goal1}</span>
                            <div className="px-15 py-5">
                                <p className="text-gray-500 pt-2"><i><b>Action Plan:</b></i> {experience.goalActionPlan1}</p>
                                <p className="text-gray-500 pt-4"><i><b>Reflection:</b></i> {experience.goalReflection1}</p>
                            </div>
                        </div>
                        <div className="my-4 pt-0.5 w-auto bg-gray-500"></div>
                        {/* Goal 2 */}
                        <div className="my-4">
                            <span className="font-bold text-gray-700">{experience.goalType2}</span>
                            <span className="text-gray-600">{experience.goal2}</span>
                            <div className="px-15 py-5">
                                <p className="text-gray-500 pt-2"><i><b>Action Plan:</b></i> {experience.goalActionPlan2}</p>
                                <p className="text-gray-500 pt-4"><i><b>Reflection:</b></i> {experience.goalReflection2}</p>
                            </div>
                        </div>
                        <div className="my-4 pt-0.5 w-auto bg-gray-500"></div>
                        {/* Goal 3 */}
                        <div className="my-4">
                            <span className="font-bold text-gray-700">{experience.goalType3}</span>
                            <span className="text-gray-600">{experience.goal3}</span>
                            <div className="px-15 py-5">
                                <p className="text-gray-500 pt-2"><i><b>Action Plan:</b></i> {experience.goalActionPlan3}</p>
                                <p className="text-gray-500 pt-4"><i><b>Reflection:</b></i> {experience.goalReflection3}</p>
                            </div>
                        </div>
                        <div className="my-4 pt-0.5 w-auto bg-gray-500"></div>
                        {/* Goal 4 */}
                        <div className="my-4">
                            <span className="font-bold text-gray-700">{experience.goalType4}</span>
                            <span className="text-gray-600">{experience.goal4}</span>
                            <div className="px-15 py-5">
                                <p className="text-gray-500 pt-2"><i><b>Action Plan:</b></i> {experience.goalActionPlan4}</p>
                                <p className="text-gray-500 pt-4"><i><b>Reflection:</b></i> {experience.goalReflection4}</p>
                            </div>
                        </div>
                        <div className="my-4 pt-0.5 w-auto bg-gray-500"></div>
                        {/* Goal 5 */}
                        <div className="my-4">
                            <span className="font-bold text-gray-700">{experience.goalType5}</span>
                            <span className="text-gray-600">{experience.goal5}</span>
                            <div className="px-15 py-5">
                                <p className="text-gray-500 pt-2"><i><b>Action Plan:</b></i> {experience.goalActionPlan5}</p>
                                <p className="text-gray-500 pt-4"><i><b>Reflection:</b></i> {experience.goalReflection5}</p>
                            </div>
                        </div>
                    </div>
                    {/* Job Description */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Job Description</h2>
                        <p className="text-gray-500">{experience.jobDesctiption}</p>
                    </div>
                    {/* Image 2 */}
                    <div>
                        <img className="h-auto w-auto" src={experience.articleImg2} alt={experience.articleImg2Alt} />
                        <p className="text-center font-light text-sm text-gray-400">{experience.articleImg2Desc}</p>
                    </div>
                    {/* Conclusion */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Conclusion</h2>
                        <p className="text-gray-700">{experience.conclusion}</p>
                    </div>
                    {/* Acknowledgements */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Acknowledgements</h2>
                        <p className="text-gray-500">{experience.acknowledgements}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}