import { GradeSelect } from "./GradeSelect";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface SubjectRowProps {
  subjectCode: string;
  subjectName: string;
  credits: number;
  grade: string;
  onGradeChange: (grade: string) => void;
  onRemove: () => void;
}

export const SubjectRow = ({
  subjectCode,
  subjectName,
  credits,
  grade,
  onGradeChange,
  onRemove,
}: SubjectRowProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center p-4 rounded-lg bg-white shadow-sm animate-fadeIn hover:shadow-md transition-shadow">
      <div className="font-medium text-sm text-gray-600">{subjectCode}</div>
      <div className="text-sm">{subjectName}</div>
      <div className="text-sm text-center">{credits}</div>
      <div className="flex justify-end items-center gap-2">
        <GradeSelect value={grade} onChange={onGradeChange} />
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={onRemove}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};