"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import styles from "./style.module.scss";
import Nav from "./Nav";

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

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles["header"]}>
      <motion.div
        className={styles["header__menu"]}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
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
