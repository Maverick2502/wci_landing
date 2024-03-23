import { motion } from "framer-motion";
import type { ButtonProps } from "../utils/types";
import "./button.scss";

function Button({ isActive, toggleMenu }: ButtonProps) {
  return (
    <button className="menu-btn" aria-label={isActive ? "Close Menu" : "Open Menu"}>
      <motion.div
        className="menu-btn__slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="menu-btn__slider__item" onClick={toggleMenu}>
          <h2>Menu</h2>
        </div>
        <div className="menu-btn__slider__item" onClick={toggleMenu}>
          <h2>Close</h2>
        </div>
      </motion.div>
    </button>
  );
}

export { Button };
