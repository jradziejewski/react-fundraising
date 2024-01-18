import { EmailForm } from "./EmailForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How can I donate to the ChangeMakers Fund?",
    answer:
      "Donating is easy! Simply visit our donation section, enter your desired amount, and complete the secure transaction using Stripe checkout.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, all donations made to the ChangeMakers Fund are tax-deductible. You will receive a confirmation email with the necessary details for tax purposes.",
  },
  {
    question: "Can I choose which project my donation goes to?",
    answer:
      "Absolutely! During the donation process, you can specify if you have a preference for a particular project. Your contribution will be allocated accordingly.",
  },
  {
    question: "How often are project updates provided?",
    answer:
      "We strive to keep our supporters informed. Project updates are typically shared monthly, providing insights into milestones achieved, challenges faced, and the impact of your donations.",
  },
  {
    question: "Are there any additional fees for online transactions?",
    answer:
      "No, we cover all transaction fees associated with online donations. 100% of your intended contribution goes directly to supporting the ChangeMakers Fund initiatives.",
  },
];

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
