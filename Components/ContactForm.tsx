"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HiPaperAirplane, HiCheckCircle, HiXCircle } from "react-icons/hi2";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    title: string;
    message: string;
  } | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name || data.name.trim().length < 2) {
      errs.name = String(t("contact.validationRequired"));
    }
    if (!data.email || !validateEmail(data.email)) {
      errs.email = String(t("contact.validationEmail"));
    }
    if (!data.subject || data.subject.trim().length < 2) {
      errs.subject = String(t("contact.validationRequired"));
    }
    if (!data.message || data.message.trim().length < 10) {
      errs.message = String(t("contact.validationMinLength")).replace(
        "{min}",
        "10"
      );
    }
    return errs;
  };

  const showToast = (
    type: "success" | "error",
    title: string,
    message: string
  ) => {
    setToast({ type, title, message });
    setTimeout(() => setToast(null), 5000);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast(
          "success",
          String(t("contact.successTitle")),
          String(t("contact.successMessage"))
        );
        form.reset();
        setErrors({});
      } else {
        showToast(
          "error",
          String(t("contact.errorTitle")),
          String(t("contact.errorMessage"))
        );
      }
    } catch {
      showToast(
        "error",
        String(t("contact.errorTitle")),
        String(t("contact.errorMessage"))
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Toast notification */}
      {toast && (
        <div
          className={`toast ${
            toast.type === "success" ? "toast-success" : "toast-error"
          }`}
        >
          <div className="flex items-start gap-3">
            {toast.type === "success" ? (
              <HiCheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
            ) : (
              <HiXCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-bold text-[15px]">{toast.title}</p>
              <p className="text-[13px] opacity-90 mt-1">{toast.message}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="ml-4 opacity-70 hover:opacity-100 text-[18px] leading-none"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="form-label" htmlFor="contact-name">
              {t("contact.nameLabel")}
            </label>
            <input
              type="text"
              name="name"
              id="contact-name"
              placeholder={String(t("contact.namePlaceholder"))}
              className={`form-input ${errors.name ? "!border-red-500" : ""}`}
              autoComplete="name"
            />
            {errors.name && (
              <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="form-label" htmlFor="contact-email">
              {t("contact.emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              id="contact-email"
              placeholder={String(t("contact.emailPlaceholder"))}
              className={`form-input ${errors.email ? "!border-red-500" : ""}`}
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="mt-5">
          <label className="form-label" htmlFor="contact-subject">
            {t("contact.subjectLabel")}
          </label>
          <input
            type="text"
            name="subject"
            id="contact-subject"
            placeholder={String(t("contact.subjectPlaceholder"))}
            className={`form-input ${errors.subject ? "!border-red-500" : ""}`}
            autoComplete="off"
          />
          {errors.subject && (
            <p className="text-red-500 text-[12px] mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div className="mt-5">
          <label className="form-label" htmlFor="contact-message">
            {t("contact.messageLabel")}
          </label>
          <textarea
            rows={5}
            name="message"
            id="contact-message"
            placeholder={String(t("contact.messagePlaceholder"))}
            className={`form-input resize-none ${
              errors.message ? "!border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary mt-6 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>{t("contact.sending")}</span>
            </>
          ) : (
            <>
              <HiPaperAirplane className="w-5 h-5" />
              <span>{t("contact.send")}</span>
            </>
          )}
        </button>
      </form>
    </>
  );
}
