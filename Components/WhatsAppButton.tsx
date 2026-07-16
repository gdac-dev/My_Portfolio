import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { WHATSAPP_PHONE } from "@/data/whatsapp";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const rawMessage = t("whatsapp.message");
  const encodedMessage = encodeURIComponent(rawMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn-float"
        aria-label="Contact me on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>

      <style>{`
        .whatsapp-btn-float {
          position: fixed;
          bottom: 24px;
          left: 24px;
          width: 60px;
          height: 60px;
          background-color: #25d366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
          z-index: 999999;
          transition: all 0.3s ease;
          animation: wa-pulse-bounce 3s infinite ease-in-out;
        }

        .whatsapp-btn-float:hover {
          transform: scale(1.1) rotate(5deg);
          background-color: #22c35e;
          box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
        }

        @keyframes wa-pulse-bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
          }
          50% {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 10px 25px rgba(37, 211, 102, 0.6);
          }
        }

        @media (max-width: 640px) {
          .whatsapp-btn-float {
            bottom: 20px;
            left: 20px;
            width: 52px;
            height: 52px;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
          
          .whatsapp-btn-float svg {
            width: 1.6rem;
            height: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
