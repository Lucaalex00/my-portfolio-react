import React from "react";
import { motion } from "framer-motion";
import EmailJSComponent from "../EmailJSComponent";
import { socialLinks } from "../../data/socials";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contacts" className="relative z-10 py-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label={t("contact.label")}
          title={t("contact.title")}
          highlight={t("contact.highlight")}
          subtitle={t("contact.subtitle")}
          tags={t("contact.tags")}
        />

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {socialLinks.map((item, i) => (
            <motion.div
              key={item.title}
              className="surface-card rounded-2xl p-5 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{
                  background: `color-mix(in srgb, ${item.accentColor} 10%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${item.accentColor} 25%, transparent)`,
                }}
              >
                {item.emoji}
              </div>

              <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                {item.title}
              </p>
              <p className="text-xs mb-2" style={{ color: item.accentColor, opacity: 0.85 }}>
                {item.subtitle || t(`contact.socials.${item.key}.subtitle`)}
              </p>
              <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "var(--text-muted)" }}>
                {t(`contact.socials.${item.key}.description`)}
              </p>

              <a
                href={item.href}
                target={item.download ? undefined : "_blank"}
                rel={item.download ? undefined : "noopener noreferrer"}
                download={item.download || undefined}
                className="px-3 py-2 rounded-full text-xs font-semibold text-center transition-all duration-200"
                style={{
                  fontFamily: "var(--font-display)",
                  border: `1px solid color-mix(in srgb, ${item.accentColor} 40%, transparent)`,
                  color: item.accentColor,
                  background: `color-mix(in srgb, ${item.accentColor} 8%, transparent)`,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = `color-mix(in srgb, ${item.accentColor} 18%, transparent)`)}
                onMouseLeave={(e) => (e.currentTarget.style.background = `color-mix(in srgb, ${item.accentColor} 8%, transparent)`)}
              >
                {t(`contact.socials.${item.key}.button`)}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          className="surface-card rounded-3xl p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ border: "1px solid var(--border-glow)" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {t("contact.formTitle")}
          </h3>
          <p className="text-center text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            {t("contact.formSubtitle")}
          </p>

          <EmailJSComponent />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
