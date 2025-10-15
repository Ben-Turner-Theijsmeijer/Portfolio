import projectData from "@/data/personalProjects.json";
import Link from "next/link";
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
        <div>
            <div className="w-full max-w-[1600px] mx-auto whitespace-pre-line grid grid-cols-1 justify-items-center">
                {/* breadcrumb trail */}
                <div className="w-[70%] flex mt-10">
                    <div className="bg-[var(--accent5)] px-2 text-[var(--nav-foreground)]">
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <div className="bg-[var(--accent4)] border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent5)]"></div>
                    <div className="bg-[var(--accent4)] px-2 text-[var(--nav-foreground)]">
                        <Link href="/projects">
                            Projects
                        </Link>
                    </div>
                    <div className="bg-[var(--accent3)] border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent4)]"></div>
                    <div className="bg-[var(--accent3)] px-2">
                        <Link href={project.slug}>
                            {project.title}
                        </Link>
                    </div>
                    <div className="border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent3)]"></div>
                </div>
                <div className="py-25 lg:px-15 xl:px-25 w-[70%] p-8 overflow-hidden">
                    <h1 className="text-[var(--p0)] text-4xl font-bold mb-4">{project.title}</h1>
                    <p className="text-[var(--p2)]">{project.content}</p>
                    <a href={project.projectLink}>Try it!</a>
                    <img src={project.img} alt={project.imgAlt} />
                </div>
            </div>
        </div>
    );
}