import styles from "./menu.module.scss";
import { motion } from "framer-motion";
import { footerLinks, links } from "../utils/constant";
import { perspective, slideIn } from "../utils/anim";

export default function Menu() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div custom={i} variants={perspective} initial="initial" animate="enter" exit="exit">
                <a>{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title } = link;
          return (
            <motion.a variants={slideIn} custom={i} initial="initial" animate="enter" exit="exit" key={`f_${i}`}>
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
