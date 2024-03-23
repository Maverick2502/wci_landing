import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { menu } from "../utils/anim";
import { Button } from "./Button";
import { Menu } from "./Menu";
import "./styles.scss";

function NavigationMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="nav-menu-container">
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
