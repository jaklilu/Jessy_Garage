import { useState } from "react";
import type { FormEvent, FocusEvent } from "react";
import { useLocale } from "../hooks/useLocale";

type Status = "idle" | "sending" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  comments?: string;
};

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function validateField(name: string, value: string): string | undefined {
    switch (name) {
      case "name":
        return value.trim() ? undefined : t.contact.nameRequired;
      case "email":
        if (!value.trim()) return t.contact.emailRequired;
        if (!isValidEmail(value)) return t.contact.emailInvalid;
        return undefined;
      case "comments":
        return value.trim() ? undefined : t.contact.commentsRequired;
      default:
        return undefined;
    }
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const comments = String(formData.get("comments") || "");

    const newErrors: FieldErrors = {
      name: validateField("name", name),
      email: validateField("email", email),
      comments: validateField("comments", comments),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, comments: true });

    if (newErrors.name || newErrors.email || newErrors.comments) {
      return;
    }

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
      setErrors({});
      setTouched({});
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
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="sr-only" aria-hidden="true">
        <label>
          Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="form-field">
        <label htmlFor="name">
          {t.contact.name} <span className="required-marker" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && (
          <p id="name-error" className="field-error" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="email">
          {t.contact.email} <span className="required-marker" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && (
          <p id="email-error" className="field-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="phone">{t.contact.phone}</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="form-field">
        <label htmlFor="comments">
          {t.contact.comments} <span className="required-marker" aria-hidden="true">*</span>
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={5}
          required
          aria-required="true"
          aria-invalid={!!errors.comments}
          aria-describedby={errors.comments ? "comments-error" : undefined}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.comments && (
          <p id="comments-error" className="field-error" role="alert">
            {errors.comments}
          </p>
        )}
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
