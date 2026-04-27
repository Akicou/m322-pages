import { useState } from "react";

/**
 * Accordion list of FAQ items.
 *
 * @param {{
 *   items: Array<{ q: string, a: string }>,
 *   defaultOpen?: number,
 * }} props
 */
export function FaqList({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            className={`faq-item${isOpen ? " faq-item--open" : ""}`}
            key={item.q}
          >
            <button
              type="button"
              className="faq-q"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        );
      })}
    </div>
  );
}
