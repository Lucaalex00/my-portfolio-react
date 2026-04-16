import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INTRO = "Hey 👾 — I'm Luca's digital assistant. Ask me anything about his skills, projects, or experience.";

const triggerGlitch = () => {
  document.body.classList.remove("glitch-active");
  void document.body.offsetWidth;
  document.body.classList.add("glitch-active");
  setTimeout(() => document.body.classList.remove("glitch-active"), 2200);
};

const responses = [
  {
    match: ["glitch", "hack", "break", "destroy", "corrupt", "distort"],
    glitch: true,
    reply: "⚠ SYSTEM CORRUPTED... just kidding. But I did warn you. 😈",
  },
  {
    match: ["hello", "hi", "hey", "ciao", "hola", "salve"],
    reply: "Hey! What do you want to know about Luca? Skills, projects, experience — I've got it all. 🤙",
  },
  {
    match: ["skill", "stack", "technology", "tech", "know", "use", "language", "framework"],
    reply: "Luca covers the full stack: React, Angular, Vue on the frontend — Node.js, C#, .NET, Python on the backend. But his real edge right now is AI/Agents: Claude API, Claude Code, MCP, Anthropic SDK. That's where he spends most of his brainpower.",
  },
  {
    match: ["ai", "agent", "claude", "anthropic", "mcp", "llm", "gpt", "openai", "langchain"],
    reply: "AI is Luca's main obsession right now. He's building a full enterprise app with Claude Code in production at LeviahHub. He works with Claude API, MCP servers, Anthropic SDK, LangChain and OpenAI API. Real stuff, not just tutorials. 🤖",
  },
  {
    match: ["project", "work", "portfolio", "built", "made", "demo", "live"],
    reply: "He has 3 public projects: an e-commerce (Montanaro SRLS Shop), a business website (Games and Toys) and this portfolio itself. More coming. You can check them in the Projects section below. 👇",
  },
  {
    match: ["experience", "job", "company", "work", "career", "leviahub", "alten", "boolean"],
    reply: "Timeline: self-taught in 2020 during COVID → Boolean Bootcamp in 2024 → ALTEN consulting in Genova (2025) → now Software Developer at LeviahHub building AI-native enterprise software. 2 years in, 5 years of depth. ⚡",
  },
  {
    match: ["contact", "email", "hire", "reach", "collaborate", "available", "freelance"],
    reply: "You can reach Luca via the Contact section at the bottom, LinkedIn (@Luca Cirio), or GitHub (@Lucaalex00). He's open to product companies — no pure consulting. Drop him a message! 📬",
  },
  {
    match: ["cv", "resume", "curriculum", "download"],
    reply: "His CV is downloadable right from the Hero section (top of the page) — just hit the Download CV button. Or scroll up. 📄",
  },
  {
    match: ["who", "luca", "about", "person", "tell me"],
    reply: "Luca Cirio — Italian fullstack dev, frontend-leaning, AI-obsessed. Works at LeviahHub on a production Claude Code app. Self-taught since COVID, now building things that actually think. This very portfolio is his aesthetic: cyberpunk lo-fi. 🌙",
  },
  {
    match: ["why", "best", "hire", "choose", "different", "unique", "stand out"],
    reply: "Most devs talk about AI. Luca ships it in production. He combines frontend precision with backend range AND real AI engineering experience — rare combo in 2025. Plus he codes like it's a lifestyle, not a job. 🚀",
  },
  {
    match: ["404", "error", "terminal", "hacker"],
    reply: "Oh you found the 404 page? That HackerTerminal is an intentional easter egg. A little personality never hurt anyone. 😏",
  },
];

const DEFAULT_REPLY = "Hmm, I'm not sure about that one. Try asking about Luca's skills, projects, experience, or just say hi. 🤔";

const getReply = (input) => {
  const lower = input.toLowerCase();
  for (const r of responses) {
    if (r.match.some((kw) => lower.includes(kw))) return r;
  }
  return { reply: DEFAULT_REPLY };
};

const Bubble = ({ msg }) => (
  <div className={`flex gap-2 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
    {msg.role === "assistant" && (
      <div
        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
        style={{
          background: "var(--neon-cyan-dim)",
          border: "1px solid var(--border-glow)",
          color: "var(--neon-cyan)",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        A
      </div>
    )}
    <div
      className="px-3 py-2 rounded-2xl text-sm max-w-[85%] leading-relaxed"
      style={
        msg.role === "user"
          ? {
              background: "var(--neon-purple-dim)",
              border: "1px solid rgba(155,93,229,0.2)",
              color: "var(--text-primary)",
              borderTopRightRadius: 4,
            }
          : {
              background: "var(--neon-cyan-dim)",
              border: "1px solid var(--border-glow)",
              color: "var(--text-primary)",
              borderTopLeftRadius: 4,
            }
      }
    >
      {msg.content}
    </div>
  </div>
);

const AIAgent = () => {
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

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    const matched = getReply(text);

    setTimeout(() => {
      if (matched.glitch) triggerGlitch();
      setMessages((prev) => [...prev, { role: "assistant", content: matched.reply }]);
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
            fontFamily: "'Space Mono', monospace",
            background: open ? "var(--neon-purple)" : "var(--neon-cyan)",
            color: "#08080f",
            boxShadow: open
              ? "0 0 28px var(--neon-purple-glow)"
              : "0 0 28px var(--neon-cyan-glow)",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s, box-shadow 0.3s",
          }}
          title="Chat with Luca's AI"
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
                background: "rgba(8,8,15,0.97)",
                border: "1px solid var(--border-glow)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 60px rgba(0,245,212,0.06), 0 30px 80px rgba(0,0,0,0.6)",
                borderRadius: "inherit",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  background: "var(--neon-cyan-dim)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "var(--neon-cyan)",
                    color: "#08080f",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  AI
                </div>
                <div>
                  <p
                    className="text-sm font-bold leading-tight"
                    style={{ color: "var(--text-primary)", fontFamily: "'Space Mono', monospace" }}
                  >
                    Luca's Agent
                  </p>
                  <p className="text-xs" style={{ color: "var(--neon-cyan)", opacity: 0.7 }}>
                    Ask me anything
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--neon-cyan)" }}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}
                  >
                    online
                  </span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 overflow_hacking">
                {/* Intro */}
                <Bubble msg={{ role: "assistant", content: INTRO }} />

                {messages.map((msg, i) => (
                  <Bubble key={i} msg={msg} />
                ))}

                {typing && (
                  <div className="flex gap-2 items-start">
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{
                        background: "var(--neon-cyan-dim)",
                        border: "1px solid var(--border-glow)",
                        color: "var(--neon-cyan)",
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      A
                    </div>
                    <div
                      className="px-3 py-2 rounded-2xl"
                      style={{
                        background: "var(--neon-cyan-dim)",
                        border: "1px solid var(--border-glow)",
                        borderTopLeftRadius: 4,
                      }}
                    >
                      <div className="flex gap-1 items-center h-5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "var(--neon-cyan)" }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.22 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {/* Input */}
              <div
                className="flex-shrink-0 p-3"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <div
                  className="flex gap-2 items-end rounded-2xl px-3 py-2"
                  style={{
                    background: "rgba(226,232,240,0.03)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Ask anything..."
                    rows={1}
                    className="flex-1 bg-transparent text-sm resize-none outline-none"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "'Open Sans', sans-serif",
                      maxHeight: 80,
                      lineHeight: 1.5,
                    }}
                  />
                  <motion.button
                    onClick={send}
                    disabled={!input.trim() || typing}
                    whileTap={{ scale: 0.88 }}
                    className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold"
                    style={{
                      background:
                        input.trim() && !typing
                          ? "var(--neon-cyan)"
                          : "var(--border-subtle)",
                      color: "#08080f",
                      border: "none",
                      cursor: input.trim() && !typing ? "pointer" : "not-allowed",
                      transition: "background 0.2s",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    ↑
                  </motion.button>
                </div>
                <p
                  className="text-center mt-2 text-xs"
                  style={{ color: "var(--text-muted)", opacity: 0.55, fontFamily: "'Space Mono', monospace" }}
                >
                  try: "glitch the site" 👾
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
