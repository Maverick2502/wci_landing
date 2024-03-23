export interface AccordionData {
  title: string;
  content: {
    name: string;
  }[];
}

export interface AccordionContextType {
  data: AccordionData[];
}

export interface AccordionItemProps {
  title: string;
  content: {
    name: string;
  }[];
  isActive: boolean;
  onToggle: () => void;
}

export type UseAccordionResult = [number | null, (index: number) => void];
