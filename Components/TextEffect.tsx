import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "@/context/LanguageContext";

const TextEffect = () => {
  const { t } = useLanguage();
  const roles = t("hero.roles") as string[];

  // Build sequence: [role, delay, role, delay, ...]
  const sequence: (string | number)[] = [];
  if (Array.isArray(roles)) {
    roles.forEach((role) => {
      sequence.push(role);
      sequence.push(1500);
    });
  }

  return (
    <TypeAnimation
      key={sequence.join(",")}
      sequence={sequence}
      speed={50}
      className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-bold uppercase"
      style={{ color: "var(--accent-green)" }}
      repeat={Infinity}
    />
  );
};

export default TextEffect;