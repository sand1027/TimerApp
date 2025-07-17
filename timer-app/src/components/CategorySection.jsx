import React, { useState } from "react";
import { Button } from "./ui/button";
import TimerItem from "./TimerItem";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CategorySection({
  category,
  timers,
  onStart,
  onPause,
  onReset,
  onBulkStart,
  onBulkPause,
  onBulkReset,
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <span>{category}</span>
        </h2>
        <div className="flex space-x-3">
          <Button
            onClick={() => onBulkStart(category)}
            className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 font-medium transition-all duration-200 flex items-center space-x-2"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
            <span>Start All</span>
          </Button>
          <Button
            onClick={() => onBulkPause(category)}
            className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg px-4 py-2 font-medium transition-all duration-200 flex items-center space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Pause All</span>
          </Button>
          <Button
            onClick={() => onBulkReset(category)}
            className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 font-medium transition-all duration-200 flex items-center space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Reset All</span>
          </Button>
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-900 dark:text-white rounded-lg px-4 py-2 transition-all duration-200"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 space-y-4">
          {timers.map((timer) => (
            <TimerItem
              key={timer.id}
              timer={timer}
              onStart={onStart}
              onPause={onPause}
              onReset={onReset}
            />
          ))}
        </div>
      )}
    </div>
  );
}
