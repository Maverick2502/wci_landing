import { useEffect, useRef, type ElementRef } from "react";
import type { AccordionItemProps } from "../utils/accordion.model";
import { motion } from "framer-motion";
import "./accordion.scss";

const AccordionItem = ({ title, content, isActive, onToggle }: AccordionItemProps) => {
  const contentRef = useRef<ElementRef<"ul">>(null);
  //   const { data } = useAccordionData(); // Get data from context

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isActive ? `${contentRef.current.scrollHeight}px` : "0";
    }
  }, [isActive]);

  return (
    <div className="accordion__item">
      <motion.button
        whileTap={{ scale: 0.99 }}
        id={`heading-${title.toLowerCase().replace(" ", "-")}`}
        aria-controls={`collapse-${title.toLowerCase().replace(" ", "-")}`}
        aria-expanded={isActive}
        aria-label={`Toggle ${title}`}
        role="button"
        className={`accordion__item__header ${isActive ? "active" : ""}`}
        onClick={onToggle}
      >
        {title}
      </motion.button>
      <ul
        className="accordion__item__body"
        id={`collapse-${title.toLowerCase().replace(" ", "-")}`}
        aria-labelledby={`heading-${title.toLowerCase().replace(" ", "-")}`}
        ref={contentRef}
      >
        {content.map((item, idx) => {
          return (
            <li key={idx} className="accordion__item__body__content">
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccordionItem;
