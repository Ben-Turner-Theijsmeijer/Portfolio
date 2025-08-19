import Link from "next/link";
import projectData from "@/data/personalProjects.json";
import { ComingSoon } from "../components/comingSoon";

export default function Projects() {
    return (
        <div>
            <div className="w-full max-w-[1600px] mx-auto">
                <h1 className="text-4xl font-bold mb-6">My Projects</h1>
                <ul className="space-y-4">
                    {projectData.map((project) => (
                    <li key={project.slug} className="border-b pb-2">
                        <Link href={`/projects/${project.slug}`} className="text-2xl text-blue-600 hover:underline">
                        {project.title}
                        </Link>
                        <p className="text-gray-600">{project.description}</p>
                    </li>
                    ))}
                </ul>
                <ComingSoon />
            </div>
        </div>
    );
}