import Link from "next/link";
import projectData from "@/data/personalProjects.json";
import { ComingSoon } from "../components/comingSoon";
import * as motion from "motion/react-client"

export default function Projects() {
    return (
        <div>
            <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 justify-items-center">
                <div className="py-25 lg:px-15 xl:px-25 w-[70%] p-8 overflow-hidden">
                    <h1 className="text-[var(--p0)] text-4xl font-bold mb-6">My Projects</h1>
                    <ul className="space-y-4">
                        {projectData.map((project) => (
                        <li key={project.slug} className="">
                            <Link href={`/projects/${project.slug}`} className="">
                            <motion.div className="border-r-20 border-l-10 border-[var(--accent1)] p-5 bg-[var(--accent0)] flex"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className=" max-w-30 p-1 mr-3">
                                    <img src={project.cardImg} alt={project.cardImgAlt} />
                                </div>
                                <div>
                                    {project.title}
                                    <p className="text-[var(--p3)]">{project.description}</p>
                                </div>
                            </motion.div>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}