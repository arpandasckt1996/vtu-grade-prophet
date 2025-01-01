import { GradeSelect } from "./GradeSelect";

interface SubjectRowProps {
  subjectCode: string;
  subjectName: string;
  credits: number;
  grade: string;
  onGradeChange: (grade: string) => void;
}

export const SubjectRow = ({
  subjectCode,
  subjectName,
  credits,
  grade,
  onGradeChange,
}: SubjectRowProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center p-4 rounded-lg bg-white shadow-sm animate-fadeIn hover:shadow-md transition-shadow">
      <div className="font-medium text-sm text-gray-600">{subjectCode}</div>
      <div className="text-sm">{subjectName}</div>
      <div className="text-sm text-center">{credits}</div>
      <div className="flex justify-end">
        <GradeSelect value={grade} onChange={onGradeChange} />
      </div>
    </div>
  );
};