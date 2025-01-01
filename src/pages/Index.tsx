import { useState } from "react";
import { SubjectRow } from "@/components/SubjectRow";
import { ResultCard } from "@/components/ResultCard";

const subjects = [
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
  const [grades, setGrades] = useState<Record<string, string>>(
    Object.fromEntries(subjects.map((s) => [s.code, ""]))
  );

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
              />
            ))}
          </div>
        </div>

        <ResultCard
          sgpa={results.sgpa}
          totalCredits={results.totalCredits}
          totalPoints={results.totalPoints}
        />
      </div>
    </div>
  );
};

export default Index;