interface ResultCardProps {
  sgpa: number;
  totalCredits: number;
  totalPoints: number;
}

export const ResultCard = ({ sgpa, totalCredits, totalPoints }: ResultCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg animate-fadeIn">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Your Results</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-sm text-gray-600 mb-1">SGPA</p>
            <p className="text-2xl font-bold text-primary">{sgpa.toFixed(2)}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-sm text-gray-600 mb-1">Credits</p>
            <p className="text-2xl font-bold">{totalCredits}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-sm text-gray-600 mb-1">Points</p>
            <p className="text-2xl font-bold">{totalPoints}</p>
          </div>
        </div>
      </div>
    </div>
  );
};