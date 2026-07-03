import { useSearchParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectSearch() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const skill = searchParams.get("skill") ?? "";

  const matched = projects.filter((p) =>
    p.stack.some((s) => s.toLowerCase() === skill.toLowerCase()),
  );

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-blue-400 hover:text-blue-300 mb-8 inline-block transition-colors"
        >
          ← Back
        </button>

        <div className="mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-2">
            Skill Search
          </p>
          <h1 className="text-4xl font-bold">
            Projects using{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {skill}
            </span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            {matched.length === 0
              ? "No projects found for this skill yet."
              : `${matched.length} project${matched.length > 1 ? "s" : ""} found`}
          </p>
        </div>

        {/* Results */}
        {matched.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {matched.map((project) => (
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
                          navigate(
                            `/projects?skill=${encodeURIComponent(tech)}`,
                          )
                        }
                        className={`px-2 py-1 rounded text-xs border transition-colors cursor-pointer ${
                          tech.toLowerCase() === skill.toLowerCase()
                            ? "bg-blue-950 border-blue-500 text-blue-400"
                            : "bg-gray-800 border-gray-700 hover:border-blue-500 hover:text-blue-400 text-gray-400"
                        }`}
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
        ) : (
          /* No results / WIP state */
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center mb-16">
            <p className="text-4xl mb-4">🚧</p>
            <h2 className="text-xl font-semibold text-white mb-2">
              No projects yet
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              I haven't published a project using{" "}
              <span className="text-blue-400">{skill}</span> yet, but it's part
              of my stack. Check back soon or explore my other projects below.
            </p>
          </div>
        )}

        {/* All projects fallback */}
        {matched.length === 0 && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">
              All Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    {project.wip && (
                      <span className="text-xs px-2 py-1 rounded-full bg-yellow-950 border border-yellow-700 text-yellow-400">
                        WIP
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <button
                        key={tech}
                        onClick={() =>
                          navigate(
                            `/projects?skill=${encodeURIComponent(tech)}`,
                          )
                        }
                        className="px-2 py-1 bg-gray-800 border border-gray-700 hover:border-blue-500 hover:text-blue-400 rounded text-xs text-gray-400 transition-colors cursor-pointer"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
