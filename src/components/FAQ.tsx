import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-[#F1F0FB] to-[#E5DEFF]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#7E69AB] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#8E9196] text-lg">
            Find answers to common questions about VTU SGPA calculation
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="bg-white rounded-lg shadow-sm border border-[#D6BCFA]/20 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-[#F8F7FF] transition-colors">
                <span className="text-[#7E69AB] font-medium text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-[#8E9196] bg-white">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-[#8E9196] text-sm">
            Still have questions? Feel free to reach out to us
          </p>
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    value: "item-1",
    question: "How is SGPA calculated in VTU?",
    answer: "SGPA is calculated by dividing the sum of the product of the grade points and the credits for all subjects by the total credits. The formula is: SGPA = Σ(Credits × Grade Points) / ΣCredits."
  },
  {
    value: "item-2",
    question: "Can I save my results?",
    answer: "Yes! You can download your results as a PDF or share them directly using the share button provided in the calculator."
  },
  {
    value: "item-3",
    question: "What grade points are assigned to each grade?",
    answer: "In VTU, grade points are assigned as follows: S: 10, A: 9, B: 8, C: 7, D: 6, E: 4, F: 0"
  },
  {
    value: "item-4",
    question: "Is this calculator official?",
    answer: "While this calculator is not officially affiliated with VTU, it follows the official VTU grading system and calculation methods to provide accurate results."
  }
];

export default FAQ;