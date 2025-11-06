import projectData from "@/data/personalProjects.json";
import * as motion from "motion/react-client"
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
                    <div className="bg-[var(--accent1)] px-2 text-[var(--nav-foreground)]">
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <div className="bg-[var(--accent0)] border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent1)]"></div>
                    <div className="bg-[var(--accent0)] px-2 text-[var(--nav-background)]">
                        <Link href="/projects">
                            Projects
                        </Link>
                    </div>
                    <div className="bg-[var(--accent)] border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent0)]"></div>
                    <div className="bg-[var(--accent)] px-2">
                        <Link href={project.slug}>
                            {project.title}
                        </Link>
                    </div>
                    <div className="border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-10 border-l-[var(--accent)]"></div>
                </div>

                <div className="my-10 w-[100%] sm:w-[85%] md:w-[75%] lg:w-[70%] p-1 sm:p-2 md:p-4 grid grid-cols-1 justify-items-center bg-[var(--accent)]">

                    <div className="my-2 sm:my-5 py-10 md:py-25 p-6 sm:p-8 lg:px-10 xl:px-15 w-[99%] sm:w-[97%] md:w-[95%] overflow-hidden border-[var(--accent0)] border-2">
                        <h1 className="text-[var(--p0)] text-4xl font-bold mb-4">{project.title}</h1>
                        
                        <ProgrammingLanguages languages = {project.languages}/>

                        <div className="p-2">
                            <p className="font-bold text-[var(--p2)] py-2">{project.description}</p>
                            <p className="text-[var(--p2)]">{project.introduction}</p>
                        </div>
                        
                        {/* Links for github and live project */}
                        <div className="grid grid-cols-1 justify-items-center h-10">
                            <div className="grid grid-cols-2 w-[50%]">
                                <a href={project.demoLink}>
                                    <motion.div className="bg-[var(--midground)] border-2 p-1 my-1 mx-3 text-center hover:bg-[var(--background)] hover:border-3 duration-100"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        >
                                        <p>See It In Action</p>

                                    </motion.div>
                                </a>
                                <a href={project.gitLink}>
                                    <motion.div className="border-2 p-1 my-1 mx-3 text-center hover:border-3 hover:border-[var(--background)] hover:text-[var(--background)] duration-100"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        >
                                        <p>Look Behind the Curtain</p>
                                    </motion.div>
                                </a>
                            </div>
                        </div>

                        <img className="sm:mx-2 mt-5 mb-2 h-auto w-auto border-2 border-[var(--accent1)]" src={project.img1} alt={project.imgAlt1} />
                        <img className="sm:mx-2 mt-5 mb-2 h-auto w-auto border-2 border-[var(--accent1)]" src={project.img2} alt={project.imgAlt2} />
                        <img className="sm:mx-2 mt-5 mb-2 h-auto w-auto border-2 border-[var(--accent1)]" src={project.img3} alt={project.imgAlt3} />
                        <img className="sm:mx-2 mt-5 mb-2 h-auto w-auto border-2 border-[var(--accent1)]" src={project.img4} alt={project.imgAlt4} />
                    </div>
                </div>
            </div>
        </div>
    );
}

// splits the information from the JSON file about what programming languages were used in development the the project
function ProgrammingLanguages({languages}: {languages?:string}) {
    if (!languages || languages.trim() === "") return null;
    const words = languages.split(",");
    const languagesList = words.map(word => 
        <li key={word} className="pl-2">
            {word}
        </li>
    )
    return (
        <>
        <div className="flex border-2 w-[50%] p-2 bg-[var(--background)]">
            <h2 className="text-2xl font-bold">Built Using:</h2>
            <ul className="pl-10 flex text-[var(--p3)] items-center list-disc list-inside font-light text-sm">
                {languagesList}
            </ul>
        </div>
        </>
    );
}