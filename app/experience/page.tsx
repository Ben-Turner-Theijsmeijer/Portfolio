import { ComingSoon } from "./../components/comingSoon";
import Link from "next/link";
import workExperienceData from "@/data/coopWorkExperience.json";

export default function Experiences() {
    return (
        <div>
            <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 justify-items-center">
                <div className="py-25 lg:px-15 xl:px-25 w-[70%] p-8 overflow-hidden">
                    <h1 className="text-[var(--p0)] text-4xl font-bold mb-6">My Work Experiences</h1>
                    <ul className="space-y-4">
                        {workExperienceData.map((workExperience) => (
                        <li key={workExperience.slug} className="border-b pb-2">
                            <Link href={`/experience/${workExperience.slug}`} className="text-[var(--accent4)] text-2xl hover:underline">
                            {workExperience.company}
                            </Link>
                            <p className="text-[var(--p3)]">{workExperience.cardSummary}</p>
                        </li>
                        ))}
                    </ul>
                    <ComingSoon />
                </div>
            </div>
        </div>
    );
}