import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface GradeDistributionProps {
  grades: Record<string, string>;
}

export const GradeDistribution = ({ grades }: GradeDistributionProps) => {
  const gradeCount = Object.values(grades).reduce((acc, grade) => {
    if (grade) {
      acc[grade] = (acc[grade] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(gradeCount).map(([grade, count]) => ({
    name: `Grade ${grade}`,
    value: count,
  }));

  const COLORS = ['#4F46E5', '#7C3AED', '#A855F7', '#D946EF', '#EC4899', '#F43F5E'];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg mt-6">
      <h3 className="text-2xl font-semibold mb-4 text-center">Grade Distribution</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};