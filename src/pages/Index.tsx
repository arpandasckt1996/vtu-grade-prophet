import { useState, useRef } from "react";
import { SubjectRow } from "@/components/SubjectRow";
import { ResultCard } from "@/components/ResultCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { FormulaDisplay } from "@/components/FormulaDisplay";
import { ActionButtons } from "@/components/ActionButtons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Subject {
  code: string;
  name: string;
  credits: number;
}

const defaultSubjects = [
  { code: "XX11", name: "Subject 1", credits: 3 },
  { code: "XX12", name: "Subject 2", credits: 3 },
  { code: "XX13", name: "Subject 3", credits: 3 },
  { code: "XX14", name: "Subject 4", credits: 3 },
  { code: "XX15", name: "Subject 5", credits: 3 },
  { code: "XX16", name: "Subject 6", credits: 1 },
  { code: "XX17", name: "Subject 7", credits: 1 },
  { code: "XX18", name: "Subject 8", credits: 2 },
  { code: "XX19", name: "Subject 9", credits: 1 },
];

const Index = () => {
  const [subjects, setSubjects] = useState<Subject[]>(defaultSubjects);
  const [grades, setGrades] = useState<Record<string, string>>(
    Object.fromEntries(subjects.map((s) => [s.code, ""]))
  );
  const [newSubject, setNewSubject] = useState({ code: "", name: "", credits: "" });
  const resultsRef = useRef<HTMLDivElement>(null);

  const calculateSGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      const grade = Number(grades[subject.code]);
      if (grade || grade === 0) {
        totalPoints += grade * subject.credits;
        totalCredits += subject.credits;
      }
    });

    return {
      sgpa: totalCredits ? totalPoints / totalCredits : 0,
      totalCredits,
      totalPoints,
    };
  };

  const handleAddSubject = () => {
    if (newSubject.code && newSubject.name && newSubject.credits) {
      const updatedSubjects = [
        ...subjects,
        { ...newSubject, credits: Number(newSubject.credits) },
      ];
      setSubjects(updatedSubjects);
      setGrades((prev) => ({ ...prev, [newSubject.code]: "" }));
      setNewSubject({ code: "", name: "", credits: "" });
    }
  };

  const handleRemoveSubject = (code: string) => {
    setSubjects(subjects.filter((s) => s.code !== code));
    const newGrades = { ...grades };
    delete newGrades[code];
    setGrades(newGrades);
  };

  const handleDownloadPDF = async () => {
    if (resultsRef.current) {
      const canvas = await html2canvas(resultsRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('sgpa-scorecard.pdf');
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'My SGPA Scorecard',
        text: `My SGPA: ${results.sgpa.toFixed(2)}`,
        url: window.location.href
      });
    } catch (error) {
      console.log('Sharing failed:', error);
    }
  };

  const results = calculateSGPA();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">VTU SGPA Calculator</h1>
          <p className="text-gray-600">Calculate your Semester Grade Point Average</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="grid grid-cols-4 gap-4 mb-4 px-4 text-sm font-medium text-gray-500">
            <div>Code</div>
            <div>Subject</div>
            <div className="text-center">Credits</div>
            <div className="text-right">Grade</div>
          </div>

          <div className="space-y-2">
            {subjects.map((subject) => (
              <SubjectRow
                key={subject.code}
                subjectCode={subject.code}
                subjectName={subject.name}
                credits={subject.credits}
                grade={grades[subject.code]}
                onGradeChange={(grade) =>
                  setGrades((prev) => ({ ...prev, [subject.code]: grade }))
                }
                onRemove={() => handleRemoveSubject(subject.code)}
              />
            ))}
          </div>

          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <Input
                placeholder="Code"
                value={newSubject.code}
                onChange={(e) =>
                  setNewSubject((prev) => ({ ...prev, code: e.target.value }))
                }
              />
              <Input
                placeholder="Subject Name"
                value={newSubject.name}
                onChange={(e) =>
                  setNewSubject((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <Input
                type="number"
                placeholder="Credits"
                value={newSubject.credits}
                onChange={(e) =>
                  setNewSubject((prev) => ({ ...prev, credits: e.target.value }))
                }
              />
              <Button
                onClick={handleAddSubject}
                className="w-full flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4" /> Add Subject
              </Button>
            </div>
          </div>
        </div>

        <div ref={resultsRef} className="space-y-6">
          <ResultCard
            sgpa={results.sgpa}
            totalCredits={results.totalCredits}
            totalPoints={results.totalPoints}
          />
          <FormulaDisplay
            totalPoints={results.totalPoints}
            totalCredits={results.totalCredits}
          />
        </div>

        <ActionButtons
          onDownload={handleDownloadPDF}
          onShare={handleShare}
        />
      </div>
    </div>
  );
};

export default Index;
