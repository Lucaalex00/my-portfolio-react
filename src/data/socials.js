// Contact links — structural data. `subtitle` holds the (non-translatable) handle for
// social profiles; description + button text (and the CV subtitle) come from the locale
// dictionaries, keyed by `key` under contact.socials.
export const socialLinks = [
  {
    key: "linkedin",
    title: "LinkedIn",
    subtitle: "@Luca Cirio",
    href: "https://www.linkedin.com/in/luca-cirio-453485283/",
    emoji: "💼",
    accentColor: "var(--accent)",
  },
  {
    key: "github",
    title: "GitHub",
    subtitle: "@Lucaalex00",
    href: "https://github.com/Lucaalex00",
    emoji: "🐙",
    accentColor: "var(--accent-2)",
  },
  {
    key: "instagram",
    title: "Instagram",
    subtitle: "@Luca.alex_",
    href: "https://www.instagram.com/luca.alex_/",
    emoji: "📸",
    accentColor: "var(--neon-pink)",
  },
  {
    key: "cv",
    title: "Curriculum Vitae",
    href: "/Luca_Cirio_CV.pdf",
    emoji: "📄",
    accentColor: "var(--accent)",
    download: true,
  },
];
