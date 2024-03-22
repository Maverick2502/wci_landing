interface AccordionData {
  title: string;
  content: {
    name: string;
  }[];
}

interface AccordionContextType {
  data: AccordionData[];
}

interface AccordionItemProps {
  title: string;
  content: {
    name: string;
  }[];
  isActive: boolean;
  onToggle: () => void;
}

type UseAccordionResult = [number | null, (index: number) => void];

export type { AccordionContextType, AccordionData, AccordionItemProps, UseAccordionResult };
