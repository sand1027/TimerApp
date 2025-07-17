import React from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

export default function TimerItem({ timer, onStart, onPause, onReset }) {
  const progress = (timer.remaining / timer.duration) * 100;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md mb-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-blue-500"
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
            <span>{timer.name}</span>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Time Left: {timer.remaining}s
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Status:{" "}
            <span
              className={
                timer.status === "Running"
                  ? "text-green-500"
                  : timer.status === "Paused"
                  ? "text-yellow-500"
                  : "text-red-500"
              }
            >
              {timer.status}
            </span>
          </p>
        </div>
        <div className="flex space-x-3">
          {timer.status !== "Completed" && (
            <Button
              onClick={() => onStart(timer.id)}
              disabled={timer.status === "Running"}
              className={`${
                timer.status === "Running"
                  ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              } text-white rounded-lg px-4 py-2 transition-all duration-200 flex items-center space-x-2`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
              <span>Start</span>
            </Button>
          )}
          <Button
            onClick={() => onPause(timer.id)}
            disabled={timer.status !== "Running"}
            className={`${
              timer.status !== "Running"
                ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700"
            } text-white rounded-lg px-4 py-2 transition-all duration-200 flex items-center space-x-2`}
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
            <span>Pause</span>
          </Button>
          <Button
            onClick={() => onReset(timer.id)}
            className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 transition-all duration-200 flex items-center space-x-2"
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
            <span>Reset</span>
          </Button>
        </div>
      </div>
      <Progress
        value={progress}
        className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full"
        indicatorClassName="bg-blue-500"
      />
    </div>
  );
}
