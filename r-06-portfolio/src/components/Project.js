import {useEffect, useState} from "react"
import sanityClient from "../client.js"

export default function Project() {
    const [projectData, setProjectData] = useState(null)
//połączenie sanity
    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            descryption,
            projectType,
            link,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error)
    }, [])

    return (
        <main className="bg-purple-200 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Moje Projekty</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                tutaj można zobaczyć moje ostatnie projekty</h2>

                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a>
                            </h3>
                            <div className="text-grey-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Zakończony</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                    
                                <span>
                                    <strong className="font-bold">Firma</strong>:{" "}
                                    {project.place}
                                </span>
                                    
                                <span>
                                    <strong className="font-bold">Typ</strong>:{" "}
                                    {project.projectType}
                                
                                </span>
                                
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                                </p>

                                <a 
                                    href={project.link} 
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                                    >Zobacz projekt{" "}
                                    <span role="img" aria-label="right pointer">
                                     
                                    </span>
                                </a>

                            </div>
                        </article>
                        ))}
                </section>
            </section>
        </main>
    )
}