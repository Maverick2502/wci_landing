import { useState } from "react";
import type { UseAccordionResult } from "./accordion.model";

const useAccordion = (initialIndex: number | null = null): UseAccordionResult => {
  const [activeIndex, setActiveIndex] = useState<number | null>(initialIndex);

  const toggleIndex = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return [activeIndex, toggleIndex];
};

export { useAccordion };
