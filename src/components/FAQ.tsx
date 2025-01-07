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
    question: "How to calculate CGPA from SGPA?",
    answer: "To calculate CGPA from SGPA, sum up all the SGPAs of the semesters and divide the total by the number of semesters. Formula: CGPA = Sum of all SGPAs / Number of semesters."
  },
  {
    value: "item-2",
    question: "How to calculate SGPA?",
    answer: "SGPA is calculated by dividing the total credit points earned in a semester by the total credits. Formula: SGPA = Σ(Credit × Grade Point) / ΣCredits."
  },
  {
    value: "item-3",
    question: "How to calculate percentage from SGPA?",
    answer: "To convert SGPA to percentage, multiply the SGPA by 10 and subtract 7.5. Formula: Percentage = (SGPA × 10) − 7.5."
  },
  {
    value: "item-4",
    question: "How to calculate SGPA from marks?",
    answer: "To calculate SGPA from marks, convert the marks into grade points using the university's grading scale. Then apply the SGPA formula: SGPA = Σ(Credit × Grade Point) / ΣCredits."
  },
  {
    value: "item-5",
    question: "How to calculate SGPA into percentage?",
    answer: "Convert SGPA into a percentage by multiplying it with the conversion factor provided by your university. Common formula: Percentage = (SGPA × 10) − 7.5."
  },
  {
    value: "item-6",
    question: "How to calculate SGPA in VTU?",
    answer: "For VTU, SGPA is calculated using the standard formula: SGPA = Σ(Credit × Grade Point) / ΣCredits. Refer to VTU's grading guidelines for grade point mapping."
  },
  {
    value: "item-7",
    question: "How to calculate SGPA to CGPA?",
    answer: "Add up all the SGPAs and divide the sum by the number of semesters to get the CGPA."
  },
  {
    value: "item-8",
    question: "How is SGPA calculated?",
    answer: "SGPA is calculated by multiplying the credit points of each subject by the grade points earned, summing these values, and dividing by the total credits."
  },
  {
    value: "item-9",
    question: "How SGPA is calculated?",
    answer: "SGPA is determined by summing the product of credits and grade points for all subjects in a semester and dividing by the total credits."
  },
  {
    value: "item-10",
    question: "How to calculate SGPA of a semester?",
    answer: "Add the total grade points earned across subjects in the semester, multiply each by its respective credits, then divide by the sum of credits."
  },
  {
    value: "item-11",
    question: "How to calculate SGPA in Calicut University?",
    answer: "In Calicut University, use the standard SGPA formula. Refer to the university grading scale for specific conversions of marks to grade points."
  },
  {
    value: "item-12",
    question: "How to calculate SGPA in KTU?",
    answer: "Calculate SGPA in KTU using the formula: SGPA = Σ(Credit × Grade Point) / ΣCredits. KTU provides grade point details in its grading policy."
  },
  {
    value: "item-13",
    question: "How to calculate total SGPA of all semesters?",
    answer: "Add up the SGPAs of all semesters and divide by the number of semesters to get the average SGPA."
  },
  {
    value: "item-14",
    question: "How to calculate SGPA from percentage?",
    answer: "Convert the percentage to SGPA using your university's prescribed formula. Common conversion: SGPA = (Percentage + 7.5) / 10."
  },
  {
    value: "item-15",
    question: "How is CGPA calculated from SGPA?",
    answer: "CGPA is calculated by averaging the SGPAs of all semesters. Add all the SGPAs and divide by the total number of semesters."
  },
  {
    value: "item-16",
    question: "How to calculate SGPA to GPA?",
    answer: "Many universities equate SGPA and GPA for simplicity. If required, convert SGPA to GPA using a scale conversion provided by the institution."
  },
  {
    value: "item-17",
    question: "How to calculate percentage to SGPA?",
    answer: "Use the formula: SGPA = (Percentage + 7.5) / 10."
  },
  {
    value: "item-18",
    question: "How to calculate marks from SGPA?",
    answer: "Marks can be back-calculated from SGPA using grade points and credit weights provided by the institution."
  },
  {
    value: "item-19",
    question: "How to calculate CGPA using SGPA?",
    answer: "Average the SGPAs of all semesters. Add them up and divide by the number of semesters to get CGPA."
  }
];


export default FAQ;