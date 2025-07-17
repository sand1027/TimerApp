import React from "react";
import { Button } from "./ui/button";

export default function HistoryList({ history, onExport }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-3xl mx-auto transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Timer History</span>
        </h1>
        <Button
          onClick={onExport}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-medium transition-all duration-200 flex items-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>Export History</span>
        </Button>
      </div>
      {history.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-center py-4">
          No completed timers
        </p>
      ) : (
        <ul className="space-y-3">
          {history.map((entry, index) => (
            <li
              key={index}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {entry.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Completed: {new Date(entry.completionTime).toLocaleString()}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
