import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface GradeSelectProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const grades = [
  { label: "S", value: "10" },
  { label: "A", value: "9" },
  { label: "B", value: "8" },
  { label: "C", value: "7" },
  { label: "D", value: "6" },
  { label: "E", value: "5" },
  { label: "F", value: "0" },
];

export const GradeSelect = ({ value, onChange, disabled }: GradeSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className="w-[100px] transition-all hover:border-primary">
        <SelectValue placeholder="Grade" />
      </SelectTrigger>
      <SelectContent>
        {grades.map((grade) => (
          <SelectItem key={grade.value} value={grade.value} className="cursor-pointer">
            {grade.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};