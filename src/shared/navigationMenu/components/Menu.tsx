import { motion } from "framer-motion";
import { perspective, slideIn } from "../utils/anim";
import { footerLinks, links } from "../utils/constant";
import "./menu.scss";

function Menu() {
  return (
    <div className="menu-nav">
      <ul className="menu-nav__list">
        {links.map(({ href, title }, i) => (
          <motion.li key={i} custom={i} variants={perspective} initial="initial" animate="enter" exit="exit">
            <a href={href}>{title}</a>
          </motion.li>
        ))}
      </ul>

      <ul className="menu-nav__socials">
        {footerLinks.map(({ href, title }, i) => (
          <motion.li key={i} custom={i} variants={slideIn} initial="initial" animate="enter" exit="exit">
            <a href={href}>{title}</a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export { Menu };
