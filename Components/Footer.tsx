import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/gdac-dev", label: "GitHub" },
    { icon: <FaXTwitter className="w-5 h-5" />, href: "https://x.com/guekoue", label: "Twitter/X" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/arsene-demenou/", label: "LinkedIn" },
  ];

  return (
    <footer
      className="section-primary py-8 border-t"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2
              className="text-[22px] font-bold cursor-pointer"
              style={{ color: "var(--text-primary)" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              GDAC<span className="text-yellow-400">TECH</span>
            </h2>
            <p className="text-[13px] mt-1" style={{ color: "var(--text-muted)" }}>
              {String(t("footer.builtWith"))}
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-lg transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(85, 230, 165, 0.08)",
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-green)";
                  e.currentTarget.style.background = "rgba(85, 230, 165, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "rgba(85, 230, 165, 0.08)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-[13px] text-center md:text-right"
            style={{ color: "var(--text-muted)" }}
          >
            {String(t("footer.copyright")).replace("{year}", String(year))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
