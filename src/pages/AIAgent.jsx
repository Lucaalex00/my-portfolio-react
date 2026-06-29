import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const triggerGlitch = () => {
  document.body.classList.remove("glitch-active");
  void document.body.offsetWidth;
  document.body.classList.add("glitch-active");
  setTimeout(() => document.body.classList.remove("glitch-active"), 2200);
};

// Topic keywords per language. Matching is case-insensitive substring.
// Order matters: the first topic with a hit wins.
const TOPICS = [
  { id: "glitch", it: ["glitch", "rompi", "distruggi", "corrompi", "hackera", "buggare", "rovina"], en: ["glitch", "hack", "break", "destroy", "corrupt", "distort"] },
  { id: "greet", it: ["ciao", "salve", "ehi", "buongiorno", "buonasera", "hola"], en: ["hello", "hi ", "hey", "yo "] },
  { id: "skills", it: ["competenz", "stack", "tecnolog", "linguaggi", "framework", "sai fare", "cosa sai", "abilit"], en: ["skill", "stack", "technology", "tech", "language", "framework", "know", "use"] },
  { id: "ai", it: ["agente", "agenti", "claude", "anthropic", "mcp", "intelligenza", "llm"], en: ["ai", "agent", "claude", "anthropic", "mcp", "llm", "gpt", "openai", "langchain"] },
  { id: "projects", it: ["progett", "lavori", "portfolio", "realizzat", "demo", "sito", "siti"], en: ["project", "portfolio", "built", "made", "demo", "live"] },
  { id: "experience", it: ["esperienz", "lavoro", "azienda", "carriera", "leviahub", "alten", "boolean", "metalmecc", "percorso"], en: ["experience", "job", "company", "career", "leviahub", "alten", "boolean", "work"] },
  { id: "contact", it: ["contatt", "email", "assum", "raggiung", "collabor", "disponibil", "freelance", "scriv"], en: ["contact", "email", "hire", "reach", "collaborate", "available", "freelance"] },
  { id: "cv", it: ["cv", "curriculum", "scarica"], en: ["cv", "resume", "curriculum", "download"] },
  { id: "who", it: ["chi ", "luca", "persona", "raccontami", "parlami"], en: ["who", "luca", "about", "person", "tell me"] },
  { id: "why", it: ["perch", "perche", "migliore", "scegliere", "diverso", "unico", "distingu"], en: ["why", "best", "choose", "different", "unique", "stand out"] },
  { id: "easter", it: ["404", "errore", "terminale", "hacker"], en: ["404", "error", "terminal", "hacker"] },
];

// Decide the language of a question. Italian accents or cue words → it,
// strong english cues → en, otherwise fall back to the current UI language.
const IT_CUES = ["ciao", "perch", "quali", "competenz", "esperienz", "progett", "cosa", "come", "dove", "quando", "sai", "azienda", "lavoro", "assum", "contatt", "disponibil", "lingua", "raccontami", "parlami", "scarica", "curriculum", "chi ", "però", "più", "puoi"];
const EN_CUES = ["the ", "what", "who", "how", "your", "you ", "skill", "project", "experience", "hire", "tell", "about", "why", "can you"];

const detectLang = (text, fallback) => {
  const s = ` ${text.toLowerCase()} `;
  if (/[àèéìòù]/.test(s)) return "it";
  if (IT_CUES.some((c) => s.includes(c))) return "it";
  if (EN_CUES.some((c) => s.includes(c))) return "en";
  return fallback;
};

const findTopic = (text) => {
  const s = text.toLowerCase();
  for (const topic of TOPICS) {
    if ([...topic.it, ...topic.en].some((w) => s.includes(w))) return topic.id;
  }
  return null;
};

const Bubble = ({ msg }) => (
  <div className={`flex gap-2 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
    {msg.role === "assistant" && (
      <div
        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
        style={{ background: "var(--accent-soft)", border: "1px solid var(--border-glow)", color: "var(--accent)", fontFamily: "var(--font-mono)" }}
      >
        A
      </div>
    )}
    <div
      className="px-3 py-2 rounded-2xl text-sm max-w-[85%] leading-relaxed"
      style={
        msg.role === "user"
          ? { background: "var(--accent-2-soft)", border: "1px solid rgba(111,222,201,0.2)", color: "var(--text-primary)", borderTopRightRadius: 4 }
          : { background: "var(--accent-soft)", border: "1px solid var(--border-glow)", color: "var(--text-primary)", borderTopLeftRadius: 4 }
      }
    >
      {msg.content}
    </div>
  </div>
);

const AIAgent = () => {
  const { t, tIn, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text || typing) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setTyping(true);

    const replyLang = detectLang(text, lang);
    const topicId = findTopic(text);
    const reply = topicId ? tIn(replyLang, `agent.topics.${topicId}`) : tIn(replyLang, "agent.default");
    const isGlitch = topicId === "glitch";

    setTimeout(() => {
      if (isGlitch) triggerGlitch();
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Trigger */}
      <div className="agent-trigger">
        <motion.button
          onClick={() => setOpen((o) => !o)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm"
          style={{
            fontFamily: "var(--font-mono)",
            background: open ? "var(--accent-2)" : "var(--accent)",
            color: "#0a0b10",
            boxShadow: open ? "0 0 28px var(--accent-2-glow)" : "0 0 28px var(--accent-glow)",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s, box-shadow 0.3s",
          }}
          title={t("agent.triggerTitle")}
        >
          {open ? "×" : "AI"}
        </motion.button>
      </div>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="agent-panel-container"
            initial={{ opacity: 0, scale: 0.93, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div
              className="h-full flex flex-col overflow-hidden"
              style={{
                background: "rgba(16,18,25,0.97)",
                border: "1px solid var(--border-glow)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 60px rgba(138,160,255,0.06), 0 30px 80px rgba(0,0,0,0.6)",
                borderRadius: "inherit",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--accent-soft)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "var(--accent)", color: "#0a0b10", fontFamily: "var(--font-mono)" }}>
                  AI
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                    {t("agent.title")}
                  </p>
                  <p className="text-xs" style={{ color: "var(--accent)", opacity: 0.7 }}>
                    {t("agent.status")}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <motion.div className="w-2 h-2 rounded-full" style={{ background: "var(--accent-2)" }} animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    {t("agent.online")}
                  </span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 overflow_hacking">
                <Bubble msg={{ role: "assistant", content: t("agent.intro") }} />

                {messages.map((msg, i) => (
                  <Bubble key={i} msg={msg} />
                ))}

                {typing && (
                  <div className="flex gap-2 items-start">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: "var(--accent-soft)", border: "1px solid var(--border-glow)", color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
                      A
                    </div>
                    <div className="px-3 py-2 rounded-2xl" style={{ background: "var(--accent-soft)", border: "1px solid var(--border-glow)", borderTopLeftRadius: 4 }}>
                      <div className="flex gap-1 items-center h-5">
                        {[0, 1, 2].map((i) => (
                          <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.22 }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {/* Input */}
              <div className="flex-shrink-0 p-3" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <div className="flex gap-2 items-end rounded-2xl px-3 py-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-subtle)" }}>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder={t("agent.placeholder")}
                    rows={1}
                    className="flex-1 bg-transparent text-sm resize-none outline-none"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", maxHeight: 80, lineHeight: 1.5 }}
                  />
                  <motion.button
                    onClick={send}
                    disabled={!input.trim() || typing}
                    whileTap={{ scale: 0.88 }}
                    className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold"
                    style={{
                      background: input.trim() && !typing ? "var(--accent)" : "var(--border-subtle)",
                      color: "#0a0b10",
                      border: "none",
                      cursor: input.trim() && !typing ? "pointer" : "not-allowed",
                      transition: "background 0.2s",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ↑
                  </motion.button>
                </div>
                <p className="text-center mt-2 text-xs" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                  {t("agent.hint")}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAgent;
