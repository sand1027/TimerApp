import React from "react";
import HistoryList from "../components/HistoryList";
import useTimer from "../hooks/useTimer";
import { Link } from "react-router-dom";

export default function History() {
  const { history, exportHistory } = useTimer();

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-500 mb-4 inline-block">
          Back to Home
        </Link>
        <HistoryList history={history} onExport={exportHistory} />
      </div>
    </div>
  );
}
