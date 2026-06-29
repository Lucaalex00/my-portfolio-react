// Technical stack — structural data only. Display text (descriptions, level/category
// labels) lives in the locale dictionaries, keyed by `key`.
// `logo` points to /img/<file>; `icon` is an emoji fallback.
export const skillCategories = ["Frontend", "Backend", "Database", "AI & Agents", "Tools"];

export const skills = [
  // Frontend
  { key: "html", name: "HTML", logo: "Html.png", startDate: "2020-01", level: "Advanced", category: "Frontend" },
  { key: "css", name: "CSS", logo: "Css.png", startDate: "2020-01", level: "Advanced", category: "Frontend" },
  { key: "jsts", name: "JavaScript & TypeScript", logo: "Js.png", startDate: "2020-01", level: "Advanced", category: "Frontend" },
  { key: "react", name: "React", logo: "React.png", startDate: "2024-05", level: "Advanced", category: "Frontend Framework" },
  { key: "angular", name: "Angular", logo: "Angular.png", startDate: "2024-11", level: "Advanced", category: "Frontend Framework" },
  { key: "vue", name: "Vue", logo: "Vue.png", startDate: "2024-03", level: "Intermediate", category: "Frontend Framework" },
  // Backend
  { key: "node", name: "Node.js", logo: "Node.png", startDate: "2024-08", level: "Advanced", category: "Backend" },
  { key: "csharp", name: "C#", logo: "Csharp.png", startDate: "2024-08", level: "Advanced", category: "Backend" },
  { key: "dotnet", name: ".NET", logo: "dotNET.svg", startDate: "2024-07", level: "Advanced", category: "Backend Framework" },
  { key: "python", name: "Python", logo: "Python.svg", startDate: "2024-09", level: "Intermediate", category: "Backend" },
  { key: "php", name: "PHP", logo: "PHP.png", startDate: "2024-04", level: "Intermediate", category: "Backend" },
  { key: "laravel", name: "Laravel", logo: "Laravel.svg", startDate: "2024-04", level: "Intermediate", category: "Backend Framework" },
  // Database
  { key: "mysql", name: "MySQL", logo: "MySQL.svg", startDate: "2024-04", level: "Advanced", category: "Database" },
  { key: "sqlserver", name: "SQL Server", logo: "SQLserver.svg", startDate: "2024-11", level: "Intermediate", category: "Database" },
  // AI & Agents
  { key: "claudeapi", name: "Claude API", icon: "🤖", startDate: "2026-02", level: "Advanced", category: "AI & Agents" },
  { key: "claudecode", name: "Claude Code", icon: "⚡", startDate: "2026-03", level: "Advanced", category: "AI & Agents" },
  { key: "mcp", name: "MCP", icon: "🔌", startDate: "2026-04", level: "Intermediate", category: "AI & Agents" },
  { key: "anthropicsdk", name: "Anthropic SDK", icon: "🧠", startDate: "2026-02", level: "Advanced", category: "AI & Agents" },
  { key: "openai", name: "OpenAI API", icon: "✦", startDate: "2026-03", level: "Intermediate", category: "AI & Agents" },
  // Tools
  { key: "git", name: "Git", icon: "🌿", startDate: "2024-01", level: "Advanced", category: "Tools" },
  { key: "vite", name: "Vite", icon: "⚡", startDate: "2024-05", level: "Advanced", category: "Tools" },
  { key: "docker", name: "Docker", icon: "🐳", startDate: "2025-01", level: "Beginner", category: "Tools" },
];

export const levelColor = {
  Advanced: "var(--accent)",
  Intermediate: "var(--accent-2)",
  Beginner: "var(--neon-pink)",
};
