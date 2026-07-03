export interface Project {
  title: string;
  description: string;
  stack: string[];
  demo: string;
  github: string;
  live: boolean;
  wip: boolean;
}

export const projects: Project[] = [
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
      "Entity Framework",
    ],
    demo: "https://job-tracker-rose-psi.vercel.app",
    github: "https://github.com/lsarm38/JobTracker",
    live: true,
    wip: false,
  },
  {
    title: "Real-Time Chat App",
    description:
      "A real-time chat application built with SignalR for WebSocket communication, C# backend, and React frontend.",
    stack: ["C#", "SignalR", "React", "TypeScript", "ASP.NET Core"],
    demo: "",
    github: "",
    live: false,
    wip: true,
  },
];

export const allSkills = Array.from(
  new Set(projects.flatMap((p) => p.stack)),
).sort();
