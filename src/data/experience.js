// Work experience — reverse-chronological. Structural data only: order, company name
// (proper nouns) and the non-translatable tech tags. Translatable text (role, location,
// period, summary, and the metalworker's soft-skill tags) lives in the locale dictionaries,
// keyed by `id` under experience.items.
export const experiences = [
  { id: "leviahub", company: "LeviaHub", current: true, tech: ["Angular", "TypeScript", ".NET", "MCP", "AI / Agents"] },
  { id: "alten", company: "ALTEN", tech: ["React", ".NET", "SQL Server"] },
  { id: "boolean", company: "Boolean", tech: ["Vue.js", "Node.js", "PHP", "Laravel", "MySQL"] },
  { id: "self-taught", company: "Personal — COVID era", tech: ["HTML", "CSS", "JavaScript"] },
  // metalworker's tags are soft skills → translated, provided by the locale.
  { id: "metalworker", company: "Self-employed" },
];
