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
      "A full-stack job application tracker with user authentication, multi-user support, status tracking, notes, a status timeline, and a dashboard with charts. Each user's data is privately scoped via ASP.NET Core Identity.",
    stack: [
      "C#",
      "ASP.NET Core",
      "ASP.NET Core Identity",
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
      "A real-time chat application with public rooms, typing indicators, online user lists, and message history. Built with SignalR for WebSocket communication, C# / ASP.NET Core backend, and React / TypeScript frontend.",
    stack: [
      "C#",
      "SignalR",
      "React",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    demo: "https://chat-app-delta-ten-28.vercel.app",
    github: "https://github.com/lsarm38/ChatApp",
    live: true,
    wip: false,
  },
];

export const allSkills = Array.from(
  new Set(projects.flatMap((p) => p.stack)),
).sort();
