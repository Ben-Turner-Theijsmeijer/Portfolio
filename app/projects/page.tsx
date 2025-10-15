import Link from "next/link";
import projectData from "@/data/personalProjects.json";
import { ComingSoon } from "../components/comingSoon";

export default function Projects() {
    return (
        <div>
            <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 justify-items-center">
                <div className="py-25 lg:px-15 xl:px-25 w-[70%] p-8 overflow-hidden">
                    <h1 className="text-[var(--p0)] text-4xl font-bold mb-6">My Projects</h1>
                    <ul className="space-y-4">
                        {projectData.map((project) => (
                        <li key={project.slug} className="border-b pb-2">
                            <Link href={`/projects/${project.slug}`} className="text-[var(--accent4)] text-2xl hover:underline">
                            {project.title}
                            </Link>
                            <p className="text-[var(--p3)]">{project.description}</p>
                        </li>
                        ))}
                    </ul>
                    <ComingSoon />
                </div>
            </div>
        </div>
    );
}