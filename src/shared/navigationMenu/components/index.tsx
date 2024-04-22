import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { menu } from "../utils/anim";
import { Button } from "./Button";
import { Menu } from "./Menu";
import "./styles.scss";

function NavigationMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (e: any) => {
    if (!e.target.closest("#nav-menu")) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div>
      <div className={isActive ? "background-blur" : ""}></div>
      <div className="nav-menu-container" id="nav-menu">
        <motion.div
          animate={isActive ? "open" : "closed"}
          className="nav-menu-container__content"
          variants={menu}
          initial="closed"
        >
          <AnimatePresence>{isActive && <Menu handleToggle={handleToggle} />}</AnimatePresence>
        </motion.div>
        <Button isActive={isActive} toggleMenu={handleToggle} />
      </div>
    </div>
  );
}

export default NavigationMenu;
