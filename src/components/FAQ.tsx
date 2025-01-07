import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-[#F1F0FB]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>How is SGPA calculated in VTU?</AccordionTrigger>
            <AccordionContent>
              SGPA is calculated by dividing the sum of the product of the grade points and the credits for all subjects by the total credits. The formula is: SGPA = Σ(Credits × Grade Points) / ΣCredits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I save my results?</AccordionTrigger>
            <AccordionContent>
              Yes! You can download your results as a PDF or share them directly using the share button provided in the calculator.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What grade points are assigned to each grade?</AccordionTrigger>
            <AccordionContent>
              In VTU, grade points are assigned as follows: S: 10, A: 9, B: 8, C: 7, D: 6, E: 4, F: 0
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is this calculator official?</AccordionTrigger>
            <AccordionContent>
              While this calculator is not officially affiliated with VTU, it follows the official VTU grading system and calculation methods to provide accurate results.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;