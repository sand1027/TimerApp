import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

export default function Modal({ isOpen, onClose, timerName }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transition-all duration-300">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-green-500"
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
            <span>Timer Completed</span>
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-gray-700 dark:text-gray-300">
            Congratulations for completing{" "}
            <span className="font-medium">{timerName}</span>!
          </p>
        </div>
        <Button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-medium transition-all duration-200 flex items-center justify-center space-x-2"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>Close</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
