import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "./ContactForm";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <HiEnvelope className="w-5 h-5" />,
      label: t("contact.emailLabel2"),
      value: t("contact.email"),
      href: `mailto:${t("contact.email")}`,
    },
    {
      icon: <HiPhone className="w-5 h-5" />,
      label: t("contact.phoneLabel"),
      value: t("contact.phone"),
      href: `tel:${String(t("contact.phone")).replace(/\s/g, "")}`,
    },
    {
      icon: <HiMapPin className="w-5 h-5" />,
      label: t("contact.addressLabel"),
      value: t("contact.address"),
      href: null,
    },
  ];

  const socials = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/gdac-dev", label: "GitHub" },
    { icon: <FaXTwitter className="w-5 h-5" />, href: "https://x.com/guekoue", label: "Twitter/X" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/arsene-demenou/", label: "LinkedIn" },
  ];

  return (
    <div id="contact" className="section-tertiary pt-[6rem] md:pt-[8rem] pb-[5rem]">
      <h2 className="heading">
        {t("contact.heading")}{" "}
        <span className="text-yellow-400">{t("contact.headingHighlight")}</span>
      </h2>
      <p
        className="text-center text-[15px] md:text-[16px] mt-4 max-w-[600px] mx-auto"
        style={{ color: "var(--text-secondary)" }}
      >
        {t("contact.subtitle")}
      </p>

      <div className="w-[90%] lg:w-[80%] mx-auto pt-[3rem] grid grid-cols-1 lg:grid-cols-5 gap-[3rem]">
        {/* Contact info side */}
        <div className="lg:col-span-2 space-y-6">
          <h3
            className="text-[20px] font-bold font-heading mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {t("contact.infoTitle")}
          </h3>

          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div
                className="p-3 rounded-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(85, 230, 165, 0.12)",
                  color: "var(--accent-green)",
                }}
              >
                {info.icon}
              </div>
              <div>
                <p
                  className="text-[13px] font-medium uppercase tracking-wider mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-[15px] font-medium transition-colors duration-200"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent-green)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                  >
                    {info.value}
                  </a>
                ) : (
                  <p
                    className="text-[15px] font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {info.value}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Social links */}
          <div className="pt-4">
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(85, 230, 165, 0.1)",
                    color: "var(--text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent-green)";
                    e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(85, 230, 165, 0.1)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact form side */}
        <div className="lg:col-span-3">
          <div className="glass-card p-[2rem] md:p-[2.5rem]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
