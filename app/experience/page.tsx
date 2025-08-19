import { ComingSoon } from "./../components/comingSoon";
import Link from "next/link";
import workExperienceData from "@/data/workExperience.json";

export default function Experience() {
    return (
        <div className="w-full max-w-[1600px] mx-auto">
            <h1 className="text-4xl font-bold mb-6">My Work Experiences</h1>
            <ul className="space-y-4">
                {workExperienceData.map((workExperience) => (
                <li key={workExperience.slug} className="border-b pb-2">
                    <Link href={`/experience/${workExperience.slug}`} className="text-2xl text-blue-600 hover:underline">
                    {workExperience.company}
                    </Link>
                    <p className="text-gray-600">{workExperience["job desctiption"]}</p>
                </li>
                ))}
            </ul>
            <ComingSoon />
        </div>
        
    );
}