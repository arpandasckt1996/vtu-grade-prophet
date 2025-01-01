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
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();

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
      toast({
        title: "Subject Added",
        description: "New subject has been added successfully.",
      });
    }
  };

  const handleUpdateSubject = (index: number, code: string, name: string, credits: number) => {
    const updatedSubjects = [...subjects];
    const oldCode = subjects[index].code;
    updatedSubjects[index] = { code, name, credits };
    setSubjects(updatedSubjects);
    
    if (oldCode !== code) {
      const newGrades = { ...grades };
      newGrades[code] = newGrades[oldCode];
      delete newGrades[oldCode];
      setGrades(newGrades);
    }
    
    toast({
      title: "Subject Updated",
      description: "Subject details have been updated successfully.",
    });
  };

  const handleRemoveSubject = (code: string) => {
    setSubjects(subjects.filter((s) => s.code !== code));
    const newGrades = { ...grades };
    delete newGrades[code];
    setGrades(newGrades);
    toast({
      title: "Subject Removed",
      description: "Subject has been removed successfully.",
    });
  };

  const handleDownloadPDF = async () => {
    if (resultsRef.current) {
      const canvas = await html2canvas(resultsRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Add title
      pdf.setFontSize(20);
      pdf.text('VTU SGPA Scorecard', 20, 20);
      
      // Add subject details
      pdf.setFontSize(12);
      let yPosition = 40;
      
      subjects.forEach((subject, index) => {
        const grade = grades[subject.code] || '-';
        pdf.text(`${index + 1}. ${subject.name} (${subject.code}) - Credits: ${subject.credits}, Grade: ${grade}`, 20, yPosition);
        yPosition += 10;
      });
      
      // Add scorecard content
      const pdfWidth = pdf.internal.pageSize.getWidth();
      pdf.addImage(imgData, 'PNG', 0, yPosition, pdfWidth, 80);
      
      pdf.save('vtu-sgpa-scorecard.pdf');
      
      toast({
        title: "PDF Generated",
        description: "Your scorecard has been downloaded successfully.",
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'VTU SGPA Scorecard',
      text: `My SGPA: ${results.sgpa.toFixed(2)}\nTotal Credits: ${results.totalCredits}\nTotal Points: ${results.totalPoints.toFixed(2)}`,
      url: window.location.href
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast({
          title: "Shared Successfully",
          description: "Your scorecard has been shared.",
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          toast({
            title: "Sharing Failed",
            description: "Unable to share. Try copying the results instead.",
            variant: "destructive",
          });
        }
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(
          `VTU SGPA Scorecard\n\nSGPA: ${results.sgpa.toFixed(2)}\nTotal Credits: ${results.totalCredits}\nTotal Points: ${results.totalPoints.toFixed(2)}\n\nView more at: ${window.location.href}`
        );
        toast({
          title: "Results Copied",
          description: "Scorecard details have been copied to clipboard.",
        });
      } catch (error) {
        toast({
          title: "Action Failed",
          description: "Unable to copy results. Please try again.",
          variant: "destructive",
        });
      }
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
          <div className="grid grid-cols-5 gap-4 mb-4 px-4 text-sm font-medium text-gray-500">
            <div>Code</div>
            <div>Subject</div>
            <div className="text-center">Credits</div>
            <div>Grade</div>
            <div className="text-right">Actions</div>
          </div>

          <div className="space-y-2">
            {subjects.map((subject, index) => (
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
                onUpdate={(code, name, credits) => 
                  handleUpdateSubject(index, code, name, credits)
                }
              />
            ))}
          </div>

          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-5 gap-4">
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
              <div className="col-span-2">
                <Button
                  onClick={handleAddSubject}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Plus className="h-4 w-4" /> Add Subject
                </Button>
              </div>
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
