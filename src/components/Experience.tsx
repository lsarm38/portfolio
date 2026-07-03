const experiences = [
  {
    company: "IHS Pharmacy",
    role: "Software Developer",
    period: "3 Years",
    current: false,
    bullets: [
      "Developed and maintained C# APIs powering a pharmaceutical system used by correctional facilities",
      "Built and enhanced front-end applications using TypeScript and React",
      "Wrote and optimized SQL queries to manage and troubleshoot large datasets via pgAdmin",
      "Configured audit logging and monitoring with ELK stack and Azure solutions",
      "Managed and customized Microsoft Power Platform tools including Power Automate and Dynamics 365",
      "Provided Tier 2 customer support via Zendesk, collaborating with end users to resolve technical issues",
    ],
  },
  {
    company: "Hy-Vee",
    role: "Assistant Produce Manager",
    period: "Current",
    current: true,
    bullets: [
      "Manage day-to-day operations of the produce department",
      "Lead and coordinate team members to meet customer service standards",
      "Demonstrate strong organizational and communication skills in a fast-paced environment",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Experience & Education
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-blue-400 font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                <span
                  className={`text-sm px-3 py-1 rounded-full border ${
                    exp.current
                      ? "border-green-700 bg-green-950 text-green-400"
                      : "border-gray-700 bg-gray-800 text-gray-400"
                  }`}
                >
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-gray-400 text-sm leading-relaxed"
                  >
                    <span className="text-blue-400 mt-1 shrink-0">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-semibold text-white mb-2">Education</h3>

            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-base font-semibold text-white">
                  B.S. Computer Science
                </h4>
                <p className="text-blue-400 font-medium mt-1">
                  Metropolitan State University
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Expected graduation 2028
                </p>
              </div>
              <span className="text-sm px-3 py-1 rounded-full border border-blue-700 bg-blue-950 text-blue-400">
                In Progress
              </span>
            </div>

            <div className="border-t border-gray-800 pt-6 flex items-start justify-between">
              <div>
                <h4 className="text-base font-semibold text-white">
                  A.S. Computer Science
                </h4>
                <p className="text-blue-400 font-medium mt-1">
                  North Hennepin Community College
                </p>
                <p className="text-gray-500 text-sm mt-2">Graduated 2022</p>
              </div>
              <span className="text-sm px-3 py-1 rounded-full border border-gray-700 bg-gray-800 text-gray-400">
                2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
