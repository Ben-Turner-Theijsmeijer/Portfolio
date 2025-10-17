import coopWorkExperienceData from "@/data/coopWorkExperience.json";
import Link from "next/link";
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
                    <div className="text-[var(--nav-foreground)] bg-[var(--accent5)] px-2">
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <div className="bg-[var(--accent4)] border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent5)]"></div>
                    <div className="text-[var(--nav-foreground)] bg-[var(--accent4)] px-2">
                        <Link href="/experience">
                            Experience
                        </Link>
                    </div>
                    <div className="bg-[var(--accent3)] border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent4)]"></div>
                    <div className="bg-[var(--accent3)] px-2">
                        <Link href={experience.slug}>
                            {experience.articleTitle}
                        </Link>
                    </div>
                    <div className="border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent3)]"></div>
                </div>

                {/* Article Body */}
                <div className="my-10 w-[70%] p-4 grid grid-cols-1 justify-items-center bg-[var(--accent2)]">
                <div className="my-5 py-25 lg:px-15 xl:px-25 w-[95%] p-8 overflow-hidden border-[var(--accent3)] border-2">
                    {/* Header */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{experience.articleTitle}</h1>
                        <p className="text-[var(--p2)] text-2xl">{experience.company}</p>
                        <p className="text-[var(--p4)] text-xl">{experience.jobTitle}</p>
                    </div>
                    {/* Introduction */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Introduction</h2>
                        <p className="text-[var(--p4)]">{experience.introduction}</p>
                    </div>
                    {/* About the Employer */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">About the Employer</h2>
                        <p className="text-[var(--p2)]">{experience.aboutTheEmployer}</p>
                    </div>
                    {/* Image 1*/}
                    <div className="grid grid-cols-1 justify-items-center">
                        <img className="px-5 pt-5 pb-2 h-auto w-auto" src={experience.articleImg1} alt={experience.articleImg1Alt} />
                        <p className="text-[var(--p5)] text-center font-light text-sm">{experience.articleImg1Desc}</p>
                    </div>

                    {/* Work term Goals */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Workterm Goals</h2>
                        <WorkTermGoals goalType={experience.goalType1} goal={experience.goal1} goalActionPlan={experience.goalActionPlan1} goalReflection={experience.goalReflection1} nextGoal={experience.goal2}/>
                        <WorkTermGoals goalType={experience.goalType2} goal={experience.goal2} goalActionPlan={experience.goalActionPlan2} goalReflection={experience.goalReflection2} nextGoal={experience.goal3}/>
                        <WorkTermGoals goalType={experience.goalType3} goal={experience.goal3} goalActionPlan={experience.goalActionPlan3} goalReflection={experience.goalReflection3} nextGoal={experience.goal4}/>
                        <WorkTermGoals goalType={experience.goalType4} goal={experience.goal4} goalActionPlan={experience.goalActionPlan4} goalReflection={experience.goalReflection4} nextGoal={experience.goal5}/>
                        <WorkTermGoals goalType={experience.goalType5} goal={experience.goal5} goalActionPlan={experience.goalActionPlan5} goalReflection={experience.goalReflection5}/>
                    </div>

                    {/* Job Description */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Job Description</h2>
                        <p className="text-[var(--p4)]">{experience.jobDesctiption}</p>
                    </div>
                    {/* Image 2 */}
                    <div className="grid grid-cols-1 justify-items-center">
                        <img className="px-5 pt-5 pb-2 h-auto w-auto" src={experience.articleImg2} alt={experience.articleImg2Alt} />
                        <p className="text-[var(--p5)] text-center font-light text-sm">{experience.articleImg2Desc}</p>
                    </div>
                    {/* Conclusion */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Conclusion</h2>
                        <p className="text-[var(--p2)]">{experience.conclusion}</p>
                    </div>
                    {/* Acknowledgements */}
                    <div>
                        <h2 className="text-3xl font-semibold m-4 text-center">Acknowledgements</h2>
                        <p className="text-[var(--p4)]">{experience.acknowledgements}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

// generates the my co-op work term goals depending on how many there are for a specific work term 
function WorkTermGoals({goalType, goal, goalActionPlan, goalReflection, nextGoal}: {goalType?:string; goal?:string; goalActionPlan?:string; goalReflection?:string; nextGoal?:string}) {
    if (!goal || goal.trim() === "") return null;
    return (
        <div>
            <div className="my-4">
                <span className="text-[var(--p2)] font-bold">{goalType}</span>
                <span className="text-[var(--p3)]">{goal}</span>
                <div className="px-15 py-5">
                    <p className="text-[var(--p4)] pt-2"><i><b>Action Plan:</b></i> {goalActionPlan}</p>
                    <p className="text-[var(--p4)] pt-4"><i><b>Reflection:</b></i> {goalReflection}</p>
                </div>
            </div>
            {/* adds a divider line if it is not the last goal */}
            {nextGoal && nextGoal.trim() !== "" && (<div className="my-4 pt-0.5 w-auto bg-[var(--accent3)]"></div>)}
        </div>
    );
}