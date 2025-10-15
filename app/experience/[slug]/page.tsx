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
                <div className="py-25 lg:px-15 xl:px-25 w-[70%] p-8 overflow-hidden">
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
                        <p className="text-gray-700">{experience.goals}</p>
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
    );
}