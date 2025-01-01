import { Share2, Download } from "lucide-react";
import { Button } from "./ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface ActionButtonsProps {
  onDownload: () => void;
  onShare: () => void;
}

export const ActionButtons = ({ onDownload, onShare }: ActionButtonsProps) => {
  return (
    <div className="flex gap-2 justify-end mt-6">
      <Button
        variant="outline"
        onClick={onShare}
        className="flex items-center gap-2 hover:bg-gray-100"
      >
        <Share2 className="h-4 w-4" />
        Share Results
      </Button>
      <Button
        onClick={onDownload}
        className="flex items-center gap-2 bg-primary hover:bg-primary/90"
      >
        <Download className="h-4 w-4" />
        Download Scorecard
      </Button>
    </div>
  );
};