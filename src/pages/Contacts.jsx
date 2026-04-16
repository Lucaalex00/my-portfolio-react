import React, { useState } from "react";
import EmailJSComponent from "../components/EmailJSComponent";
import { motion } from "framer-motion";

const socialLinks = [
  {
    title: "LinkedIn",
    subtitle: "@Luca Cirio",
    description: "Professional profile, experience and network.",
    href: "https://www.linkedin.com/in/luca-cirio-453485283/",
    buttonText: "Visit LinkedIn ↗",
    emoji: "💼",
    accentColor: "var(--neon-cyan)",
  },
  {
    title: "GitHub",
    subtitle: "@Lucaalex00",
    description: "Code repositories, projects and technical workflow.",
    href: "https://github.com/Lucaalex00",
    buttonText: "View GitHub ↗",
    emoji: "🐙",
    accentColor: "var(--neon-purple)",
  },
  {
    title: "Instagram",
    subtitle: "@Luca.alex_",
    description: "A more personal side and daily creative inspiration.",
    href: "https://www.instagram.com/luca.alex_/",
    buttonText: "Visit Instagram ↗",
    emoji: "📸",
    accentColor: "var(--neon-pink)",
  },
  {
    title: "Curriculum Vitae",
    subtitle: "PDF Download",
    description: "Full overview of skills, experience and projects.",
    href: "/Luca_Cirio_CV.pdf",
    buttonText: "Download CV ↓",
    emoji: "📄",
    accentColor: "var(--neon-cyan)",
    download: true,
  },
];

const ContactPage = () => {
  const [message, setMessage] = useState("");

  return (
    <section id="contacts" className="relative z-10 py-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-3">Contact</span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-4"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Let's build something{" "}
            <span style={{ color: "var(--neon-cyan)" }}>solid</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base"
            style={{ color: "var(--text-muted)", lineHeight: 1.85 }}
          >
            Looking for a developer who cares about clean interfaces, maintainable code and
            real user experience? Let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {["Available for product companies", "No pure consulting"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  border: "1px solid var(--border-glow)",
                  color: "var(--neon-cyan)",
                  background: "var(--neon-cyan-dim)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {socialLinks.map((item, i) => (
            <motion.div
              key={item.title}
              className="cyber-card rounded-3xl p-5 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              style={{ border: `1px solid ${item.accentColor}18` }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{
                  background: `${item.accentColor}10`,
                  border: `1px solid ${item.accentColor}25`,
                }}
              >
                {item.emoji}
              </div>

              <p
                className="font-bold text-sm mb-0.5"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "var(--text-primary)",
                }}
              >
                {item.title}
              </p>
              <p
                className="text-xs mb-2"
                style={{ color: item.accentColor, opacity: 0.8 }}
              >
                {item.subtitle}
              </p>
              <p
                className="text-xs leading-relaxed mb-4 flex-1"
                style={{ color: "var(--text-muted)" }}
              >
                {item.description}
              </p>

              <a
                href={item.href}
                target={item.download ? undefined : "_blank"}
                rel={item.download ? undefined : "noopener noreferrer"}
                download={item.download || undefined}
                className="px-3 py-2 rounded-full text-xs font-semibold text-center transition-all duration-200"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  border: `1px solid ${item.accentColor}40`,
                  color: item.accentColor,
                  background: `${item.accentColor}08`,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = `${item.accentColor}18`)}
                onMouseLeave={(e) => (e.currentTarget.style.background = `${item.accentColor}08`)}
              >
                {item.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          className="cyber-card rounded-3xl p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ border: "1px solid var(--border-glow)" }}
        >
          <div
            className="h-px w-full mb-8"
            style={{
              background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
            }}
          />

          <h3
            className="text-2xl md:text-3xl font-bold text-center mb-2"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "var(--text-primary)",
            }}
          >
            Send a message
          </h3>
          <p
            className="text-center text-sm mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Tell me about your project or idea — I'll get back to you.
          </p>

          <EmailJSComponent
            onSuccess={() => setMessage("Message sent successfully!")}
            onError={() => setMessage("Something went wrong. Try again.")}
          />

          {message && (
            <div
              className="mt-4 mx-auto px-4 py-2 rounded-full text-sm font-semibold text-center w-fit"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: message.includes("success") ? "var(--neon-cyan)" : "var(--neon-pink)",
                border: `1px solid ${message.includes("success") ? "var(--border-glow)" : "rgba(241,91,181,0.3)"}`,
                background: message.includes("success")
                  ? "var(--neon-cyan-dim)"
                  : "rgba(241,91,181,0.08)",
              }}
            >
              {message}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
