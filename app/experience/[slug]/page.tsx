import workExperienceData from "@/data/workExperience.json";
import { notFound } from "next/navigation";
import { use } from 'react'

// Static generation of routes at build time
export async function generateStaticParams() {
    return workExperienceData.map((experience) => ({
        slug: experience.slug,
    }));
}

export default function ExperiencePage ({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const experience = workExperienceData.find((e) => e.slug === slug);

    if (!experience) {
        notFound();
    }

    return (
        <div className="w-full max-w-[1600px] mx-auto">
            <h1 className="text-4xl font-bold mb-4">{experience["article title"]}</h1>
            <p className="text-gray-700">{experience.company}</p>
            <p className="text-gray-600">{experience["job title"]}</p>
            <p className="text-gray-500">{experience["job desctiption"]}</p>
            <p className="text-gray-500 whitespace-pre-line">{experience.introduction}</p>
        </div>
    );
}