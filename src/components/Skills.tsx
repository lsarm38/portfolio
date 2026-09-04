import { useNavigate } from "react-router-dom";

const skillGroups = [
  {
    category: "Languages",
    skills: ["C#", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: [
      "ASP.NET Core",
      "ASP.NET Core Identity",
      "Entity Framework",
      "REST APIs",
    ],
  },
  {
    category: "Data & Cloud",
    skills: ["PostgreSQL", "pgAdmin", "Azure", "ELK Stack"],
  },
  {
    category: "Game Development",
    skills: ["Unity", "Game Development", "Pixel Art"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Power Automate",
      "Dynamics 365",
      "Zendesk",
      "Git",
      "Docker",
      "Swagger",
    ],
  },
];

export default function Skills() {
  const navigate = useNavigate();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() =>
                      navigate(`/projects?skill=${encodeURIComponent(skill)}`)
                    }
                    className="px-3 py-1.5 bg-gray-800 border border-gray-700 hover:border-blue-500 hover:text-blue-400 rounded-lg text-sm text-gray-300 transition-colors cursor-pointer"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
