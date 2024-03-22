import { createContext } from "react";
import type { AccordionContextType } from "../utils/accordion.model";

export const AccordionContext = createContext<AccordionContextType>({ data: [] });
