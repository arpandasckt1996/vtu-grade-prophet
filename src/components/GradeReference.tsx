import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const GradeReference = () => {
  const gradeInfo = [
    { grade: 'S', points: 10, description: 'Outstanding' },
    { grade: 'A', points: 9, description: 'Excellent' },
    { grade: 'B', points: 8, description: 'Very Good' },
    { grade: 'C', points: 7, description: 'Good' },
    { grade: 'D', points: 6, description: 'Average' },
    { grade: 'E', points: 5, description: 'Poor' },
    { grade: 'F', points: 0, description: 'Fail' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg mt-6">
      <h3 className="text-2xl font-semibold mb-4">Grade Point Reference</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Grade</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gradeInfo.map((info) => (
            <TableRow key={info.grade}>
              <TableCell className="font-medium">{info.grade}</TableCell>
              <TableCell>{info.points}</TableCell>
              <TableCell>{info.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};