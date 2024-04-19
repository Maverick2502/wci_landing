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
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
            <path
              d="M2 2H13.0299M2 6.9023H13.0299M2 11.8044H13.0299"
              stroke="#101010"
              stroke-width="3.06386"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="menu-btn__slider__item" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
            <path
              d="M2 2H13.0299M2 6.9023H13.0299M2 11.8044H13.0299"
              stroke="white"
              stroke-width="3.06386"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </button>
  );
}

export { Button };
