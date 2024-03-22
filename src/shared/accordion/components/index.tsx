import React from "react";
import { AccordionContext } from "../context/AccordionContext";
import type { AccordionData } from "../utils/accordion.model";
import { useAccordion } from "../utils/useAccordion";
import AccordionItem from "./AccordionItem";

const Accordion: React.FC<{ data: AccordionData[] }> = ({ data }) => {
  const [activeIndex, toggleIndex] = useAccordion();

  return (
    <AccordionContext.Provider value={{ data }}>
      <div className="accordion">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isActive={activeIndex === index}
            onToggle={() => toggleIndex(index)}
          />
        ))}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
