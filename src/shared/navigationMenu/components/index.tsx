import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { menu } from "../utils/anim";
import { Button } from "./Button";
import { Menu } from "./Menu";
import "./styles.scss";

function NavigationMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = useCallback((e: any) => {
    if (!e.target.closest("#nav-menu")) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className="nav-menu-container" id="nav-menu">
      <motion.div
        animate={isActive ? "open" : "closed"}
        className="nav-menu-container__content"
        variants={menu}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Menu />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={handleToggle} />
    </div>
  );
}

export default NavigationMenu;
