import { useState } from "react";
import { GradeSelect } from "./GradeSelect";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Trash2, Edit2, Save, X } from "lucide-react";

interface SubjectRowProps {
  subjectCode: string;
  subjectName: string;
  credits: number;
  grade: string;
  onGradeChange: (grade: string) => void;
  onRemove: () => void;
  onUpdate: (code: string, name: string, credits: number) => void;
}

export const SubjectRow = ({
  subjectCode,
  subjectName,
  credits,
  grade,
  onGradeChange,
  onRemove,
  onUpdate,
}: SubjectRowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCode, setEditedCode] = useState(subjectCode);
  const [editedName, setEditedName] = useState(subjectName);
  const [editedCredits, setEditedCredits] = useState(credits.toString());

  const handleSave = () => {
    onUpdate(editedCode, editedName, Number(editedCredits));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedCode(subjectCode);
    setEditedName(subjectName);
    setEditedCredits(credits.toString());
    setIsEditing(false);
  };

  return (
    <div className="grid grid-cols-5 gap-4 items-center p-4 rounded-lg bg-white shadow-sm animate-fadeIn hover:shadow-md transition-shadow">
      {isEditing ? (
        <>
          <Input
            value={editedCode}
            onChange={(e) => setEditedCode(e.target.value)}
            className="text-sm"
            placeholder="Code"
          />
          <Input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="text-sm"
            placeholder="Subject Name"
          />
          <Input
            type="number"
            value={editedCredits}
            onChange={(e) => setEditedCredits(e.target.value)}
            className="text-sm text-center"
            placeholder="Credits"
          />
          <GradeSelect value={grade} onChange={onGradeChange} />
          <div className="flex justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-green-500 hover:text-green-700 hover:bg-green-50"
              onClick={handleSave}
            >
              <Save className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              onClick={handleCancel}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="font-medium text-sm text-gray-600">{subjectCode}</div>
          <div className="text-sm text-gray-800">{subjectName}</div>
          <div className="text-sm text-center text-gray-800">{credits}</div>
          <GradeSelect value={grade} onChange={onGradeChange} />
          <div className="flex justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-blue-500 hover:text-blue-700 hover:bg-blue-50"
              onClick={() => setIsEditing(true)}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={onRemove}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};