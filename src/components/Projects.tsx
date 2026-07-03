import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.live && !project.wip && (
                    <span className="text-xs px-2 py-1 rounded-full bg-green-950 border border-green-700 text-green-400">
                      Live
                    </span>
                  )}
                  {project.wip && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-950 border border-yellow-700 text-yellow-400">
                      WIP
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <button
                      key={tech}
                      onClick={() =>
                        navigate(`/projects?skill=${encodeURIComponent(tech)}`)
                      }
                      className="px-2 py-1 bg-gray-800 border border-gray-700 hover:border-blue-500 hover:text-blue-400 rounded text-xs text-gray-400 transition-colors cursor-pointer"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.wip && (
                  <span className="flex-1 text-center px-4 py-2 border border-gray-800 text-gray-600 text-sm font-medium rounded-lg">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
