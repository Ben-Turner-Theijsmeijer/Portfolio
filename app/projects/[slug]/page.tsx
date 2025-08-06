import projectData from "@/data/personalProjects.json";
import { notFound } from "next/navigation";
import { use } from 'react'

// Static generation of routes at build time
export async function generateStaticParams() {
    return projectData.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const project = projectData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-700">{project.content}</p>
        </div>
    );
}