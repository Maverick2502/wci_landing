import { motion } from "framer-motion";
import type { ButtonProps } from "../utils/types";
import "./button.scss";
import { useTranslation } from "react-i18next";

function Button({ isActive, toggleMenu }: ButtonProps) {
  const { t } = useTranslation("translation");
  return (
    <button className="menu-btn" aria-label={isActive ? "Close Menu" : "Open Menu"}>
      <motion.div
        className="menu-btn__slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="menu-btn__slider__item" onClick={toggleMenu}>
          <h2>{t("menu")}</h2>
        </div>
        <div className="menu-btn__slider__item" onClick={toggleMenu}>
          <h2>Close</h2>
        </div>
      </motion.div>
    </button>
  );
}

export { Button };
