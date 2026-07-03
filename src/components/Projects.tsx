const projects = [
  {
    title: "JobTracker",
    description:
      "A full-stack job application tracking tool with status tracking, notes, a status timeline, and a dashboard with charts. Built with a C# / ASP.NET Core backend and a React / TypeScript frontend.",
    stack: [
      "C#",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    demo: "https://job-tracker-rose-psi.vercel.app",
    github: "https://github.com/lsarm38/JobTracker",
    live: true,
  },
  {
    title: "Real-Time Chat App",
    description:
      "A real-time chat application built with SignalR for WebSocket communication, C# backend, and React frontend. Coming soon.",
    stack: ["C#", "SignalR", "React", "TypeScript"],
    demo: "",
    github: "",
    live: false,
  },
];

export default function Projects() {
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
                  {project.live && (
                    <span className="text-xs px-2 py-1 rounded-full bg-green-950 border border-green-700 text-green-400">
                      Live
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
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
                {!project.live && (
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
