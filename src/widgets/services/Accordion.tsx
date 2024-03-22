import React, { useState, useEffect, useRef, Fragment } from "react";
import "./services.scss";

const accordionData = [
  {
    title: "IT-аутсорсинг",
    content: (
      <Fragment>
        <p>Системы управления проектами</p>
        <p>Системы управления проектами</p>
        <p>Системы управления проектами</p>
        <p>Системы управления проектами</p>
        <p>Системы управления проектами</p>
        <p>Системы управления задачами (Task Management Systems)</p>
      </Fragment>
    ),
  },
  {
    title: "Решения по аутстаффингу",
    content: (
      <>
        <p>Системы управления проектами</p>
        <p>Системы управления задачами (Task Management Systems)</p>
      </>
    ),
  },

  {
    title: "Разработка ПО",
    content: (
      <>
        <p>Системы управления проектами</p>
        <p>Системы управления задачами (Task Management Systems)</p>
      </>
    ),
  },
  {
    title: "Услуги по кибербезопасности",
    content: (
      <>
        <p>Системы управления проектами</p>
        <p>Системы управления задачами (Task Management Systems)</p>
      </>
    ),
  },
  {
    title: "Консалтинг и стратегия",
    content: (
      <>
        <p>Системы управления проектами</p>
        <p>Системы управления задачами (Task Management Systems)</p>
      </>
    ),
  },
];

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ title, content, isActive, onToggle }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current!.style.maxHeight = isActive ? `${contentRef.current!.scrollHeight}px` : "0";
  }, [isActive]);

  return (
    <div className="accordion__item">
      <button
        id={`heading-${title.toLowerCase().replace(" ", "-")}`}
        aria-controls={`collapse-${title.toLowerCase().replace(" ", "-")}`}
        aria-expanded={isActive}
        aria-label={`Toggle ${title}`}
        role="button"
        className={`${isActive ? "accordion__item__header active" : "accordion__item__header"}`}
        onClick={onToggle}
      >
        {title}
      </button>
      <div
        className="accordion__item__body"
        id={`collapse-${title.toLowerCase().replace(" ", "-")}`}
        aria-labelledby={`heading-${title.toLowerCase().replace(" ", "-")}`}
        ref={contentRef}
      >
        <div className="accordion__item__body__content">{content}</div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onToggle={() => setActiveIndex(prevIndex => (prevIndex === index ? null : index))}
        />
      ))}
    </div>
  );
};

export default Services;
