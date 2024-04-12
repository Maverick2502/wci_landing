import { useEffect, useRef, type ElementRef } from "react";
import type { AccordionItemProps } from "../utils/accordion.model";
import classes from "./accordion.module.scss";

const AccordionItem = ({ title, content, isActive, onToggle }: AccordionItemProps) => {
  const contentRef = useRef<ElementRef<"ul">>(null);
  //   const { data } = useAccordionData(); // Get data from context

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isActive ? `${contentRef.current.scrollHeight}px` : "0";
    }
  }, [isActive]);

  return (
    <div className={classes["accordion__item"]}>
      <button
        id={`heading-${title.toLowerCase().replace(" ", "-")}`}
        aria-controls={`collapse-${title.toLowerCase().replace(" ", "-")}`}
        aria-expanded={isActive}
        aria-label={`Toggle ${title}`}
        role="button"
        className={classes["accordion__item__header"]}
        onClick={onToggle}
      >
        <h4>{title}</h4>
        <span
          style={{
            transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform ease-out 0.4s",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M12 3V21" stroke="#454545" strokeWidth="5" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <ul
        className={classes["accordion__item__body"]}
        id={`collapse-${title.toLowerCase().replace(" ", "-")}`}
        aria-labelledby={`heading-${title.toLowerCase().replace(" ", "-")}`}
        ref={contentRef}
      >
        {content.map((item, idx) => {
          return (
            <li key={idx} className={classes["accordion__item__body__content"]}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccordionItem;
