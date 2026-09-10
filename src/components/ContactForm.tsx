import { useState } from "react";
import type { FormEvent } from "react";
import { useLocale } from "../hooks/useLocale";

type Status = "idle" | "sending" | "success" | "error";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {
      "form-name": "contact",
    };

    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error("submit failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="form-stack"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="sr-only" aria-hidden="true">
        <label>
          Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="form-field">
        <label htmlFor="name">{t.contact.name}</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="form-field">
        <label htmlFor="email">{t.contact.email}</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="form-field">
        <label htmlFor="phone">{t.contact.phone}</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="form-field">
        <label htmlFor="comments">{t.contact.comments}</label>
        <textarea id="comments" name="comments" rows={5} required />
      </div>

      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.contact.sending : t.contact.submit}
      </button>

      {status === "success" && (
        <p className="form-status success" role="status">
          {t.contact.success}
        </p>
      )}
      {status === "error" && (
        <p className="form-status error" role="alert">
          {t.contact.error}
        </p>
      )}
    </form>
  );
}
