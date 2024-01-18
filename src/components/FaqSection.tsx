import { EmailForm } from "./EmailForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqs } from "@/utils/data";

export function FaqSection() {
  return (
    <div>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
        <AccordionItem value={`item-${faqs.length}`}>
          <AccordionTrigger>
            I have more questions. How can I get in touch?
          </AccordionTrigger>
          <AccordionContent>
            Feel free to reach out! Leave your email below, and we'll get back to you with answers to any additional queries.
            <div className="w-full">
              <EmailForm />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
