import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./Button";
import { Menu } from "./Menu";
import styles from "./styles.module.scss";

const menu = {
  open: {
    width: "460px",
    height: "560px",
    top: "-20px",
    right: "-20px",
    borderRadius: "15px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "138px",
    height: "40px",
    top: "0px",
    right: "0px",
    borderRadius: "15px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};

export default function NavigationMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles["header"]}>
      <motion.div
        className={styles["header__menu"]}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Menu />}</AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
