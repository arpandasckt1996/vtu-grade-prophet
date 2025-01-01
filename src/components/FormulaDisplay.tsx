import { Card, CardContent } from "./ui/card";

interface FormulaDisplayProps {
  totalPoints: number;
  totalCredits: number;
}

export const FormulaDisplay = ({ totalPoints, totalCredits }: FormulaDisplayProps) => {
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">How is SGPA Calculated?</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              SGPA = Total Points ÷ Total Credits
            </p>
            <p className="mt-2 font-medium">
              = {totalPoints} ÷ {totalCredits}
            </p>
          </div>
          <div className="text-sm text-gray-600">
            <p>Where:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Total Points = Sum of (Credit × Grade Point) for all subjects</li>
              <li>Total Credits = Sum of credits for all subjects</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};