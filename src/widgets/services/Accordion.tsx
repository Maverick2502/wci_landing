import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../shared/shadcn/components/ui/accordion";
import classes from "./services.module.scss";
function CustomAccordion() {
  return (
    <Accordion type="single" collapsible className={classes["custom-accordion"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger className={classes["custom-accordion__title"]}>
          <span>IT-аутсорсинг</span>
        </AccordionTrigger>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>
          Системы управления проектами
        </AccordionContent>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>
          Системы управления задачами (Task Management Systems)
        </AccordionContent>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>
          Системы управления клиентскими отношениями (Customer Relationship Management Systems, CRM)
        </AccordionContent>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>
          Автоматизация тестирования и развертывания (Testing and Deployment Automation)
        </AccordionContent>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>
          Мониторинг и аналитика (Monitoring and Analytics)
        </AccordionContent>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>
          Системы автоматической документации (Automated Documentation Systems)
        </AccordionContent>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>
          Интеграция и конфигурация DevOps (DevOps Integration and Configuration)
        </AccordionContent>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>
          Автоматизация рутинных задач (Routine Task Automation)
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className={classes["custom-accordion__title"]}>Решения по аутстаффингу</AccordionTrigger>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>-</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className={classes["custom-accordion__title"]}>Разработка ПО</AccordionTrigger>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>-</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className={classes["custom-accordion__title"]}>Услуги по кибербезопасности</AccordionTrigger>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>-</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className={classes["custom-accordion__title"]}>Консалтинг и стратегия</AccordionTrigger>
        <AccordionContent className={classes["custom-accordion__subtitle"]}>-</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export { CustomAccordion };
