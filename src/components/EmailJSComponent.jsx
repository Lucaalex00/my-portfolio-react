import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../i18n/LanguageContext";

const inputClass = "w-full p-3 rounded-xl text-sm outline-none transition-colors duration-200";
const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid var(--border-subtle)",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
};
const labelStyle = {
  fontFamily: "var(--font-mono)",
  color: "var(--text-faint)",
  fontSize: "0.7rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

const EmailJSComponent = () => {
  const { t } = useLanguage();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // "success" | "error"
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [count, setCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const form = useRef();

  const notify = (key, ok) => {
    setMessage(t(`form.messages.${key}`));
    setStatus(ok ? "success" : "error");
  };

  const sendConfirmationEmail = (e) => {
    e.preventDefault();
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    setConfirmationCode(generatedCode);
    setUserEmail(e.target.user_email.value);
    setUserName(e.target.from_name.value);

    const templateParams = {
      from_name: e.target.from_name.value,
      user_email: e.target.user_email.value,
      confirmation_code: generatedCode,
    };

    emailjs
      .send("service_6lwbh8d", "template_j4ucpnr", templateParams, "vYzCrWSpVoegMPEj7")
      .then(() => notify("confirmSent", true))
      .catch(() => notify("confirmFail", false));

    e.target.reset();
  };

  const verifyConfirmationCode = () => {
    if (userCode === confirmationCode && userCode.length !== 0) {
      setIsConfirmed(true);
      notify("confirmedOk", true);
    } else {
      notify("codeWrong", false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isConfirmed) {
      notify("confirmFirst", false);
      return;
    }

    const currentDate = new Date().toLocaleString();
    const templateParams = {
      from_name: userName,
      user_email: userEmail,
      message: form.current.message.value,
      date: currentDate,
    };

    setCount(1);
    setIsButtonDisabled(true);
    emailjs
      .send("service_6lwbh8d", "template_t5booah", templateParams, "vYzCrWSpVoegMPEj7")
      .then(() => {
        notify("sentOk", true);
        setTimeout(() => window.location.reload(), 3000);
      })
      .catch(() => notify("sendFail", false));

    e.target.reset();
  };

  const onFocus = (e) => (e.currentTarget.style.borderColor = "var(--border-glow)");
  const onBlur = (e) => (e.currentTarget.style.borderColor = "var(--border-subtle)");

  return (
    <div className="w-full max-w-md mx-auto">
      {!isConfirmed ? (
        <form onSubmit={sendConfirmationEmail} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block" style={labelStyle}>{t("form.name")}</label>
            <input type="text" name="from_name" className={inputClass} style={inputStyle} placeholder={t("form.placeholders.name")} required onFocus={onFocus} onBlur={onBlur} />
          </div>
          <div className="space-y-1.5">
            <label className="block" style={labelStyle}>{t("form.email")}</label>
            <input type="email" name="user_email" className={inputClass} style={inputStyle} placeholder={t("form.placeholders.email")} required onFocus={onFocus} onBlur={onBlur} />
          </div>
          <button type="submit" className="btn-primary w-full p-3 rounded-xl text-sm cursor-pointer">
            {t("form.sendConfirm")}
          </button>
        </form>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block" style={labelStyle}>{t("form.message")}</label>
            <textarea
              name="message"
              className={inputClass}
              style={{ ...inputStyle, resize: "vertical" }}
              placeholder={t("form.placeholders.message")}
              rows="4"
              required
              disabled={count === 1 || isButtonDisabled}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
          <button type="submit" className="btn-primary w-full p-3 rounded-xl text-sm cursor-pointer" disabled={isButtonDisabled}>
            {t("form.send")}
          </button>
        </form>
      )}

      {!isConfirmed && (
        <div className="mt-4 space-y-1.5">
          <label className="block" style={labelStyle}>{t("form.code")}</label>
          <input
            type="text"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className={inputClass}
            style={inputStyle}
            placeholder={t("form.placeholders.code")}
            required
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <button onClick={verifyConfirmationCode} className="btn-ghost w-full p-3 rounded-xl text-sm cursor-pointer mt-2">
            {t("form.verify")}
          </button>
        </div>
      )}

      {message && (
        <p
          className="mt-4 text-sm font-semibold text-center"
          style={{ color: status === "success" ? "var(--accent-2)" : "var(--neon-pink)" }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default EmailJSComponent;
